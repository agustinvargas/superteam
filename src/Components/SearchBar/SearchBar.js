import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  async function gettingAPI(userSearch) {
    const baseUrl = "https://www.superheroapi.com/api/10228035059441005/search";
    const res = await axios.get(`${baseUrl}/${userSearch}`);
    console.log(res.data);
  }

  useEffect(() => {
    gettingAPI(search);
  }, [search]);

  return <div></div>;
}
