function ProfileCard({name, age, isMember, hobbies, onHobbyClick}) {
    // // without destructuring, using Dot notation
    // const person = { name: "Ali", age: 28 }
    // const name = person.name;
    // const age = person.age;
    
    // // with destructuring
    // const { name, age } = person;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Staus: {isMember ? "Active member" : "Guest"}</h3>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map((hobby, index) => {
                    return <li key={index} onClick={()=>onHobbyClick(hobby)}>{hobby}</li>;
                })}
            </ul>
        </div>
    );
}

export default ProfileCard;