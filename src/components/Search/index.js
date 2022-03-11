import React from "react";

export const Search = ({ textInputFunction, ClickButton }) => {
    return (
            <div className="input-group mb-3 mt-5">
                <input
                    onChange={(e) => textInputFunction(e)}
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                />
                <button
                    onClick={ClickButton} 
                    className="btn btn-outline-secondary bg-warning" 
                    type="button" 
                    id="button-addon2"
                >Ara...</button>
            </div>
    )
}l