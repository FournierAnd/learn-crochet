import { useState } from "react"

export default function Hero() {

    const [openAccordion, setOpenAccordion] = useState({
        firstAccordion: false,
        secondAccordion: false,
        thirdAccordion: false,
    });

    return (
        <>
            <div className="benefits-list">
                <p>&#10022;</p>
                <p>Learn basic to advanced spells (stitches).</p>
                <p>&#10022;</p>
                <p>Master the occult language of crochet patterns and stitch diagrams.</p>
                <p>&#10022;</p>
                <p>Receive guidance from enchanted talking paintings (YouTube videos).</p>
                <p>&#10022;</p>
                <p>Ascend to the rank of crochet archmage</p>
                <p>&#10022;</p>
            </div>
            <hr/>
            <div className="last-words">                
                <p>Complete all of the exercises below and track your progress along the way.</p>
            </div>
            <button 
                className="accordion"
                onClick={() => setOpenAccordion((prev) => ({ ...prev, firstAccordion: !prev.firstAccordion }))}
            >
                <h2>Advices</h2>{ openAccordion.firstAccordion ? (<i className='fa-solid fa-chevron-up'></i>):(<i className='fa-solid fa-chevron-down'></i>)}
            </button>
            <div className={`panel ${openAccordion.firstAccordion ? "open" : ""}`}>                    
                <ul className="rules-list">
                    <li className="rule-item">
                        <p className="rule-title"><b>Read the patterns carefully</b></p>
                        <p>
                            Take the time to decipher the written instructions. It gets easier as you progress.
                            Stitch diagrams and Youtube videos will help you understand this ancient, mystic language. <a target="_blank" href="https://haakmaarraak.nl/how-to-read-a-crochet-pattern-chart">Here</a> you'll find a detailed article that will teach you how to read stitch diagrams.</p>
                    </li>
                    <li className="rule-item">
                        <p className="rule-title"><b>Double-check your stitch count</b></p>
                        <p>Counting stitches is essential to unlocking your inner crocheter. If your project looks a little wonky, you probably miscounted. Don't worry, just follow the third tip.</p>
                    </li>
                    <li className="rule-item">
                        <p className="rule-title"><b>Try again</b></p>
                        <p>Don't be afraid to undo your work. If you've lost track of your stitch count or made a mistake, don't panic. Tug on the yarn to undo your stitches. Crochet is a very forgiving craft.</p>
                    </li>
                    <li className="rule-item">
                        <p className="rule-title"><b>Experiment</b></p>
                        <p>Remember: crochet is not an exact science. As you will see in some videos, variations exist, so do not hesitate to experiment and choose the method you enjoy most. </p>
                    </li>
                </ul>
            </div>
            
            <button 
                className="accordion"
                onClick={() => setOpenAccordion((prev) => ({ ...prev, secondAccordion: !prev.secondAccordion }))}
            >
                <h2>Abbreviations Used</h2>{ openAccordion.secondAccordion ? (<i className='fa-solid fa-chevron-up'></i>):(<i className='fa-solid fa-chevron-down'></i>)}
            </button>            
            <div className={`panel panel-grid ${openAccordion.secondAccordion ? "open" : ""}`}>
                <div className="abbreviations-grid">
                <div><strong>ch sp</strong></div>
                <div>chain space</div>
                <div><strong>slip st</strong></div>
                <div>slip stitch</div>

                <div><strong>ch(s)</strong></div>
                <div>chain(s)</div>
                <div><strong>sp</strong></div>
                <div>space</div>

                <div><strong>dc</strong></div>
                <div>double crochet</div>
                <div><strong>st(s)</strong></div>
                <div>stitch(es)</div>

                <div><strong>dtr</strong></div>
                <div>double treble</div>
                <div><strong>tch</strong></div>
                <div>turning chain</div>

                <div><strong>hdc</strong></div>
                <div>half double crochet</div>
                <div><strong>tog</strong></div>
                <div>together</div>

                <div><strong>rep</strong></div>
                <div>repeat</div>
                <div><strong>tr</strong></div>
                <div>treble</div>

                <div><strong>RS</strong></div>
                <div>right side</div>
                <div><strong>WS</strong></div>
                <div>wrong side</div>

                <div><strong>sc</strong></div>
                <div>single crochet</div>
                <div><strong>yo</strong></div>
                <div>yarn over</div>
                </div>
            </div>

            <button 
                className="accordion" 
                onClick={() => setOpenAccordion((prev) => ({ ...prev, thirdAccordion: !prev.thirdAccordion }))}
            >
                <h2>How to Count Stitches</h2>{ openAccordion.thirdAccordion ? (<i className='fa-solid fa-chevron-up'></i>):(<i className='fa-solid fa-chevron-down'></i>)}
            </button>
            <div className={`panel ${openAccordion.thirdAccordion ? "open" : ""}`}>
                <ul className="custom-bullets">
                    <li>Every stitch pattern is broken down to individual stitches (e.g., a pattern of 1 sc and 2 dc equals 3 stitches).</li>
                    <li>A ch at the beginning of a row is not considered a stitch unless specified otherwise (e.g., 2 ch = counts as 1 sc) or when part of a repeat pattern (e.g., Ch 5, 1 sc into next ch-5 arch).</li>
                    <li>A slip st at the beginning of a row is not considered a stitch, even if multiple are worked to reposition the starting point of a new row.</li>
                    <li>A ch or slip st is considered a stitch when it appears elsewhere in the pattern (e.g., in the middle of a row).</li>
                    <li>When unsure, refer to the stitch diagram.</li>
                </ul>
                <div className="advice">
                    <small>
                        *This is the method I chose for these exercises since the original examples (<i>500 Crochet Stitches: The Ultimate Crochet Stitch Bible, 2015</i>) did not include stitch counts.
                        Keep in mind that other patterns may use different counting methods.
                    </small>
                </div>
            </div>
        </>
    )
}