import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FavoriteDog() {
  const [posts1, setPosts1] = useState(null);
  const [posts2, setPosts2] = useState(null);
  const [posts3, setPosts3] = useState(null);
  const [posts4, setPosts4] = useState(null);
  const [posts5, setPosts5] = useState(null);
  const [posts6, setPosts6] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handlePosts1();
    handlePosts2();
    handlePosts3();
    handlePosts4();
    handlePosts5();
    handlePosts6();
  }, []);

  const handlePosts1 = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://random.dog/woof.json"
      );
      setPosts1(result.data.url);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  const handlePosts2 = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://random.dog/woof.json"
      );
      setPosts2(result.data.url);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  const handlePosts3 = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://random.dog/woof.json"
      );
      setPosts3(result.data.url);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  const handlePosts4 = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://random.dog/woof.json"
      );
      setPosts4(result.data.url);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  const handlePosts5 = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://random.dog/woof.json"
      );
      setPosts5(result.data.url);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  const handlePosts6 = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://random.dog/woof.json"
      );
      setPosts6(result.data.url);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="App">
      <div>
        <h3>Dogs/Refresh</h3>
        {loading && <p>Posts are loading!</p>}
        {error && <p>{error}</p>}
        <img src= {posts1} width="500" height="300"></img>
        <img src= {posts2} width="500" height="300"></img>
        <br></br>
        <img src= {posts3} width="500" height="300"></img>
        <img src= {posts4} width="500" height="300"></img>
        <br></br>
        <img src= {posts5} width="500" height="300"></img>
        <img src= {posts6} width="500" height="300"></img>
        <br></br>
      </div>
    </div>
  );
}