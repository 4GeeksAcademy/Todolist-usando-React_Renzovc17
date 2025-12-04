import React, { useState } from "react";

//Almacenar la informacion de un input necesitamos
/*
1. en el evento --> onChange
2. un state para almacenar la informacion
3. un state desde donde leer la informacion  
2. y 3. binding doble
*/


const TodoList = () => {

    const [data, setData] = useState([])

    const [formData, setFormData] = useState({
        list: ''
    });

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleKeyDown = e => {
        if (e.key === "Enter") {
            e.preventDefault();
            setData([...data, formData])
            handleReset(e);
        }
    }

    const handleReset = e => {
        e.preventDefault();
        setFormData({
           list: ''
        })
    }

    const deleteTask = (index) => {
        setData(data.filter((_, i) => i !== index));
    }


    return (

        <>

            <style>
                {`
                 .delete-icon {
                     visibility: hidden;
                     cursor: pointer;
                 }

                 .task-item:hover .delete-icon {
                     visibility: visible;
                 }
                `}
            </style>
            <div className="container">
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-6 bg-light" >
                        <h2>ToDo List</h2>
                        <form >
                            <input className="w-75" onKeyDown={handleKeyDown} onChange={handleChange} value={formData.list} name="list" type="text" placeholder="Write here and press Enter" ></input>
                        </form>
                        <br />
                        <ul className="list-unstyled list-group list-group-flush">
                            {
                                data.length === 0 && (
                                    <li className="list-group-item text-center text-muted ">
                                        No hay tareas, añadir tareas
                                    </li>)
                            }
                            {
                                data.map((el, i) =>
                                    <li key={i} className="list-group-item task-item d-flex">
                                        {el.list}

                                    <span
                                        className="delete-icon text-danger ms-auto"
                                        onClick={() => deleteTask(i)}
                                    >
                                        <i className="fa-solid fa-x"></i>
                                    </span>
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TodoList