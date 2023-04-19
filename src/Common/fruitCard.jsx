function FruitCard({id, name, image}) {
    const styles = {
        container:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:"45%",
            width:120,
            backgroundColor:"gray",
            padding:5,
            marginLeft:20
        },
        imageContainer :{
            flex: 1,
            
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: '50%'
        },
        nameContainer: {
            flex: 1,
           
        },
        nameText: {
            
        }
    }

    return (
        <div style={styles.container} key={id}>
            <div style={styles.imageContainer}>
                <img src={`${image}`} style={styles.image} />
            </div>

            <div style={styles.nameContainer}>
                <span style={styles.nameText}>
                    {name}
                </span>
            </div>
        </div>
    )
}

export default FruitCard;