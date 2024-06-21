import { updateProductInv } from "@/app/lib/actions";
import { fetchProductInv } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPageInv = async ({ params }) => {
  const { id } = params;
  const productInv = await fetchProductInv(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {productInv.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProductInv} className={styles.form}>
          <input type="hidden" name="id" value={productInv.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={productInv.title} />
          <label>Unit Price</label>
          <input type="number" name="price" placeholder={productInv.price} />
          <label>Quantity in Stock</label>
          <input type="number" name="stock" placeholder={productInv.stock} />
          <label>Category</label>
          <input
            type="text"
            name="color"
            placeholder={productInv.color || "color"}
          />
          <label>Status</label>
          <textarea
            type="text"
            name="size"
            placeholder={productInv.size || "size"}
          />
          {/* <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select> */}
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={productInv.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPageInv;
