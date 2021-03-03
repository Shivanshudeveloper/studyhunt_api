const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51HzRB6FXQdX7lmvWuuR5Vps43XA0nIsZOPv8JF1NrebMQPu8zRpdzl0wRMMH7Rz6nlh3rHhn1k9jKrzQWaL1tJZD00CK2PwLWk')
const { v4: uuidv4 } = require('uuid');
// Getting Module
const University_Model = require('../models/University');

// TEST
// @GET TEST
// GET 
router.get('/test', (req, res) => {
    res.send("Working");
});


// Database CRUD Operations
// @POST Request to GET the People
// GET 
router.get('/getuniversitites', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    University_Model.find({}).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});


// Database CRUD Operations
// @POST Request to GET the People
// GET 
router.get('/finduniversity/:name', (req, res) => {
    const { name } = req.params;
    var regexName = new RegExp(name);
    var searchName = name.toLowerCase();
    var t = []
    res.setHeader('Content-Type', 'application/json');
    University_Model.find({"name": regexName}).sort({date: -1})
        .then(data => {
            if (data.length === 0) {
                University_Model.find({"country": name}).sort({date: -1})
                .then(data => {
                    if (data.length === 0) {
                        University_Model.find({"country": regexName}).sort({date: -1})
                            .then(data => {
                                if (data.length === 0) {
                                    University_Model.find({"category": regexName}).sort({date: -1})
                                        .then(data => {
                                            if (data.length === 0) {
                                                University_Model.find({"intakes": regexName}).sort({date: -1})
                                                    .then(data => {
                                                        if (data.length === 0) {
                                                            University_Model.find({"city": regexName}).sort({date: -1})
                                                                .then(data => {
                                                                    if (data.length === 0) {
                                                                        University_Model.find({"city": searchName}).sort({date: -1})
                                                                            .then(data => {
                                                                                if (data.length === 0) {
                                                                                    University_Model.find({"intakes": searchName}).sort({date: -1})
                                                                                        .then(data => {
                                                                                            if (data.length === 0) {
                                                                                                University_Model.find({"category": searchName}).sort({date: -1})
                                                                                                    .then(data => {
                                                                                                        if (data.length === 0) {
                                                                                                            University_Model.find({"country": searchName}).sort({date: -1})
                                                                                                                .then(data => {
                                                                                                                    if (data.length === 0) {
                                                                                                                        University_Model.find({"type": searchName}).sort({date: -1})
                                                                                                                            .then(data => {
                                                                                                                                if (data.length === 0) {
                                                                                                                                    var [instituteType, instituteCategory] = searchName.split(" ");
                                                                                                                                    if ( instituteCategory === "colleges") {
                                                                                                                                        instituteCategory = "college";
                                                                                                                                    } else if (instituteCategory === "institutes") {
                                                                                                                                        instituteCategory = "institute";
                                                                                                                                    } else if (instituteCategory === "universities") {
                                                                                                                                        instituteCategory = "university";
                                                                                                                                    }
                                                                                                                                    University_Model.find({"type": instituteType, "category": instituteCategory}).sort({date: -1})
                                                                                                                                        .then(data => {
                                                                                                                                            if (data.length === 0) {
                                                                                                                                                if ( instituteCategory === "colleges") {
                                                                                                                                                    instituteCategory = "college";
                                                                                                                                                } else if (instituteCategory === "institutes") {
                                                                                                                                                    instituteCategory = "institute";
                                                                                                                                                } else if (instituteCategory === "universities") {
                                                                                                                                                    instituteCategory = "university";
                                                                                                                                                }
                                                                                                                                                University_Model.find({"type": instituteCategory, "category": instituteType}).sort({date: -1})
                                                                                                                                                    .then(data => {
                                                                                                                                                        if (data.length === 0) {
                                                                                                                                                            res.status(200).json(t);
                                                                                                                                                        } else {
                                                                                                                                                            res.status(200).json(data);
                                                                                                                                                        }
                                                                                                                                                    })
                                                                                                                                                    .catch(err => res.status(400).json(`Error: ${err}`))
                                                                                                                                            } else {
                                                                                                                                                res.status(200).json(data);
                                                                                                                                            }
                                                                                                                                        })
                                                                                                                                        .catch(err => res.status(400).json(`Error: ${err}`))
                                                                                                                                } else {
                                                                                                                                    res.status(200).json(data);
                                                                                                                                }
                                                                                                                            })
                                                                                                                            .catch(err => res.status(400).json(`Error: ${err}`))
                                                                                                                    } else {
                                                                                                                        res.status(200).json(data);
                                                                                                                    }
                                                                                                                })
                                                                                                                .catch(err => res.status(400).json(`Error: ${err}`))
                                                                                                        } else {
                                                                                                            res.status(200).json(data);
                                                                                                        }
                                                                                                    })
                                                                                                    .catch(err => res.status(400).json(`Error: ${err}`))
                                                                                            } else {
                                                                                                res.status(200).json(data);
                                                                                            }
                                                                                        })
                                                                                        .catch(err => res.status(400).json(`Error: ${err}`))
                                                                                } else {
                                                                                    res.status(200).json(data);
                                                                                }
                                                                            })
                                                                            .catch(err => res.status(400).json(`Error: ${err}`))
                                                                    } else {
                                                                        res.status(200).json(data);
                                                                    }
                                                                })
                                                                .catch(err => res.status(400).json(`Error: ${err}`))
                                                        } else {
                                                            res.status(200).json(data);
                                                        }
                                                    })
                                                    .catch(err => res.status(400).json(`Error: ${err}`))
                                            } else {
                                                res.status(200).json(data);
                                            }
                                        })
                                        .catch(err => res.status(400).json(`Error: ${err}`))
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                            .catch(err => res.status(400).json(`Error: ${err}`))
                    } else {
                        res.status(200).json(data);
                    }
                })
                .catch(err => res.status(400).json(`Error: ${err}`))
            } else {
                res.status(200).json(data);
            }
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});


// Database CRUD Operations
// @POST Request to GET the People
// GET 
router.get('/finduniversitystudy/:study', (req, res) => {
    const { study } = req.params;
    var regexName = new RegExp(study);
    var t = []
    res.setHeader('Content-Type', 'application/json');
    University_Model.find({"conditionaloffer": "Yes"}).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});


// Database CRUD Operations
// @POST Request to GET the People
// POST 
router.post('/filtersfind', (req, res) => {
    const { country, visa } = req.body;
    var t = []
    res.setHeader('Content-Type', 'application/json');
    var regexNamecountry = new RegExp(country);
    var regexNamevisa = new RegExp(visa);

    var searchName = country.toLowerCase();


    if ( country === "" &&  visa === "" ) {
        University_Model.find({})
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.status(400).json(`Error: ${err}`))
    } else {
        if ( country !== "" &&  visa !== "" ) {
            if ( visa === "I don't have this") {
                University_Model.find({"country": searchName, "post_study_work_visa": "No"}).sort({date: -1})
                    .then(data => {
                        res.status(200).json(data);
                    })
                    .catch(err => res.status(400).json(`Error: ${err}`))
            } else {
                University_Model.find({"country": searchName, "post_study_work_visa": "Yes"}).sort({date: -1})
                    .then(data => {
                        res.status(200).json(data);
                    })
                    .catch(err => res.status(400).json(`Error: ${err}`))
            }
        }
    }
});


// Database CRUD Operations
// @POST Request to add university
// POST 
router.post('/addnewuniversity', (req, res) => {
    var { name, address, country, city, province, type, category, visa, conditionaloffer, campusaccomodation, workwhilestudy, websiteurl, dicipline, fields, about, logo, coverphoto } = req.body;
    
    country = country.toLowerCase();
    city = city.toLowerCase();
    type = type.toLowerCase();
    category = category.toLowerCase();
    
    res.setHeader('Content-Type', 'application/json');
    University_Model.countDocuments({'name': name})
        .then((count) => {
            if (count === 0) {
                const newUniversity = new University_Model({
                    name,
                    address,
                    country,
                    city,
                    province,
                    type,
                    category,
                    visa,
                    conditionaloffer,
                    campusaccomodation,
                    workwhilestudy,
                    websiteurl,
                    dicipline,
                    logo,
                    coverphoto,
                    programs: fields,
                    about
                });
                newUniversity.save()
                    .then((data) => {
                        res.status(200)
                    })
                    .catch(err => console.log(err))
            }
        })
});


// Database CRUD Operations
// @POST Request to GET the University Data
// GET 
router.get('/getuniversitydatas/:id', (req, res) => {
    const { id } = req.params;
    res.setHeader('Content-Type', 'application/json');
    University_Model.findOne({ '_id': id }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// Database CRUD Operations
// @POST Request to GET the University Data
// GET 
router.get('/getalluniversity', (req, res) => {
    const { id } = req.params;
    res.setHeader('Content-Type', 'application/json');
    University_Model.find({}).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});




// Database CRUD Operations
// @POST Request to GET the University Data
// GET 
router.get('/getuniversititesfilterscountry/:country', (req, res) => {
    let { country } = req.params;
    country = country.toLowerCase();
    res.setHeader('Content-Type', 'application/json');
    University_Model.find({ 'country': country }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});




// Database CRUD Operations
// @POST Request to GET the University Data
// GET 
router.get('/getuniversititesfiltersvisa/:visa', (req, res) => {
    let { visa } = req.params;
    res.setHeader('Content-Type', 'application/json');
    University_Model.find({ visa }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});




// Database CRUD Operations
// @POST Request to GET the University Data
// GET 
router.get('/getuniversititesfilterscategory/:category', (req, res) => {
    let { category } = req.params;
    category = category.toLowerCase();
    res.setHeader('Content-Type', 'application/json');
    University_Model.find({ category }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});




// Database CRUD Operations
// @POST Request to GET the University Data
// GET 
router.get('/getuniversititesfiltersworkwhilestudy/:workwhilestudy', (req, res) => {
    let { workwhilestudy } = req.params;
    res.setHeader('Content-Type', 'application/json');
    University_Model.find({ workwhilestudy }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});




// Database CRUD Operations
// @POST Request to GET the University Data
// GET 
router.get('/getuniversititesfilterscampusaccomodation/:campusaccomodation', (req, res) => {
    let { campusaccomodation } = req.params;
    res.setHeader('Content-Type', 'application/json');
    University_Model.find({ workwhilestudy }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});




// Database CRUD Operations
// @POST Request to GET the University Data
// GET 
router.get('/getuniversititesfiltersconditionaloffers/:conditionaloffers', (req, res) => {
    let { conditionaloffers } = req.params;
    res.setHeader('Content-Type', 'application/json');
    University_Model.find({ 'conditionaloffer': conditionaloffers }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});



module.exports = router;