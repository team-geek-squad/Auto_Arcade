import {Container} from "react-bootstrap";
import classes from "./AddListing.module.css";
import {useState} from "react";
import DragDropFile from "../components/DragNDropUpload/DragDropFile";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const AddListing = () => {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [manufactureYear, setManufactureYear] = useState(2000);
  const [meterReading, setMeterReading] = useState(0);

  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const token = cookies.get('TOKEN');

  function handleFile(files) {
    setSelectedFile(files);
    console.log(files);
  }

  const handelSubmit = () => {
    if (!selectedFile) return;
    for (const file of selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        // encodedFiles.push(reader.result);
        console.log("running");
        await uploadImage(reader.result);

      };
      reader.onerror = () => {
        console.error('AHHHHHHHH!!');
      };
    }

    const vehicleData = {
      title : title,
      brand: brand,
      model: model,
      manufactureYear: manufactureYear,
      meterReading: meterReading,
      price: price,
      location: location,
      sellerName: token.userData.username,
      sellerId: token.userData.userID,
      sellerEmail: token.userData.email,
      imageURLs: imageUrls,
    }

    const config = {
      headers: {
        "Authorization": `Bearer ${token.token}`
      }
    }

    axios.post("http://localhost:8080/listing/new_vehicle", vehicleData, config)
        .then(res => console.log(res))
        .catch(err => console.log(err));

  }

  const uploadImage = async (base64EncodedImage) => {
    try {
      const imageURL = [];

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }

      const formData = new FormData();
      formData.append("base64image", base64EncodedImage);
      const res = await axios.post("http://localhost:8080/listing/upload", formData, config)
      imageURL.push(res.data.url);
      console.log(imageURL);
      setImageUrls(imageURL)
      setFileInputState('');
      setPreviewSource('');
    } catch (err) {
      console.error(err);
    }
  };

  return <Container>
    <div className={classes.inputContainer}>
      <div className={classes.textInputContainer}>
        <div className={classes.inputGroup}>
          <label htmlFor="title">
            <b>Add Title</b>
          </label>
          <input
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="brand">
            <b>Brand</b>
          </label>
          <input
              type="text"
              placeholder="Enter Brand"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="model">
            <b>Model</b>
          </label>
          <input
              type="text"
              placeholder="Enter Model"
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="location">
            <b>Location</b>
          </label>
          <input
              type="text"
              placeholder="Enter Your Nearest City"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="price">
            <b>Price</b>
          </label>
          <input
              type="text"
              placeholder="Enter Price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
          />
        </div>
      </div>
      <div className={classes.imageInputContainer}>
        <DragDropFile handleFile={handleFile} />
      </div>
    </div>
    <div>
      <button className={classes.submitButton} type="submit" onClick={handelSubmit}>
        <p className={classes.buttonText}>Login</p>
      </button>
    </div>
  </Container>;
};

export default AddListing;
