import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProductsInv } from "@/app/lib/data";
import { deleteProductInv } from "@/app/lib/actions";

const ProductsPageInv = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, productsInv } = await fetchProductsInv(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/Inventory/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Item Name</td>
            <td>Description</td>
            <td>Unit Price</td>
            <td>Updated Date</td>
            <td>Quantity in Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {productsInv.map((productInv) => (
            <tr key={productInv.id}>
              <td>
                <div className={styles.productInv}>
                  <Image
                    src={productInv.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {productInv.title}
                </div>
              </td>
              <td>{productInv.desc}</td>
              <td>${productInv.price}</td>
              <td>{productInv.createdAt?.toString().slice(4, 16)}</td>
              <td>{productInv.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/Inventory/${productInv.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProductInv}>
                    <input type="hidden" name="id" value={productInv.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPageInv;
