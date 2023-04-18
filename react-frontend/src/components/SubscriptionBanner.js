import classes from "./SubscriptionBanner.module.css";

const SubscriptionBanner = () => {
  return (
    <div className={classes.banner}>
      <p className={classes.text}>be the first to know about new listings!</p>
      <div className={classes.subscriptionBox}>
        <input
          type="email"
          placeholder="Enter your email"
          className={classes.input}
        />
        <button className={classes.button}>
          <p className={classes.buttonText}>Submit</p>
        </button>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
