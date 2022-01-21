import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './AddFood.css'


export default function AddFood() {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        
        axios.post('https://foodspanda.herokuapp.com/foods',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('added successfully')
                reset();
            }
        })
        
    }
    return (
        <div className='add-food'>
            <h2>Please Add a Food</h2>
            <form  className='addFood-from' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='name' />
                <textarea {...register("description")} placeholder='description' />
                <input  {...register("category")} placeholder='breakfast,lunch,dinner' />
                <input type="number" {...register("price")} placeholder='price' />
                <input {...register("img")} placeholder='img' />
                <input type="submit" />
            </form>
        </div>
    )
}
