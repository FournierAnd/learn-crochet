import ReactDom from 'react-dom'

export default function Modal(props) {

    const {showStitchDiagram, handleCloseModal} = props;
    const {name, diagram} = showStitchDiagram || {};
    
    return ReactDom.createPortal((
        <div className='modal-container'>
            <button className='modal-underlay' onClick={handleCloseModal} />
            <div className='modal-content'>
                <div>
                    <div className='modal-title'>
                        <h2>{name}</h2>
                    </div>
                    <img className='diagram' src={diagram} alt={name} />
                </div>
            </div>
        </div>
    ),
        document.getElementById('portal')
    )
}