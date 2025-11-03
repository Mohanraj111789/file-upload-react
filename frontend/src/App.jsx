import React from "react";
import "./App.css";

const App = () => {
    return (
        <div>
            <div className="upload-container">
                <h1>File Upload choose file</h1>
                <div className="upload-input">
                    <input type="file" id="file" name="file" />
                    <label htmlFor="file" className="upload-label">Browse</label>
                    <span className="file-name">5 files selected</span>
                </div>
                <div className="preview-container">
                    <div className="preview-item">
                        <img src="" alt="" />
                        <button>x</button>
                    </div>
                </div>
                <div className="upload-button">
                    <button>Upload</button>
                </div>
            </div>
        </div>
    );
};
export default App;
