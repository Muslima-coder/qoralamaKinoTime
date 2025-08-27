import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const SingleMovie = () => {
  const [movie, setMovies] = useState({ });
  const { id } = useParams();

  useEffect(() => {
    fetch("https://kinotime.world/api/banners?lang=uz")
      .then(res => res.json())
      .then(data => {
        let singleData = data.find(item => item.id == id)
        setMovies(singleData.movie)  
      })
      .catch(err => console.error(err));
  }, []);
  console.log(movie);
  
  return (
    <div className="h-[100vh] py-8 single-movie-wrapper text-white">
      <div className="mt-8  px-6  flex items-center justify-between">
        <div className="flex flex-col gap-[15px]">
        <h1 className="text-center text-white font-black text-[30px] italic">{movie.originalTitle}</h1>
        <img src={`https://kinotime.world${movie?.backdrop}`} alt={movie?.title} className="rounded-lg mb-6 w-[600px] h-full" />
        </div>
        <div className="space-y-2 w-[500px]">
          <p className="italic text-white font-bold text-[24px] text-center">{movie.originalTitle}</p>
          <p><strong className="text-white text-[18px] font-semibold ">Yil:</strong> {movie.year}</p>
          <p><strong className="text-white text-[18px] font-semibold ">Davlat:</strong> {movie?.productionCountries?.map(c => c.name).join(", ")}</p>
          <p><strong className="text-white text-[18px] font-semibold ">Janrlar:</strong> {movie?.genres?.map(g => g.name)?.join(", ")}</p>
          <p><strong className="text-white text-[18px] font-semibold ">IMDb reyting:</strong> {movie.imdbRating}</p>
          <p className="mt-4">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
