// import React from "react";
// import "./App.css";

// const App = () => {
//     return (
//         <div>
//             <div className="upload-container">
//                 <h1>File Upload choose file</h1>
//                 <div className="upload-input">
//                     <input type="file" id="file" name="file" />
//                     <label htmlFor="file" className="upload-label">Browse</label>
//                     <span className="file-name">5 files selected</span>
//                 </div>
//                 <div className="preview-container">
//                     <div className="preview-item">
//                         <img src="" alt="" />
//                         <button>x</button>
//                     </div>
//                 </div>
//                 <div className="upload-button">
//                     <button>Upload</button>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default App;

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:3000";

const App = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setSelectedFiles([...e.target.files]);
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0) {
            setMessage("Please select at least one file");
            return;
        }

        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append("images", file); // 'images' matches the field name in multer config
        });

        try {
            setUploading(true);
            setMessage("Uploading...");
            
            const response = await axios.post(
                `${API_URL}/upload/multiple`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setMessage("Files uploaded successfully!");
            console.log("Upload response:", response.data);
        } catch (error) {
            console.error("Error uploading files:", error);
            setMessage("Error uploading files. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    const removeFile = (index) => {
        const newFiles = [...selectedFiles];
        newFiles.splice(index, 1);
        setSelectedFiles(newFiles);
    };

    return (
        <div className="app">
            <div className="upload-container">
                <h1>File Upload</h1>
                <div className="upload-input">
                    <input 
                        type="file" 
                        id="file" 
                        name="file" 
                        multiple 
                        onChange={handleFileChange}
                    />
                    <label htmlFor="file" className="upload-label">
                        Choose Files
                    </label>
                    <span className="file-name">
                        {selectedFiles.length} file(s) selected
                    </span>
                </div>
                
                <div className="preview-container">
                    {selectedFiles.map((file, index) => (
                        <div key={index} className="preview-item">
                            <span>{file.name}</span>
                            <button 
                                className="remove-btn"
                                onClick={() => removeFile(index)}
                                disabled={uploading}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>

                <div className="upload-button">
                    <button 
                        onClick={handleUpload}
                        disabled={uploading || selectedFiles.length === 0}
                    >
                        {uploading ? "Uploading..." : "Upload Files"}
                    </button>
                </div>

                {message && <div className="message">{message}</div>}
            </div>
        </div>
    );
};

export default App;
