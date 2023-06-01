import wines from "./Data";

function Car(props) {
return (
<li>
    <div className="wine">
        <img src="/red-wine.jpg" alt={props.label} />
        <span className="new-badge">{props.text}</span>
    </div>
</li>
);
}


let KeepDrinking = (
<div>
    <Car label="Honda" text="red" />
</div>
);



export default KeepDrinking;