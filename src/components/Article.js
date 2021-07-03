import React from 'react';

function Article({title, date="January 1, 1970", preview, minutes}) {

    // if(minutes <= 5){
    //     minutes = `☕️ ${minutes} minute read`;
    // } else if(minutes > 5 && minutes <=10) {
    //     minutes = `☕️☕️ ${minutes} minute read`;
    // }
 

    return(
        <article>
            <h3>{title}</h3>
            <small>{date} {minutes}
            </small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;