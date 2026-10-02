
import './App.css'
import GlitchRender from "./components/GlitchRender.tsx";
import {useEffect, useRef, useState} from "react";
import glitchText from "./util/glitchText.ts";


function App() {
    const originalText = 'Injection Successful'
    const [displayText, setDisplayText] = useState(glitchText(0));
    const settledRef = useRef(0);

    useEffect(() => {

        const glitchInterval = setInterval(() => {
            if(settledRef.current >= originalText.length) {
            setDisplayText(originalText);
            clearInterval(glitchInterval);
            return;
            }
            setDisplayText(glitchText(settledRef.current));
        }, 100);

        const advancedId = setInterval(() => {
            if(settledRef.current < originalText.length) {
                settledRef.current += 1;
            } else {
                clearInterval(advancedId);
            }

        }, 150);


        return () => {
            clearInterval(glitchInterval)
            clearInterval(advancedId)

        }


    }, [])

  return (
    <>
      <div className="App">
        <div id="glitch-text">
            <GlitchRender text={displayText}/>

        </div>
      </div>
    </>
  )
}

export default App
