import './employers-list.css';

import EmployersListItem from '../employers-list-item/employers-list-item';

const EmployersList = ({data, onDelete, onToggleProp}) => {
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployersListItem 
                {...itemProps} 
                key={id}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onDelete={() => onDelete(id)}/>
        );
    });

    return(
        <ul className='app-list app-group'>
            {elements}
        </ul>
    );
};

export default EmployersList;