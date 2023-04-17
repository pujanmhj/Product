import List from './list';
import Create from './create';
import Wrapper from '../Wrapper'
import {useState, useRef, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props){
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Delete
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Do you really want to delete ?</h4>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Yes</Button>
            <Button onClick={props.onHide}>No</Button>
        </Modal.Footer>
        </Modal>
    )
}

function Fruits({props}){
    const [modalShow, setModalShow] = useState(false);
    const [fruitList, setFruitList] = useState([]);
    const [fruits, setFruits] = useState({});
    const [error, setError] = useState({});
    const [fruitEdit, setFruitEdit] = useState([]);

    const styles = {
        container: {
            height: '100%', 
            width: '100%', 
            alignItems: 'center', 
            justifyContent: 'center',
        },
        bodyContainer: {
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center', 
            justifyContent: 'center'
        },
        leftContainer: {
            flex: 1, 
            flexDirection: 'row',
            alignItems: 'center', 
            justifyContent: 'center'
        },
        rightContainer: {
            flex: 1, 
            flexDirection: 'row',
            alignItems: 'center', 
            justifyContent: 'center'
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFruits(prev_fruit => ({
            ...prev_fruit, 
            [name]: value,
        }));
    }

    const registerFruits = () => {
        if(fruits.length == 0){
            setError({
                "name": "Fruits is Required"
            })
        }
        else{
            if(Object.values(fruitEdit).length === 0){
                setError({});
                setFruitList(i => [...i, fruits]);
            }
            else{
                
            }
        }
    }

    const deleteFruits = (fruit) => {
        setModalShow(true);
        // let index = fruitList.findIndex((tmp)=>{return tmp.name === fruit});

        // if(index !== -1){
        //     let temp_fruits = [...fruitList];
        //     temp_fruits.splice(index, 1);
        //     setFruitList(temp_fruits);
        // }
    }

    const editFruit = (fruit) => {
        let temp_fruit = fruitList.filter((tmp)=>{return tmp.name === fruit});

        setFruitEdit(temp_fruit);
    }

    return (
        <Wrapper>
        <div style={styles.container}>
            {
                modalShow &&
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
            }
            <h3>Add Fruits</h3>

            <div style={styles.bodyContainer}>
                <div style={styles.leftContainer}>
                    <Create 
                        registerFruits={registerFruits} 
                        handleChange={handleChange}
                        error={error}
                        update={fruitEdit}
                        fruits={fruits}
                    />
                </div>

                <div style={styles.rightContainer}>
                    <List 
                        fruitList={fruitList}
                        deleteFruit={deleteFruits}
                        edit={editFruit}
                    />
                </div>
            </div>
        </div>
        </Wrapper>
    )
}

export default Fruits;

