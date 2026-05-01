import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
function ProductList() {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});
    const plantsArray = [
        { category: "Air Purifying", plants: [
            { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "" },
            { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "" },
            { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", cost: "" },
            { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", cost: "" },
            { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", cost: "" },
            { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-2994324_1280.jpg", cost: "" }
        ]},
        { category: "Aromatic", plants: [
            { name: "Lavender", image: "https://images.unsplash.com/photo-1506174019579-1798551ee938", cost: "" },
            { name: "Rosemary", image: "https://images.unsplash.com/photo-1592178142357-b4d10b610934", cost: "" },
            { name: "Mint", image: "https://images.unsplash.com/photo-1585059895824-7491216338fd", cost: "" },
            { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1595813544612-490c300dbf03", cost: "" },
            { name: "Hyacinth", image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg", cost: "" },
            { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b", cost: "" }
        ]},
        { category: "Low Maintenance", plants: [
            { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361", cost: "" },
            { name: "Pothos", image: "https://images.unsplash.com/photo-1596047635121-14b04b787474", cost: "" },
            { name: "Jade Plant", image: "https://images.unsplash.com/photo-1596547528352-c516e171d912", cost: "" },
            { name: "Succulent", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg", cost: "" },
            { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2017/02/16/15/41/aspidistra-2071741_1280.jpg", cost: "" },
            { name: "Bamboo", image: "https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-2295434_1280.jpg", cost: "" }
        ]}
    ];
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({ ...prevState, [plant.name]: true }));
    };
    return (
        <div className="product-grid">
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h1>{category.category}</h1>
                    <div className="product-list">
                        {category.plants.map((plant, pIndex) => (
                            <div className="product-card" key={pIndex}>
                                <img src={plant.image} alt={plant.name} style={{width: '200px'}} />
                                <h3>{plant.name}</h3> <p>{plant.cost}</p>
                                <button disabled={addedToCart[plant.name]} onClick={() => handleAddToCart(plant)}>
                                    {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProductList;
