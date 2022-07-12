import { useState, useEffect} from "react"
import Speech from "./Speech"

function Home () {  
    const [story, setStory]=useState([])

    function handleClick(){
        fetch("https://shortstories-api.herokuapp.com/")
        .then(response => response.json())
        .then(data => setStory(data))
    }

    useEffect(() => {
        fetch("/stories", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(story)
          })
          .then(response=> response.json())
          .then(window.speechSynthesis.cancel())},[story])




    console.log(story)

    return(
        <div>
            <h1>It's Storytime </h1>
            <button onClick={handleClick} >Get A Story</button>
            {story.story}
            <Speech story={story }></Speech>
        </div>

    )
}

export default Home 