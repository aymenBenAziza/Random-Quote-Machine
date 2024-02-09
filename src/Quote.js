import React, { useEffect, useState } from "react";

const Quote = () => {
    const [quotes, setQuotes] = useState([]);
    const [randomIndex, setRandomIndex] = useState(0);
    
    const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];

    const URL = "https://type.fit/api/quotes";

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            setQuotes(data);
            setRandomIndex(Math.floor(Math.random() * data.length));
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const getNewQuote = () => {
        const newIndex = Math.floor(Math.random() * quotes.length);
        setRandomIndex(newIndex);
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        document.getElementById("tweet-quote").style.backgroundColor = randomColor;
        document.getElementById("tumblr-quote").style.backgroundColor = randomColor;
        document.getElementById("new-quote").style.backgroundColor = randomColor;
        document.getElementById("color").style.color = randomColor;
        document.getElementById("author").style.color = randomColor;
        document.getElementById("text").style.color = randomColor;
    }

    return(
        <>
            <div id="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left" id="color"> </i><span id="text">{quotes[randomIndex]?.text}</span>
                </div>
                <div className="quote-author">- <span id="author">{quotes[randomIndex]?.author || "Unknown"}</span></div>
                <div className="buttons">
                    <a
                        className="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_top"
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a
                        className="button"
                        id="tumblr-quote"
                        title="Post this quote on tumblr!"
                        target="_blank"
                    >
                        <i className="fa fa-tumblr"></i>
                    </a>
                    <button onClick={getNewQuote} className="button" id="new-quote">New quote</button>
                </div>
            </div>
            <div className="footer">by <a href="https://codepen.io/hezag/">hezag</a></div>
        </>
    )
}

export default Quote;
