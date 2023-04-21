const VehicleCard = ({vehicle}) => {
    return <div>
        <h2>{vehicle.brand}</h2>
        <h5>{vehicle.model}</h5>
    </div>
}

export default VehicleCard;