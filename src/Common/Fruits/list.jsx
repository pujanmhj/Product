import { memo } from "react";

function List({fruitList, deleteFruit, edit}){
    console.log("fruits",fruits);
    return (
        <ul>
            {
                Object.values(fruitList).length > 0 &&
                    Object.values(fruitList).map((fruit,key)=>{
                        return (
                            <li key={key}>
                                <img 
                                    src={`${fruit.image}`}
                                    style={{width: 50, height: 50, borderRadius: 50}} 
                                />
                                {fruit.name}
                                <button onClick={()=>{edit(fruit.name)}}>
                                    Edit
                                </button>

                                <button onClick={()=>{deleteFruit(fruit.name)}}>
                                    Delete
                                </button>
                            </li>
                        )
                    })
            }
        </ul>

    )
}

export default memo(List);