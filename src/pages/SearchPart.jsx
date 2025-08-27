import { useEffect, useState } from "react";
import { CancelIcon } from "../assets/icons";
import MovieCard from "../components/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SearchPart = () => {
  const [allMovies, setAllMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://kinotime.world/api/search/top?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("API data:", data);
        setAllMovies(data.movies || []);
        setMovies(data.movies || []);
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  // search function
   const handleChange = (e) => {
    const value = e.target.value
    setSearchValue(value);

    if (value.trim() === "") {
      setMovies(allMovies);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchValue.trim() !== "") {
      const filtered = allMovies.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setMovies(filtered);
    }
  };


  return (
    <div className=" px-[35px] flex flex-col justify-center items-center py-[20px] bg-[rgb(23,24,24)]">
      {/* search input */}
      <label className="flex items-center justify-between w-full mx-auto py-[16px] px-[24px] rounded-[8px] bg-[rgb(29,31,30)]">
        <input autoComplete="off" className="searchInput outline-none text-[16px] text-[rgb(255,255,255)] border-none bg-transparent flex-1" type="text" name="search" placeholder="Filmlar va seriallar" value={searchValue} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <CancelIcon />
      </label>

      <div className="mt-5 w-full ">
        <strong className="text-start  text-white">
          Ko'p qidirilganlar
        </strong>

        {/* Swiper */}
        <Swiper
          spaceBetween={-150}
          slidesPerView={0}
          navigation
          mousewheel
          cssMode
          modules={[Navigation]}
          breakpoints={{
            300: { slidesPerView: 1 },
            440: { slidesPerView: 2 },
            708: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1000: { slidesPerView: 5 },
            1100: { slidesPerView: 6 },
          }} >

          {movies.map((movie) => (
            <SwiperSlide  key={movie.id}>
              <MovieCard
                title={movie.title}
                poster={movie.poster}
                year={movie.year}
                imdbRating={movie.imdbRating}
                genre={movie.genre}
                country={movie.country}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SearchPart;
