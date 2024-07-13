import { createContext } from "react";

import { baseUrl } from "../baseUrl";

import { useState, useEffect } from "react";
//import AppContextProvider from "./context/AppContext";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // data fill karna ko api sa ayaga

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();

      console.log("i am inside fetch");
      console.log(data);

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);

      console.log("Posts state:", posts);
    } catch (e) {
      console.log("ERR");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  // useEffect(() => {
  //   fetchBlogPosts(Page);
  // }, [Page]);

  function HandlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  //value yha obj ha jisma sara required data ha jo ap send karoga
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    HandlePageChange,
    fetchBlogPosts,
  };

  // step2
  // tumana apna children ko appContent ki value provide kardi
  // children App vala component
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
