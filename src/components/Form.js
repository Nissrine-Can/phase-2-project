import React, { useState } from 'react';
import styled from 'styled-components';

 function Form({ addCar }) {
     
    const [formData, setFormData] = useState({
        name: "",
        year: "",
        price: "",
        enthusiastType: "",
        engine: "",
        drivetrain: "",
        image: "",
        reviews: []
    })

    function handleChange(e) {
        console.log(e.target.value)
        console.log(e.target.name)
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        addCar(formData)
    }

    return (
        <FormWrap>
                <form onSubmit={handleSubmit}className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="inputName3" className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                            <input 
                                   type="text" 
                                   name= "name"
                                   className="form-control" 
                                   id="inputName3" 
                                   placeholder="Name" 
                                   value={formData.name}
                                   onChange={handleChange}
                                   />
                        </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputYear3" className="col-sm-2 control-label">Year</label>
                        <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    name= "year"
                                    className="form-control" 
                                    id="inputYear3" 
                                    placeholder="Year"
                                    value={formData.year}
                                    onChange={handleChange}
                                     />
                        </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputPrice3" className="col-sm-2 control-label">Price</label>
                        <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    name= "price"
                                    className="form-control" 
                                    id="inputPrice3" 
                                    placeholder="Price" 
                                    value={formData.price}
                                    onChange={handleChange}
                                    />
                        </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputEnthusiastType3" className="col-sm-2 control-label">Enthusiast Type</label>
                        <div className="col-sm-10">
                                <input 
                                     type="text" 
                                     name= "enthusiastType"
                                     className="form-control" 
                                     id="inputEnthusiastType3" 
                                     placeholder="Enthusiast Type" 
                                     value={formData.enthusiastType}
                                     onChange={handleChange}
                                     />
                        </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputEngine3" className="col-sm-2 control-label">Engine</label>
                        <div className="col-sm-10">
                                <input 
                                       type="text" 
                                       name= "engine"
                                       className="form-control" 
                                       id="inputEngine3" 
                                       placeholder="Engine" 
                                       value={formData.engine}
                                       onChange={handleChange}
                                       />
                        </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputDescription3" className="col-sm-2 control-label">Drivetrain</label>
                        <div className="col-sm-10">
                                <input 
                                      type="text" 
                                      name= "drivetrain"
                                      className="form-control" 
                                      id="inputDescription3" 
                                      placeholder="Drivetrain" 
                                      value={formData.drivetrain}
                                      onChange={handleChange}
                                      />
                        </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputImage3" className="col-sm-2 control-label">Image</label>
                        <div className="col-sm-10">
                                <input 
                                      type="text" 
                                      name= "image"
                                      className="form-control" 
                                      id="inputImage3" 
                                      placeholder="Image" 
                                      value={formData.image}
                                      onChange={handleChange}
                                      />
                        </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputReview3" className="col-sm-2 control-label">Reviews</label>
                        <div className="col-sm-10">
                                <input 
                                      type="text" 
                                      name= "reviews"
                                      className="form-control" 
                                      id="inputReviews3" 
                                      placeholder="Reviews" 
                                      value={formData.Reviews}
                                      onChange={handleChange}
                                      />
                        </div>
                        </div>
                       
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Submit</button>
                            </div>
                        </div>
                 </form>
        </FormWrap>
    )
}

const FormWrap = styled.div`
margin: 0 auto;
width: 600px;
`
export default Form;