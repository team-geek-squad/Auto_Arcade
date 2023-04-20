import classes from './Listings.module.css'
import FilterMenu from "../components/FilterMenu";
import VehicleCard from "../components/VehicleCard";

const Listings = () => {
  return <div className={classes.listingSection}>
    <div className={classes.filterColumn}>
      <FilterMenu/>
    </div>
    <div>

      <VehicleCard/>
      <VehicleCard/>
      <VehicleCard/>
      <VehicleCard/>
    </div>
  </div>
};

export default Listings;
