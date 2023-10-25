import styles from './swags.module.css';
import swag from '../../../../assets/swags/swags.png';
import { RegularButton } from '../../../../components/buttons';

const Swags = () => {
  return (
    <div className={styles.swag_container}>
      <div className={styles.swag_inner}>
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          Here’s how to get your Swags...
        </h1>

        <div className={styles.flex_container}>
          <div className={styles.flex_item}>
            <div>
              <p>
                We're excited to offer you the chance to grab some exclusive
                DevFest Ado-Ekiti merchandise. Placing your order in the swag
                shop is very simple and hassle-free. Here's how:
              </p>
              <ul>
                <li>
                  Choose Your Item: Browse through our range of awesome swags
                  and click on the item you want to purchase.
                </li>
                <li>
                  Select Your Size: For Shirts, Sweatshirts, and Hoodies, make
                  sure to pick the right size for a perfect fit!
                </li>
                <li>
                  Add to Cart: Once you've made your selections, click the "Add
                  to Cart" button. You can continue shopping or proceed to
                  checkout.
                </li>
                <li>
                  Review Your Order: Before finalising your purchase, check the
                  items, sizes, and quantities to avoid any mistakes.
                </li>
                <li>
                  Checkout: When you're ready, click on the cart icon to proceed
                  to checkout. Provide your payment details to complete the
                  purchase.
                </li>
              </ul>

              <p>
                Wait for your fantastic DevFest Ado-Ekiti swag to arrive. Thank
                you for supporting DevFest Ado-Ekiti 2023. Happy shopping!
              </p>

              <div className={styles.btn_container}>
                <RegularButton
                  title="Click  here to Pre-Order Now!"
                  className={styles.regularButton}
                  url="https://shop.devfestadoekiti.com/"
                />
              </div>
            </div>
          </div>
          <div className={styles.flex_item}>
            <img src={swag} alt="swag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swags;
