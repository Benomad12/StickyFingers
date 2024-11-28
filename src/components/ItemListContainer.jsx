

const ItemListContainer = ({greeting}) => {

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            textTransform: 'uppercase',
            boxShadow: '0px 4px 6px rgba(2, 3, 3, 0.1)',
        },
    }


    return (
        <div style={styles.container}>{greeting}</div>
    )
}

export default ItemListContainer