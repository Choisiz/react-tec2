import {
    MdCheckBoxOutlineBlank,
    MdCheckCircleOutline,

} from "react-icons/md";
import '../TodoListItem.scss';
const TodoListItem =() => {
    return(
        <div className="TodoListItem">
            <div className="checkBox">
                <MdCheckBoxOutlineBlank/>
                <div className="text">할일</div>
            </div>
            <div className="remove">
                <MdCheckCircleOutline/>
            </div>
        </div>
    )
}

export default TodoListItem;