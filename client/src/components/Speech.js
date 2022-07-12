import { useState, useEffect} from "react"

function Speech({story}) {
  const msg = new SpeechSynthesisUtterance()
  const [talking, setTalking]=useState(true)

  const speechHandler = (msg) => {
    msg.text = story.story
    window.speechSynthesis.speak(msg)
  }
  useEffect(() => {
    window.speechSynthesis.speak(msg)
  }, [msg])

  console.log(story.story)

  function pause() {
    window.speechSynthesis.pause()
    setTalking(!talking)
  }

  function resume() {
    window.speechSynthesis.resume()
    setTalking(!talking)

  }


  return (
    <div>
      <button onClick={() => speechHandler(msg)}>SPEAK</button>
      <button onClick={() => {talking ? pause(): resume()}}>PAUSE/RESUME</button>
    </div>
  )
}

export default Speech