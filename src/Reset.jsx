import { ResetIcon } from "@radix-ui/react-icons"

export default function Reset({setCount}) {

    const handleClick = (event) => {
        setCount(0);  
        event.currentTarget.blur();  
    };

return (

    <button onClick={handleClick} className="reset-btn" >
        <ResetIcon className="reset-btn-icon"/>
    </button>
)
}
