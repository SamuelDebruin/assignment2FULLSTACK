import InventoryCard from "./InventoryCard";
import CartList from "./CartList";
// import { products } from "./data/products";
import { useState, useEffect } from "react";
import axios from "axios"
import InventoryForm from "./InventoryForm.jsx";

export default function GroceriesApp() {
  const [cartList, setCartList] = useState([]);
  const [products, setProduct] = useState([]);
  const [formData, setFormData] =useState({
    id: "",
    productName: "",
    brand: "",
    quantity: "",
    image: "",
    price: "",
  })
  const [responseData, setResponseData] = useState("")
  const [toggleEdit, setToggleEdit] = useState(false)

  //useEffect
useEffect(() => {
  handleGetProducts()
}, [responseData]);

//HANDLERS
//get Products
const handleGetProducts = async() => {
  await axios.get("http://localhost:3000/products").then((response) => {
    setProduct(response.data);
  });
}

//////Post product
const handlePostProduct = async(product) => {
  const postProduct = {
    id: product.id,
    productName: product.productName,
    brand: product.brand,
    quantity: product.quantity,
    image: product.image,
    price: product.price
  }
await axios
.post("http://localhost:3000/addProduct", postProduct)
.then(response => setResponseData(<p>{response.data}</p>))
}

const handleOnSubmit = (evt) => {
  evt.preventDefault;
  toggleEdit ? handleProductEdit(formData) : handlePostProduct(formData)
  setFormData({
    id: "",
    productName: "",
    brand: "",
    quantity: "",
    image: "",
    price: "",
  })
}

const handleProductDelete = async(product) => {
 const id = product._id;
 axios
 .delete(`http://localhost:3000/product/${id}`)
 .then((response) => setResponseData(<p>{response.data}</p>))
}

const handleProductEdit = async(product) => {
  const id = product._id
  const editData = {
    id: product.id,
    productName: product.productName,
    brand: product.brand,
    quantity: product.quantity,
    image: product.image,
    price: product.price
  }
  await axios
  .patch(`http://localhost:3000/product/${id}`, editData)
  .then((response) => setResponseData(<p>{response.data}</p>))
  .then(setToggleEdit(false))
}

const handleToggleEdit = (product) => {
  setFormData(product);
  setToggleEdit(true)
}

/////Adding to cart
  const handleAddToCart = (item) => {
    setCartList((prevList) => {
      console.log(cartList);
      return [...prevList, { ...item, id: crypto.randomUUID() }];
    });
  };

///onChange Handler
const handleOnChange = (evt) => {
  const fieldName = evt.target.name
  const fieldValue = evt.target.value
  setFormData((prevData) => {
    return{
    ...prevData,
    id: crypto.randomUUID(),
    [fieldName]: fieldValue,
    };
  });
};

  //empty cart
  const handleEmptyCart = () => {
    setCartList([]);
  };

  //removing item from cart
  const handleRemoveItem = (id) => {
    setCartList((prevList) => {
      return prevList.filter((i) => i.id !== id);
    });
  };

  return (
    <>
      <h1>Groceries App</h1>
      <InventoryForm 
        formData={formData} 
        handleOnChange={handleOnChange} 
        handleOnSubmit={handleOnSubmit}
        toggleEdit={toggleEdit}
      />
      {responseData}
      <div className="GroceriesApp-Container">
        <InventoryCard 
        list={products} 
        onClick={handleAddToCart} 
        handleProductDelete={handleProductDelete}
        handleToggleEdit={handleToggleEdit}
        />
        <CartList
          cartList={cartList}
          onClickEmpty={handleEmptyCart}
          onClickRemove={handleRemoveItem}
        />
      </div>
    </>
  );
}




