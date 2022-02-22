

import './app-info.css'

const AppInfo = ({employeesLength, employeesIncrease, employeesRise, addData}) => {

    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников - {employeesLength}</h2>
            <h2>Премию получат - {employeesIncrease}</h2>
            <h2>За заслуги отмечены - {employeesRise} человек</h2>
            <button 
                onClick={addData}
                className='btn btn-info'>Загрузить данные</button>
        </div>
    );
   
};

export default AppInfo;