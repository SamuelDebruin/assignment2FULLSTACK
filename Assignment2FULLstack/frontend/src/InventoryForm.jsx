export default function InventoryForm({
    formData, 
    handleOnChange, 
    handleOnSubmit
}) {
    return(
    <div>
        <form action="" onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="productName">product Name</label>
                <input 
                    type="text" 
                    name="productName" 
                    id="productName" 
                    onChange={handleOnChange}
                    value={formData.productName} />
            </div>
            <div>
                <label htmlFor="brand">Brand</label>
                <input 
                    type="text" 
                    name="brand" 
                    id="brand" 
                    onChange={handleOnChange}
                    value={formData.brand} />
            </div>
            <div>
                <label htmlFor="quantity">Qauntity</label>
                <input 
                    type="text" 
                    name="quantity" 
                    id="quantity" 
                    onChange={handleOnChange}
                    value={formData.quantity} />
            </div>
            <div>
                <label htmlFor="image">Image URL</label>
                <input 
                    type="text" 
                    name="image" 
                    id="image" 
                    onChange={handleOnChange}
                    value={formData.image} />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input 
                    type="text" 
                    name="price" 
                    id="price" 
                    onChange={handleOnChange}
                    value={formData.price} />
            </div>
            <button>Add to Inventory</button>
        </form>
    </div>
    );
}