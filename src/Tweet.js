
import React from 'react';


const Tweet = (props) => {
    // console.log(props)
    return (
        // <button id="tweet-quote" onClick={props.getQuote}>
        //     Tweet This
        //       </button>
        <a id="tweet-quote" href='twitter.com/intent/tweet' > Tweet This </a>
    );
}
// href='twitter.com/intent/tweet'
// href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote})}
export default Tweet