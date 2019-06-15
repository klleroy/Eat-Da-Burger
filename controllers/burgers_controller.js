const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll().then(function (data) {
    const hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body.burger_name);
  burger.insertOne(req.body.burger_name).then(function (result) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

router.put("/api/burgers/:id", function (req, res) {
  // const condition = "id = " + req.params.id;

  // console.log("condition", condition);

  console.log(req.body);
  
  burger.updateOne(
    {devoured: req.body.devoured}
  , req.params.id).then(function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      return res.json('/');
      // res.status(200).end();
    }
  })
});



// router.delete("/api/burger/:id", function(req, res) {
//   const condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // Export routes for server.js to use.
module.exports = router;
