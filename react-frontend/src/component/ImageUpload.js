import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [brand, setbrand] = useState('');
    const [model, setmodel] = useState('');
    const [manufactureYear, setmanufactureYear] = useState('');
    const [price, setPrice] = useState(0);
    const imageURLs = [];
    

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        setSelectedFile(files);
        setFileInputState(e.target.value);
        console.log(files);
    };

    // only work with one file upload. need to change before use
    // const previewFile = (file) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         setPreviewSource(reader.result);
    //     };
    // };

    const handleSubmitFile = async (e) => {
        e.preventDefault();

        // const encodedFiles = [];
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

        
    };


    const uploadImage = async (base64EncodedImage) => {
        try {
            const formData = new FormData();
            formData.append("base64image", base64EncodedImage);
            const res = await axios.post("http://localhost:8080/listing/upload", formData)
            imageURLs.push(res.data.url);
            setFileInputState('');
            setPreviewSource('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1 className="title">Upload an Image</h1>
            <form onSubmit={handleSubmitFile} className="form">
            <label for='brandInput'>upload file</label>
                <input
                    id="brandInput"
                    type="text"
                    name="image"
                    onChange={(e) => setbrand(e.target.value)}
                    value={brand}
                    className="form-input"
                />
                <br />
                <label for='modelInput'>upload file</label>
                <input
                    id="modelInput"
                    type="text"
                    name="image"
                    onChange={(e) => setmodel(e.target.value)}
                    value={model}
                    className="form-input"
                />
                <br />
                <label for='yearInput'>upload file</label>
                <input
                    id="yearInput"
                    type="text"
                    multiple
                    name="image"
                    onChange={(e) => setmanufactureYear(e.target.value)}
                    value={manufactureYear}
                    className="form-input"
                />
                <br />
                <label for='priceInput'>upload file</label>
                <input
                    id="priceInput"
                    type="text"
                    name="image"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className="form-input"
                />
                <br />
                <label for='fileInput'>upload file</label>
                <input
                    id="fileInput"
                    type="file"
                    multiple
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                />
                <br/>
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    );
};

export default ImageUpload;
