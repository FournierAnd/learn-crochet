import React, { useState } from "react"
import Modal from "./Modal"
import { stitchDiagrams } from "../utils/crochet.js"

export default function CrochetCard(props) {

    const { crochetPlan, crochetIndex, dayNum, savedStitches, handleSave, handleComplete } = props;
    const { swatch, video } = crochetPlan || {};
    const [showStitchDiagram, setShowStitchDiagram] = useState(null);
    const [stitches, setStitches] = useState(savedStitches || {});

    // Store the stitch count for an exercise
    function handleAddStitch(title, stitch) {
        const newObj = {
            ...stitches,
            [title]: stitch,
        }
        setStitches(newObj);
    }

    return (
        <div className="crochet-container">
            {showStitchDiagram && (
                <Modal showStitchDiagram={showStitchDiagram} handleCloseModal={() => {
                    setShowStitchDiagram(null)
                }} />
            )}
            <div className="crochet-card card">
                <div className="inside-card-header">
                    <p>Day {dayNum}</p>
                </div>
                <div className="inside-card-header">
                    {video.map((videoLink, videoIndex) => {
                        return (
                            <React.Fragment key={videoIndex}>
                                <h2>{videoLink.name}</h2>
                                <button className="help-icon no-dash" onClick={() => {
                                    setShowStitchDiagram({
                                        name: videoLink.name,
                                        diagram: stitchDiagrams[videoLink.name]
                                    })
                                }}>
                                    <i className="fa-regular fa-circle-question"></i>
                                </button>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>

            <div className="crochet-grid">
                <h5>Row</h5>
                <h5>Pattern</h5>
                <h5 className="stitch-count">Stitch Count</h5>
                <h5 className="stitch-input">Stitches Made</h5>
                {swatch.map((swatchExercise, swatchIndex) => {
                    return (
                        <React.Fragment key={swatchIndex}>
                            <div className="exercise-name">
                                <p>{swatchExercise.row}</p>
                            </div>
                            <p className="exercise-info">{swatchExercise.pattern}</p>
                            <p className="exercise-info stitch-count">{swatchExercise.stitchCount}</p>
                            <input type="number" className="stitch-input" placeholder="0"
                                value={stitches[swatchExercise.row] || ''}
                                onChange={(e) => {
                                    handleAddStitch(swatchExercise.row, e.target.value)
                                }}
                            />
                        </React.Fragment>
                    )
                })}
            </div>

            <div className="crochet-buttons">
                <button title="Save your progress" className="font-buttons" onClick={() => { handleSave(crochetIndex, { stitches }) }}>
                    Save & Exit
                </button>
                <button
                    title="Unlock the next day if you've completed all the rows"
                    className="font-buttons"
                    onClick={() => { handleComplete(crochetIndex, { stitches }) }}
                    disabled={Object.keys(stitches).length !== swatch.length}
                >Complete</button>
            </div>

            <div className="crochet-grid video-container-padding">
                {video.map((videoLink, videoIndex) => {
                    return (
                        videoLink.link && (
                            <React.Fragment key={videoIndex}>
                                <div className="video-container">
                                    <iframe
                                        width={560}
                                        height={315}
                                        src={videoLink.link}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy={"strict-origin-when-cross-origin"}
                                        allowFullScreen
                                    />
                                </div>
                            </React.Fragment>
                        )
                    )
                })}
            </div>

        </div>
    )
}