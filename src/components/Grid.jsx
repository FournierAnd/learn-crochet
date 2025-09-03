import { useEffect, useState } from 'react'
import { crochetStitches as crochet_plan } from '../utils/crochet.js'
import CrochetCard from './CrochetCard'

export default function Grid() {

    const [selectedDay, setSelectedDay] = useState(null);
    const [savedDays, setSavedDays] = useState(null);
    const completedDays = Object.keys(savedDays || {}).filter((val) => {
        const entry = savedDays[val];
        return entry.isComplete;
    });

    // Save to local storage and modify the savedDays state
    function handleSave(index, data) {
        const newObj = {
            ...savedDays,
            [index]: {
                ...data,
                isComplete: !!data.isComplete || !!savedDays?.[index]?.isComplete
            }
        };

        setSavedDays(newObj);
        localStorage.setItem('stitch-done', JSON.stringify(newObj));
        setSelectedDay(null);
    }

    // To mark a day as completed so the user is allowed to move to the next one
    function handleComplete(index, data) {
        const newObj = { ...data };

        newObj.isComplete = true; // new key associated with every day
        handleSave(index, newObj);
    }

    useEffect(() => {
        if (!localStorage) { return }

        let savedData = {};

        if (localStorage.getItem('stitch-done')) {
            savedData = JSON.parse(localStorage.getItem('stitch-done'));
        }

        setSavedDays(savedData);
    }, [])

    return (
        <div className='crochet-plan-grid'>
            {Object.keys(crochet_plan).map((crochet, crochetIndex) => {

                const isLocked = crochetIndex === 0 ?
                    false : !completedDays.includes(`${crochetIndex - 1}`);

                const dayNum = ((crochetIndex / 8) <= 1) ? '0' + (crochetIndex + 1) : crochetIndex + 1;

                const crochetPlan = crochet_plan[crochetIndex];

                if (crochetIndex === selectedDay) {
                    return (
                        <CrochetCard
                            key={crochetIndex}
                            crochetPlan={crochetPlan}
                            crochetIndex={crochetIndex}
                            dayNum={dayNum}
                            savedStitches={savedDays?.[crochetIndex]?.stitches}
                            handleSave={handleSave}
                            handleComplete={handleComplete}
                        />
                    )
                }

                return (
                    <button key={crochetIndex} className={'plan-card ' + (isLocked ? 'inactive' : '')} onClick={() => {
                        if (isLocked) { return }
                        setSelectedDay(crochetIndex)
                    }} >
                        <div className='plan-card-header'>
                            <p>Day {dayNum}</p>
                            <div className='icon-div'>
                                {isLocked ? (
                                    <i className='fa-solid fa-lock'></i>
                                ) : (
                                    <i className='fa-solid fa-unlock'></i>
                                )}
                            </div>
                        </div>
                    </button>
                )

            })}
        </div>
    )
}