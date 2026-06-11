function ProfileCard(props) {
    const name = "Ali";
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Staus: {props.isMember ? "Active member" : "Guest"}</h3>
        </div>
    );
}

export default ProfileCard;