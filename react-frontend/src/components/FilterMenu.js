// import {Dropdown} from "react-bootstrap";

import {useEffect, useState} from "react";
import {Collapse, Form} from "react-bootstrap";
import classes from '../pages/Listings.module.css'
import axios from "axios";
import MultiRangeSlider from "./multiRangeSlider/multiRangeSlider";

const FilterMenu = ({getFilter}) => {
    const [makeopen, setmakeOpen] = useState(false);
    const [modelopen, setModelOpen] = useState(false);
    const [minPrice, setMinprice] = useState(100000);
    const [maxPrice, setMaxprice] = useState(1000000);

    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);

    const [checkedBrands, setCheckedBrands] = useState([]);
    const [checkedModels, setCheckedModels] = useState([]);

    // Add/Remove checked item from list
    const handleBrandCheck = (event) => {
        var updatedList = [...checkedBrands];
        if (event.target.checked) {
            updatedList = [...checkedBrands, event.target.value];
        } else {
            updatedList.splice(checkedBrands.indexOf(event.target.value), 1);
        }
        setCheckedBrands(updatedList);
    };

    const handleModelCheck = (event) => {
        var updatedList = [...checkedModels];
        if (event.target.checked) {
            updatedList = [...checkedModels, event.target.value];
        } else {
            updatedList.splice(checkedModels.indexOf(event.target.value), 1);
        }
        setCheckedModels(updatedList);
    };


    useEffect(() => {
        axios.get("http://localhost:8080/listing/get-all-brands")
            .then(res => {
                setBrands(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    // }, []);
    //
    // useEffect(() => {
    const config = {
            method: "post",
            url: "http://localhost:8080/listing/get-all-models",
            data: {}
        }

        if (checkedBrands.length !== 0) {
            config.data["brands"] = checkedBrands;
        }
        // axios.get("http://localhost:8080/listing/get-all-models")
        axios(config)
            .then(res => {
                setModels(res.data);
            })
            .catch(err => {
                console.log(err)
            })

        const filterObject = {
            brands : checkedBrands,
            models: checkedModels,
            minPrice: minPrice,
            maxPrice:maxPrice
        }

        getFilter(filterObject);
    }, [checkedBrands, checkedModels, minPrice, maxPrice]);

    return <div className={classes.filterContainer}>
        <div>
            <p className={classes.filterField}>By Make</p>
            <label onClick={() => setmakeOpen(!makeopen)}>Select Brand</label>
            <Collapse in={makeopen}>
                <div className={classes.filteroOtions}>
                    {brands && brands.map((item, index) => (
                        <div key={index}>
                            <input value={item} type="checkbox" onChange={handleBrandCheck}/>
                            <span>{item}</span>
                        </div>
                        ))}
                </div>
            </Collapse>
        </div>
        <div>
            <p className={classes.filterField}>By Model</p>
            <label onClick={() => setModelOpen(!modelopen)}>Select model</label>
            <Collapse in={modelopen}>
                <div className={classes.filteroOtions}>
                    {models && models.map((item, index) => (
                        <div key={index}>
                            <input value={item} type="checkbox" onChange={handleModelCheck}/>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
        <div>
            <p className={classes.filterField}>By Price Range</p>
            <MultiRangeSlider
                min={100000}
                max={10000000}
                onChange={({ min, max }) => {
                    setMinprice(min);
                    setMaxprice(max);
                }
                }
            />

        </div>
    </div>
}

export default FilterMenu;