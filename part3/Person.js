const Person = ({ name, age, hobbies }) => {
    let message;
    
    const hobbyArr = hobbies.map(h => {
       return <li>{h}</li>
    });
    if (age >= 18) {
        message = 'please go vote!';
    } else {
        message = 'you must be 18';
    }
    return (
        <div>
            <h2>{name}</h2>
            <h3>{message}</h3>
            <p>Learn some information about this person:</p>
            <ul> Hobbies:
                {hobbyArr}
            </ul>
        </div>
    );
}