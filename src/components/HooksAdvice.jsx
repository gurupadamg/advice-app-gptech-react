import React, { useState, useEffect }from 'react'
import axios from 'axios'
import '../App.css';

function HooksAdvice() {
    const [advice, setAdvice] = useState('Get Free Advice Here !!')
    const [id, setId] = useState(1)
    
    useEffect(() => {
        axios.get(`https://api.adviceslip.com/advice/${id}`)
        .then(result => {
            const data = JSON.parse(result.data + "}");
            console.log(result.data.slip)
            const {advice} = data.slip
            setAdvice(advice)
            console.log(advice)
        })
        .catch(err => console.log(err.message))
    }, [id])
    
//    const getAdvice = () => {
//        // const id = Math.floor(Math.random() * 205 ) + 1
//         axios.get(`https://api.adviceslip.com/advice/${id}`)
//         .then(result => {
//             const data = JSON.parse(result.data + "}");
//             console.log(result.data.slip)
//             const {advice} = data.slip
//             setAdvice(advice)
//             console.log(advice)
//         })
//         .catch(err => console.log(err.message))
//     }

   
    return (
        <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={() => setId(Math.floor(Math.random() * 205 ) + 1)}>
                <span>GIVE ME ADVICE!</span>
            </button>
        </div>
            
    )
    
}

export default HooksAdvice
