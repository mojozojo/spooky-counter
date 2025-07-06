import "./index.css";

export default function Title({locked}){
    return (
        <h1 class="title">{locked?"Please Reset!" : "Spooky  Counter"}</h1>
    );
}