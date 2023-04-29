import classes from './Listings.module.css'
import FilterMenu from "../components/FilterMenu";
import VehicleCard from "../components/VehicleCard/VehicleCard";
import {useEffect, useState} from "react";
import axios from "axios";

const Listings = () => {
  const [vehicleList, setVehicleList] = useState(null);
  const [filter, setFilter] = useState({});

  const getFilter = (filter) => {
    setFilter(filter);
  }

  useEffect(() => {
    const config = {
      method: 'post',
      url:'http://localhost:8080/listing/filter',
      data: {
        price: {$lte: filter.maxPrice || 1000000000, $gte: filter.minPrice || 0}
      }
    }

    if (filter.brands && filter.brands.length !== 0) {
      config.data.brand = filter.brands;
    }

    if (filter.models && filter.models.length !== 0) {
      config.data.model = filter.models;
    }

    axios(config)
        .then((res) => {
          setVehicleList(res.data)
        })
  }, [filter]);


  return <div className={classes.listingSection}>
    <div className={classes.filterColumn}>
      <FilterMenu getFilter={getFilter}/>
    </div>
    <div>
    <div className={classes.scorllView}>
      {vehicleList && vehicleList.map((vehicle) => <VehicleCard key={vehicle._id} vehicle={vehicle}/>)}
    </div>

    </div>
  </div>
};

export default Listings;
