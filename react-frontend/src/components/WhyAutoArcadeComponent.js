import classes from "./WhyAutoArcadeComponent.module.css";

const WhyAutoArcadeComponent = ({ data }) => {
  return (
    <div className={classes.component}>
      <div className={classes.iconDiv}>
        <span className={`material-symbols-outlined ${classes.icon}`}>
          {data.icon}
        </span>
      </div>
      <div className={classes.content}>
        <h5 className={classes.title}>{data.title}</h5>
        <p className={classes.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default WhyAutoArcadeComponent;
