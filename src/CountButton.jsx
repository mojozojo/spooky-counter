import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

export default function CountButton({type, setCount, locked}) {
    const handleClick = (event) => {
        setCount((prev) => {
            if(type === 'minus') {
                const newCount = prev - 1;
                if(newCount < 0) {
                    return 0; // Prevent count from going below 0
                }
                return prev - 1;
            } else if(type === 'plus') {
                const newCount = prev + 1;
                if(newCount > 5) {  
                    return 5; // Prevent count from going above 5
                }
                return newCount;
            }
            return prev; // Fallback in case of unexpected type
        });
        event.currentTarget.blur(); // Remove focus from the button after click
    }

return (
    <div className="button-container">
        <button onClick={handleClick} className="count-btn" disabled={locked}>
            {type === 'minus' && <MinusIcon className="count-btn-icon"/>}
            {type === 'plus' && <PlusIcon className="count-btn-icon"/>}
        </button>
    </div>
)
}
