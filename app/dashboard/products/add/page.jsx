import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Product " name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Vegetarian</option>
          <option value="phone">Chicken</option>
          <option value="computer">Special Seafood</option>
        </select>
        <input type="number" placeholder="Price" name="price" required />
        <input type="number" placeholder="Weight" name="stock" required />
        <input type="text" placeholder="Is Additional Include" name="color" />
        <input type="text" placeholder="Size" name="size" />
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

export default AddProductPage;
