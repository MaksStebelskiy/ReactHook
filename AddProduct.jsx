import "./AddProduct.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {

    const [title, setTitle] = useState ('');
    const [price, setPrice] = useState ('');
    const navigate = useNavigate();
    
    const saveProduct = async(e) => {

        e.preventDefault();
        const product = {title, price};
        fetch(`http://localhost:8080/products`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {'Content-Type': 'application/json'}
        })
        navigate("/");
    }


    return (
        <div>
            <form onSubmit={saveProduct}>
                <div className="field">
                <label className="label">Назва продукту</label>
                <div className="control">
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </div>
                </div>

                <div className="field">
                <label className="label">Ціна</label>
                <div className="control">
                    <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
                </div>
                </div>
        
                <div className="field">
                <div className="control">
                    <button className="button is-primary">Зберегти</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct