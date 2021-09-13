import "./List.css";
import Card from "./Card";
import User from "./User";

const List = (props) => {
  return <Card className="list">
      {props.items.map(item => {
          return <User 
            username={item.username}
            age={item.age}
          />
      })}
  </Card>;
};

export default List;
