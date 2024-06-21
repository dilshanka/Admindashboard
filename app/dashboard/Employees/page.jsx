import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProductsEmp } from "@/app/lib/data";
import { deleteproductEmp } from "@/app/lib/actions";

const ProductsPageEmp = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, productsEmp } = await fetchProductsEmp(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Name..." />
        <Link href="/dashboard/Employees/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Employee ID</td>
            <td>NIC Number</td>
            <td>Name</td>
            <td>Updated Date</td>
            <td>Phone Number</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {productsEmp.map((productEmp) => (
            <tr key={productEmp.id}>
              <td>
                <div className={styles.productEmp}>
                  <Image
                    src={productEmp.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {productEmp.title}
                </div>
              </td>
              <td>{productEmp.desc}</td>
              <td>{productEmp.price}</td>
              <td>{productEmp.createdAt?.toString().slice(4, 16)}</td>
              <td>{productEmp.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/Employees/${productEmp.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteproductEmp}>
                    <input type="hidden" name="id" value={productEmp.id} />
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

export default ProductsPageEmp;