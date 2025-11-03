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
                </div>
            </div>
        </div>
    );
};
export default App;
