import Card from 'react-bootstrap/Card';
import FruitCard from '../fruitCard';

function Cart({cart}) {
    return (
        <Card className='border-0 max-width: 100% overflow-wrap max-height: 100%'>
            <div style={{display:'flex',flexDirection: 'row',alignItems: 'center'}}>
            <img 
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8SyXRlur3kDxIdCWba2ydwRf3fDwrZMrZw&usqp=CAU"}
                style={{width:50, height: 50, position: 'relative'}}
            />
            
            <div style={{
                width:20,
                height:20,
                backgroundColor: 'red',
                borderRadius: 50,
                textAlign: 'center',
                position: 'absolute',
                top: -3, left: 43
            }}> 
                <span>
                    {
                        Object.values(cart).length === 0 ?
                            0
                        :
                            Object.values(cart).length
                    }
                </span>
            </div>
            {
                Object.values(cart).length > 0 &&
                    Object.values(cart).map((list, key)=>{
                        return (
                           <FruitCard 
                                id={key}
                                name={list.name}
                                image={list.image}
                           />
                        )
                    })
            }
            </div>
        </Card>
    );
}

export default Cart;