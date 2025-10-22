import {useState, useEffect} from 'react';

const getInitialIndex = () => {
    const saveIndex = localStorage.getItem("Reader-index");
    if (saveIndex !== null){
        return JSON.parse(saveIndex)
    }
    return 0;
};
export default function Reader ({articles}) {

    const [articleIdx, setArticleIdx] = useState(getInitialIndex);
    
    const handlePrew = () => {
       setArticleIdx(articleIdx -1);
    };

    const handleNext = () => {
       setArticleIdx(articleIdx +1);
    };

    useEffect (() => {
        localStorage.setItem("Reader-index", articleIdx);
    }, [articleIdx]
)

    const currentArticles = articles[articleIdx];

    const isFirst = articleIdx === 0; 
    const isLast = articleIdx === articles.length -1;

    const [isVisible, setIsVisible] = useState(false);
    const handleToggle = () => {
        setIsVisible(!isVisible)
    }


    //const isLast = articleIdx === articles.length -1;
   //<button onClick={handleNext} disabled = {isLast}> Next </button>

    return (
    <header>
        <div>  
            <button onClick={handlePrew} disabled = {isFirst}> Prew </button>
            <button onClick={handleNext} disabled = {isLast}> Next </button>
            <h2>{articleIdx + 1}/{articles.length}</h2>

            <button onClick={handleToggle}>{isVisible ? "hide" : "show"}</button>
            {isVisible && (
            <p>udeyuwivfuywb8fwey7rfgwesyofgw7ey8gfysgfsyfgwofgy7sgfyegwraygfo8agfybaygfuwiehf8wurgfuihr8uegf7rgayfgeyrgfyagfgraoy8gfyrgfyahgyfgyfyfgrgffhfrf</p>
)}
        </div>
        <article>
            <h1>{currentArticles.topic}</h1>
            <p>{currentArticles.text}</p>
        </article>
    </header> 
    )}