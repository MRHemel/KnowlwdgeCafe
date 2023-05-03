import React from 'react';

const Question = () => {
    return (
        <div>
            <h1>What is the difference between state and props?</h1>
            <p>ans:state basically locally owned and it update itself automatacally.And props can not be changed because it is immutable.</p>
            <h1>How useState works?</h1>
            <p>ans:useState is a react hook.It allow us to add state in a functional component.we get an array of two values from useState.one is initial value and second one is a function to update it</p>
            <h1>What useEffect does except dataloading?</h1>
            <p>ans:useEffect is also an react hook.we use it to get side effect to our component.it can update DOM ,timers</p>
            <h1>How does react work?</h1>
            <p>ans:React is javascript library.react works with virtual DOM.Through react we can manage our UI using components and props.we can use components into different application.</p>
        </div>
    );
};

export default Question;