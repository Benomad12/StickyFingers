import React, { useState } from 'react'

const checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone:"",
        email: ""
    })

const handleChangeInput= (event) => {
    event.target.value

}

return (
    <div>
        <form >
            <label>NumberPhone</label>
            <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeInput}/>
        </form>
    </div>
)
}

export default checkout