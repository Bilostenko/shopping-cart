
interface ProductFormProps {

}
const ProductForm: React.FC<ProductFormProps> = ({ }) => {
    return (
        <>
            <h2>Add new game</h2>
            <form >
                <input type="text" placeholder="Game title" id="title" />
                <input type="number" placeholder="Price" id="price" />
                <input type="id" placeholder="Id" id="id" />
                <button>Add Price</button>
            </form>
        </>
    )
}

export default ProductForm