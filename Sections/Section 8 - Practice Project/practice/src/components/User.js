import "./User.css"

const User = props => {
    return <div className="user">        
        {props.username}
        {" (" + props.age + " years old)"}
    </div>
};

export default User;