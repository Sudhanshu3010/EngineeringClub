import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../App.css';
import { useState, useRef, useEffect } from 'react';
import { LuUploadCloud } from "react-icons/lu";
import Footer from '../Components/Footer';

const AddActivity = () => {
    const [activityData, setActivityData] = useState({
        title: "Learn Acoustic Guitar and Electric ",
        sessionPricing: "30",
        activityLocation: "1995 Broadway, London",
        availability: [],
        startTime: "10:00",
        endTime: "14:00",
        activityDescription: "I have over ten years experience as a professional studio guitarist, with adept knowledge in theory and practical skills. ",
        activityImages: [],

    });

    const handleAvailabilityChange = (e, index) => {
        const { name, value } = e.target;
        const updatedAvailability = [...activityData.availability];
        updatedAvailability[index] = {
            ...updatedAvailability[index],
            [name]: value
        };
        setActivityData({ ...activityData, availability: updatedAvailability });
    };
    const addDayAvailability = () => {
        setActivityData({
            ...activityData,
            availability: [
                ...activityData.availability,
                { day: "", startTime: "", endTime: "" }
            ]
        });
    };



    const [images, setImages] = useState([]);
    const [isDragging, setisDragging] = useState(false);
    const fileInputRef = useRef(null);

    function selectFiles() {
        fileInputRef.current.click();
    }
    function onFileSelect(event) {
        const files = event.target.files;
        if (files.length === 0) return;
        const newMedia = [];
        for (let i = 0; i < files.length; i++) {
            const fileType = files[i].type.split('/')[0]; // Get the file type (image or video)
            if (fileType === 'image' || fileType === 'video') {
                newMedia.push({
                    name: files[i].name,
                    url: URL.createObjectURL(files[i]),
                    type: fileType, // Store file type (image or video)
                });
            }
        }
        setImages((prevMedia) => [...prevMedia, ...newMedia]);
        setActivityData((prevActivityData) => ({
            ...prevActivityData,
            activityImages: [...prevActivityData.activityImages, ...newMedia],
        }));
    }
    useEffect(() => {
        // Update the image rendering logic here
        setActivityData((prevActivityData) => ({
            ...prevActivityData,
            activityImages: images,
        }));
    }, [images]);

    function deleteImage(index) {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        )
    }
    function onDragOver(event) {
        event.preventDefault();
        setisDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }
    function onDragLeave(event) {
        event.preventDefault();
        setisDragging(false);

    }
    function onDrop(event) {
        event.preventDefault();
        setisDragging(false);
        const files = event.dataTransfer.files;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),

                    }
                ])
            }
        }
    }

    // Confirm Details Show/Hide
    const [isAddMode, setIsAddMode] = useState(false);
    const toggleMode = () => {
        setIsAddMode(prevMode => !prevMode);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setActivityData({ ...activityData, [name]: value });
    };
    const dataWithImages = { ...activityData, activityImages: images };

    const navhome = (e) => {

         window.location.href = './home';

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Code to handle form submission, e.g., sending data to a backend or displaying submitted data
        console.log('Submitted data:', dataWithImages);

        // window.location.href = './bookings';


    };







    return (

        <>
            <div className="container mt-5 addActivity" style={{ display: isAddMode ? 'none' : 'block' }}>


                <form onSubmit={handleSubmit}>

                    <h1>Add activity</h1>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 mt-4">
                            <h3>Activity Details</h3>
                            <p>Please add the details for your activity</p>
                        </div>
                    </div>
                    <hr></hr>

                    {/* Title */}
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <h4>Title</h4>
                        </div>
                        <div className="col-lg-7">
                            <input
                                type="text"
                                name="title"
                                value={activityData.title}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <h4>Session Pricing</h4>
                        </div>
                        <div className="col-lg-7">
                            <input
                                required
                                type="number"
                                name="sessionPricing"
                                value={activityData.sessionPricing}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <h4 style={{ marginBottom: '0px' }}>Activity location</h4>
                            <p>Be as accurate as possible</p>
                        </div>
                        <div className="col-lg-7">
                            <input

                                name="activityLocation"
                                value={activityData.activityLocation}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <h4>Availability</h4>
                        </div>
                        <div className="col-lg-7">
                            {/* Add Day button */}


                            {/* Conditionally render labels after adding a day */}
                            {activityData.availability.length > 0 && (
                                <div className="row mt-3">
                                    <div className='col-4'>
                                        <label>Select Day:</label>
                                    </div>
                                    <div className='col-4'>
                                        <label>Select Start Time:</label>
                                    </div>
                                    <div className='col-4'>
                                        <label>Select End Time:</label>
                                    </div>
                                </div>
                            )}

                            {/* Dynamic input fields for multiple days */}
                            {activityData.availability.map((day, index) => (
                                <div key={index} className="row">
                                    <div className='col-4'>
                                        <select
                                            required
                                            name="day"
                                            value={day.day}
                                            onChange={(e) => handleAvailabilityChange(e, index)}
                                        >
                                            <option value="">Select a day</option>
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                            <option value="Friday">Friday</option>
                                            <option value="Saturday">Saturday</option>
                                            <option value="Sunday">Sunday</option>

                                            {/* ... (other days) ... */}
                                        </select>
                                    </div>
                                    <div className='col-4'>
                                        <input
                                            type="time"
                                            name="startTime"
                                            value={day.startTime}
                                            onChange={(e) => handleAvailabilityChange(e, index)}
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <input
                                            type="time"
                                            name="endTime"
                                            value={day.endTime}
                                            onChange={(e) => handleAvailabilityChange(e, index)}
                                        />
                                    </div>

                                </div>

                            ))}
                            <button type="button" onClick={addDayAvailability}>Add Day</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <h4 style={{ marginBottom: '0px' }}>Activity details <OverlayTrigger className="c-pointer"
                                placement="top"
                                overlay={<Tooltip id="tooltip-example">Better activity details results in better sales</Tooltip>}>
                                <span>&#9432;</span>
                            </OverlayTrigger></h4>
                            <p>Write a detailed description about activity</p>
                        </div>
                        <div className="col-lg-7">
                            <textarea type="text" rows={5}
                                id="activityDescription"
                                name="activityDescription"
                                value={activityData.activityDescription}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="row upload-section">
                        <div className="col-lg-3 col-sm-12">
                            <h4 style={{ marginBottom: '0px' }}>Activity images</h4>
                            <p>Share a few images of the activity</p>
                        </div>
                        <div className="col-lg-7">
                            <div className='drag-area' onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>

                                {isDragging ? (
                                    <span className='Media-Drop'>Drop Media Here</span>
                                ) : (

                                    <div className=''> <LuUploadCloud fontSize={'35px'} color='#475467' /><br /><span role="button" onClick={selectFiles}>Click to Upload</span>  or Drag & drop <br></br> SVG, PNG, JPG or GIF (max. 800x400px)

                                    </div>
                                )
                                }
                                <input name='file' type='file' className='file d-none' multiple ref={fileInputRef} onClick={onFileSelect}></input>


                            </div>


                            <button className='bg-bluebtn mt-2' type='button'>
                                Upload
                            </button>

                        </div>
                    </div>
                    <hr></hr>



                    {/* Other form fields go here */}
                    {/* ... */}

                    <div className="row">
                        <div className="col-8"></div>
                        <div className="col-lg-4 col-sm-12">
                            <button type="button"  onClick={navhome}  className='bg-white me-3'>Cancel</button>
                            <button type="button" onClick={toggleMode} className='bg-bluebtn'>Add Activity</button>
                        </div>
                    </div>


                </form>


            </div>
            {/* -----------------------Confirm Details section----------------------- */}
            <div className="mt-4 container display-data" style={{ display: isAddMode ? 'block' : 'none' }}>


                <h2>Confirm Details:</h2>
                <p style={{ fontSize: '18px', marginTop: '20px' }}>Title</p> {activityData.title}
                <hr></hr>
                <div className="row">
                    <div className="col-lg-6">
                        <p>Bio</p> <div style={{ whiteSpace: 'pre-line' }}>{activityData.activityDescription}</div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>Location </p>{activityData.activityLocation}
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <p>Availability </p>
                                {activityData.availability.map((day, index) => (
                                    <div key={index}>
                                        <p>{day.day} : {day.startTime} - {day.endTime}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-2">
                        <p>Payment </p>{activityData.sessionPricing}$ Per Session
                    </div>
                </div>


                <p className='mt-5'>Activity Images </p>
                <div className="img-container">
                    {images.map((images, index) => (
                        <div className="image" key={index}>
                            <span className='delete' onClick={() => deleteImage(index)}>&times;</span>
                            <img src={images.url} alt={images.name} />
                        </div>
                    ))

                    }


                </div>
                {/* <div className="row">
                    {displayImages}
                </div> */}


                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-lg-4 col-sm-12">
                        <button type="button" onClick={toggleMode} className='bg-white me-3'>Edit</button>
                        <button type="submit" onClick={handleSubmit} className='bg-bluebtn'>Confirm Activity</button>

                    </div>
                </div>


            </div>
            <div className="margin-100">
                &nbsp;
            </div>
            <Footer></Footer>
        </>

    );
};

export default AddActivity;
