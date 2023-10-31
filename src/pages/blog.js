import React, { useState } from "react";
import axios from "axios";

function Blog() {
  const [title, setTilte] = useState();
  const [description, setDescription] = useState();
  const [submitSuceess, setSubmitSuceess] = useState();

  const onSubmit = () => {
    // console.log("data", title, description);
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", {
        title: title,
        body: description,
      })
      .then(function (response) {
        console.log(response);
        setSubmitSuceess(true);
      })
      .catch(function (error) {
        console.log("err", error);
        setSubmitSuceess(false);
      });
  };
  return (
    <div>
      <h2>Blog</h2>
      <label>Title</label> <input onChange={(e) => setTilte(e.target.value)} />
      <br /> <br />
      <label>Body</label>{" "}
      <textarea onChange={(e) => setDescription(e.target.value)} /> <br />
      <button onClick={onSubmit}>Submit</button>
      <br />
      {submitSuceess && (
        <span style={{ color: "green" }}>Blog is created successfully</span>
      )}
    </div>
  );
}

export default Blog;
