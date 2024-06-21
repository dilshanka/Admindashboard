import { addProduct, addproductEmp ,saveAcceptedOrder,saveoutofdelivery,savefinisheddelivery} from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const ConfirmOrder = () => {
  return (
    <div className={styles.container}>
      <form action={saveAcceptedOrder} className={styles.form}>
      <button type="submit">Submit</button>
      <form action={saveoutofdelivery} className={styles.form}>
      <button type="submit">Submit</button>
      <form action={savefinisheddelivery} className={styles.form}>
      <button type="submit">Submit</button>


    
      </form>
      </form>
      </form>
    </div>
  );
};

export default ConfirmOrder;