import logo from "./logo.svg";
import "./App.css";
import SearchResults from "./components/SearchResults";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import OpeningPage from "./components/OpeningPage";
// import MainPage from "./components/MainPage";
import ApiCallState from "./Context/ApiCall/ApiCallState";
import ApiCallContext from "./Context/ApiCall/ApiCallContext";
import SignUpPage from "./components/SignUpPage";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Popupbox from "./components/Popupbox";
// import SearchResults from "./components/SearchResults";
function App() {
  // const [movies, setMovies] = useState([]);
  // const [page,setPage] =  useState(1)
  // const context = useContext(ApiCallContext);
  // const { movies, setMovies } = context;
  // console.log(movies)

  // const Api_Url = `https://api.themoviedb.org/3/movie/popular?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&&page=${page}`;

  // document.body.style.backgroundColor = "black";

  // const FetchData = async () => {

  // console.log("Fetch Data starts")

  //   fetch(Api_Url)
  //     .then((res) => res.json())
  //     .then((data) => {

  //       setMovies((prev) => [...prev, ...data.results]);

  //       console.log("Fetch data ends")
  //     });

  //   }
  //     useEffect(() => {
  //       FetchData();
  //     }, [page]);

  //     const handelInfiniteScroll = async () => {
  //       // console.log("scrollHeight" + document.documentElement.scrollHeight);
  //       // console.log("innerHeight" + window.innerHeight);
  //       // console.log("scrollTop" + document.documentElement.scrollTop);
  //       try {
  //         if (
  //           window.innerHeight + document.documentElement.scrollTop + 1 >=
  //           document.documentElement.scrollHeight
  //         ) {
  //           setPage((prev) => prev + 1);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handelInfiniteScroll);
  //   return () => window.removeEventListener("scroll", handelInfiniteScroll);
  // }, []);
  // console.log(movies);
  return (
    <>
      {/* <ApiCallState/> */}
      <BrowserRouter>
        <ApiCallState>
          {/* <MainPage/> */}
          <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/page" element={<SearchResults />} />
            <Route path="/home" element={<MainPage />} />
          </Routes>
        </ApiCallState>
      </BrowserRouter>

      {/* <Router>
          <Routes>
            <Route path="/" element={< />} />
          </Routes>
        </Router> */}
      {/* </ApiCallState> */}
      {/* <Popupbox/> */}

      {/* <MainPage /> */}

      {/* <ApiCallState> */}
      {/* <Router>
          <Routes>
            <Route  path="/" element={<MainPage />} />
          </Routes>
        </Router> */}

      {/* <MainPage /> */}
      {/* </ApiCallState> */}
    </>
  );
}

export default App;

{
  /* <LargeImage /> */
}

{
  /* <LargeImage />

      <h3 className="popularmovies">Popular Movies</h3>

      <div className="container">
        <div className="items">
          ;
          {movies.map((moviesReq) => (
            <MovieItem key={moviesReq.id} {...moviesReq} />
            
          ))}
        </div>
      </div> */
}

{
  /* <ApiCallState>
  <Router>

  <Routes>

<Route exact path="/" element={<ApiCallState/>} />
</Routes>
        
</Router>
</ApiCallState> */
}
