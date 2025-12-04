import React, { useState } from "react";

const FormDinamico = () => {

    const [data, setData] = useState([
        {
            name: '',
            lastname: '',
            address: '',
            age: ''
        }]);
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        address: '',
        age: ''
    })
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        setData([...data, formData])
        console.log("esto es antes -->", data)
        handleReset(e);

    }
    console.log("esto es despues -->", data)



    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        console.log(e.target.value)
    }

    const handleReset = e => {
        e.preventDefault();
        setFormData({
            name: '',
            lastname: '',
            address: '',
            age: ''
        })

    }

    const handleClick = () => {
        console.log("clic")
    }

    return (

        <>
            <form onSubmit={handleSubmit}>
                <input required value={formData.name} onChange={handleChange} name="name" type="text" />
                <input  value={formData.lastname} onChange={handleChange} name="lastname" type="text" />
                <input  value={formData.address} onChange={handleChange} name="address" type="text" />
                <input  value={formData.age} onChange={handleChange} name="age" type="text" />
                <input type="submit" />
                <input type="reset" onClick={handleReset} />
            </form>
            <ul>
                {
                    data.map((el, i) => 
                    <li key={i}>
                        <div className="card" onClick={handleClick}>
                            <h2>
                                {el.name},{el.lastname},{el.age}
                            </h2>
                        </div>
                        <div>
                            <p>{el.address}</p>
                        </div>
                    </li>)
                }
            </ul>


        </>
    )
}

export default FormDinamico