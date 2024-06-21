import { addProduct, addProductInv } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPageInv = () => {
  return (
    <div className={styles.container}>
      <form action={addProductInv} className={styles.form}>
        <input type="text" placeholder="Item Name" name="title" required />
        {/* <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Veg</option>
          <option value="phone">Meat</option>
          <option value="computer">Special Seafood</option>
        </select> */}
        <input type="number" placeholder="Unit Price" name="price" required />
        <input type="number" placeholder="Weight" name="stock" required />
        <input type="text" placeholder="Category" name="color" />
        <input type="text" placeholder="Status" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <input type="file" name="image" id="image" accept="image/*" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPageInv;

