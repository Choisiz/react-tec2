import {
    MdCheckBoxOutlineBlank,
    MdCheckCircleOutline,

} from "react-icons/md";
import '../TodoListItem.scss';
import cn from 'classnames';
const TodoListItem =({todo}) => {
    console.log("??",todo)
    return(
        <div className="TodoListItem">
            <div className={cn('checkBox')}>
                <MdCheckBoxOutlineBlank/>
                <div className="text">{todo}</div>
            </div>
            <div className="remove">
                <MdCheckCircleOutline/>
            </div>
        </div>
    )
}

export default TodoListItem;