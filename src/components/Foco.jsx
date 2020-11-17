import React, {useState} from 'react'
import focoOn from './../focoOn.png'
import focoOff from './../focoOff.png'

const Foco = () => {
    const [foco, setFoco] = useState(false)
    return (
        <div>
            <img src={foco ? focoOn : focoOff} />
            <br/>
            <button onClick={() => setFoco(!foco)}>
            {foco ? 'Apagar' : 'Encender'}
            </button>
        </div>
    )
}

export default Foco
