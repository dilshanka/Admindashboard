import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/orders/orders.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchOrders } from "@/app/lib/data";
import { deleteOrder } from "@/app/lib/actions";
import {
  addProduct,
  addproductEmp,
  saveAcceptedOrder,
  saveoutofdelivery,
  savefinisheddelivery,
} from "@/app/lib/actions";

const ProductsPageEmp = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, orders } = await fetchOrders(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a User, Name, or Mobile No..." />
        <Link href="/dashboard/orders/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {/* <td>User</td> */}
            <td>Name</td>
            <td>Mobile No</td>
            <td>Items</td>
            <td>Total Amount</td>
            <td>Delivery Fee</td>
            <td>Destination</td>
            <td>Created Time</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              {/* <td>{order.user}</td> */}
              <td>{order.name}</td>
              <td>{order.mobileNo}</td> {/* Ensure this line is present */}
              <td>
                <ul>
                  {order.items.map((item) => (
                    <li key={item._id}>
                      {item.name} (x{item.quantity}) - Rs.{item.price}
                    </li>
                  ))}
                </ul>
              </td>
              <td>Rs{order.totalAmount}</td>
              <td>Rs{order.deliveryFee}</td>
              <td>{order.destination}</td>
              <td>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }).format(new Date(order.createdAt))}
              </td>
              <td>
                {/* <div className={styles.container}>
                  <form action={saveAcceptedOrder} className={styles.form}>
                    <div className={styles.buttons}>


                    <input type="hidden" name="orderId" value={order._id.toString()} />
                    <input type="hidden" name="name" value={order.name} />
                    <input type="hidden" name="mobileNo" value={order.mobileNo} />
                    <input type="hidden" name="items" value={JSON.stringify(order.items)} />
                    <input type="hidden" name="totalAmount" value={order.totalAmount} />
                    <input type="hidden" name="deliveryFee" value={order.deliveryFee} />
                    <input type="hidden" name="destination" value={order.destination} />
                    <input type="hidden" name="status" value="Accepted" />

                      <button className={styles.addButton}>Accept Order</button>
                      <button className={styles.addButton}>Out of Delivery</button>



                  
                      <button className={styles.addButton}>Finishd</button>




                
                    </div>
                  </form>

                </div> */}

                <div style={{ display: "flex", gap: "10px" }}>
                  {/* Accept Order Form */}
                  <form action={saveAcceptedOrder} className={styles.form}>
                    <input
                      type="hidden"
                      name="orderId"
                      value={order._id.toString()}
                    />
                    <input type="hidden" name="name" value={order.name} />
                    <input
                      type="hidden"
                      name="mobileNo"
                      value={order.mobileNo}
                    />
                    <input
                      type="hidden"
                      name="items"
                      value={JSON.stringify(order.items)}
                    />
                    <input
                      type="hidden"
                      name="totalAmount"
                      value={order.totalAmount}
                    />
                    <input
                      type="hidden"
                      name="deliveryFee"
                      value={order.deliveryFee}
                    />
                    <input
                      type="hidden"
                      name="destination"
                      value={order.destination}
                    />
                    <input type="hidden" name="status" value="Accepted" />
                    <button type="submit" className={styles.addButton}>
                      Accept Order
                    </button>
                  </form>

                  {/* Out of Delivery Form */}
                  <form action={saveoutofdelivery} className={styles.form}>
                    <input
                      type="hidden"
                      name="orderId"
                      value={order._id.toString()}
                    />
                    <input type="hidden" name="name" value={order.name} />
                    <input
                      type="hidden"
                      name="mobileNo"
                      value={order.mobileNo}
                    />
                    <input
                      type="hidden"
                      name="items"
                      value={JSON.stringify(order.items)}
                    />
                    <input
                      type="hidden"
                      name="totalAmount"
                      value={order.totalAmount}
                    />
                    <input
                      type="hidden"
                      name="deliveryFee"
                      value={order.deliveryFee}
                    />
                    <input
                      type="hidden"
                      name="destination"
                      value={order.destination}
                    />
                    <input type="hidden" name="status" value="OutOfDelivery" />
                    <button type="submit" className={styles.addButton}>
                      Out of Delivery
                    </button>
                  </form>

         
                  <form action={savefinisheddelivery} className={styles.form}>
                    <input
                      type="hidden"
                      name="orderId"
                      value={order._id.toString()}
                    />
                    <input type="hidden" name="name" value={order.name} />
                    <input
                      type="hidden"
                      name="mobileNo"
                      value={order.mobileNo}
                    />
                    <input
                      type="hidden"
                      name="items"
                      value={JSON.stringify(order.items)}
                    />
                    <input
                      type="hidden"
                      name="totalAmount"
                      value={order.totalAmount}
                    />
                    <input
                      type="hidden"
                      name="deliveryFee"
                      value={order.deliveryFee}
                    />
                    <input
                      type="hidden"
                      name="destination"
                      value={order.destination}
                    />
                    <input type="hidden" name="status" value="FinishedDelivery" />
                    <button type="submit" className={styles.addButton}>
                      Finished Delivery
                    
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
