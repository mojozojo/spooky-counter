import Title from './Title.jsx'
import Count from './Count.jsx'
import Reset from './Reset.jsx';
import ButtonContainer from './ButtonContainer.jsx';
import CountButton from './CountButton.jsx';
import { useEffect, useState } from 'react';

export default function Card() {
    const [count, setCount] = useState(0);
    const locked = (count == 5) ? true : false;

    useEffect(()    => {
    const handleKeydown = (e) => {
        if (e.code !== 'Space') return;

        setCount(prev => {
            if (prev >= 5) return prev;
            return prev + 1;
        });
    };

        window.addEventListener('keydown', handleKeydown);    

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [count]  );  



return (
<div className={`card ${locked ? 'card--limit' : ''}`}>
        <Title locked={locked}/>
        <Count count={count} />
        <Reset setCount={setCount}/>
        <ButtonContainer>
            <CountButton type="minus" setCount={setCount} locked={locked} />
            <CountButton type="plus" setCount={setCount} locked={locked}/>
        </ButtonContainer>
    </div>
);
}
