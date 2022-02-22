
import './employers-list-item.css'

const EmployersListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let classNames = "list-group-item";
    
    if(increase){classNames += " increase"};

    if(rise){classNames += " like"}

    return(
        <li className={classNames} >
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className="d-flex">
                <button 
                    type="button"
                    onClick={onToggleProp}
                    data-toggle="increase"
                    className="btn-cookie">
                        <i className="fas fa-cookie"></i>
                </button>

                <button 
                    type="button"
                    onClick={onDelete}
                    className="btn-trash">
                        <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployersListItem;