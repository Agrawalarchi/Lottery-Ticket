export default function Button({ action }) {

    return (
        <button  style={{backgroundColor:'black', color:'white'}} onClick={action}>
            Buy New Ticket
        </button>
    );
}
