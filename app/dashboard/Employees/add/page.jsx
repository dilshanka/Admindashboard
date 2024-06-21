import { addProduct, addproductEmp } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPageEmp = () => {
  return (
    <div className={styles.container}>
      <form action={addproductEmp} className={styles.form}>
        <input type="text" placeholder="Employee ID" name="title" required />
        
        <input type="text" placeholder="Name" name="price" required />
        <input type="text" placeholder="Phone Number" name="stock" required />
        <input type="text" placeholder="Updated Date" name="color" />
        <input type="text" placeholder="Age" name="size" />
        <input type="text" placeholder="NIC Number" name="desc" />
        <input type="file" name="image" id="image" accept="image/*" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPageEmp;