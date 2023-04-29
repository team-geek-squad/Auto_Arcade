import classes from "./VehicleCard.module.css";

const VehicleCard = ({vehicle}) => {
    return <div className={classes.cardContainer}>
        <div className={classes.imgContainer}>
            <img src="https://picsum.photos/400/300" alt=""/>
        </div>
        <div className={classes.detailsContainer}>
            <h3>Vehicle Custom title</h3>
            {/*<h2>{vehicle.title}</h2>*/}
            <div>
                <p>{vehicle.price}</p>
                <p>{vehicle.sellerName}</p>
            </div>
            <div>
                <p>{vehicle.brand}</p>
                <p>{vehicle.location}</p>
            </div>
            <div>
                <p>{vehicle.model}</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut eos exercitationem magni nisi odio odit praesentium quam quis quo?</p>
        </div>
    </div>

    // <div>
    //     <h2>{vehicle.brand}</h2>
    //     <h5>{vehicle.model}</h5>
    // </div>
}

export default VehicleCard;