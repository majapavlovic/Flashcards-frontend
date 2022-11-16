import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Categories({ handleQAInput }) {
  const [categories, setCategories] = useState();
  var config = {
    method: "get",
    url: "api/flashcards/categories",
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };
  useEffect(() => {
    if (categories == null) {
      axios(config)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    console.log(categories);
  });

  return (
    <div>
      <label>Category</label>
      <select
        className="form-select"
        name="category_id"
        id="category_id"
        onChange={handleQAInput}
      >
        <option value="0">Choose category</option>

        {categories == null ? (
          <></>
        ) : (
          categories.map((cat) => (
            <option value={cat.id} key={cat.id}>
              {cat.name}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
