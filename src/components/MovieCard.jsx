import { Icon2, Icon3, SearchIMDBIcon } from "../assets/icons";

export default function MovieCard({ title, poster, year, imdbRating, genre, country }) {
  return (
    <div>
    <div className="movie-card pt-[20px]">  
      <img src={`https://kinotime.world${poster}`} alt={title} className="w-[151px] h-[217px] movie-poster rounded-xl hover:rounded-xl"/>
       <div className="flex flex-col">
        <div className="movie-info absolute bottom-0 left-0 w-full h-[20%] text-[#fff] px-2 flex flex-col justify-center items-center opacity-0 transition-opacity">
       <div className="flex items-center gap-2">
      <p className="text-[15px] font-normal m-0">{year}</p>
      <p className="text-[15px] font-normal m-0 line-clamp-1">{genre} | {country}</p>
      </div>
        <div className="flex justify-between gap-[2px] items-center">
        <SearchIMDBIcon/>
        <p className="text-{#fff] text-[14px] pr-[10px] font-semibold text-center justify-center items-center">{imdbRating.toFixed(1)}</p>
        <div  className="flex justify-between gap-[2px] items-center" >
        <Icon2/>
        <p className="text-{#fff] pr-[10px] text-[12px]"></p>
        </div>
        <div  className="flex justify-between gap-[2px] items-center">
        <Icon3/>
        <p className="text-{#fff] pr-[10px] text-[12px]"></p>
        </div>
        </div>
        </div>
      </div>
    </div> 
    <h3 className="text-[18px] font-bold text-[#fff] pt-[10px] line-clamp-1 cursor-pointer">{title}</h3>
    <p className="text-[14px] text-[rgb(82,176,56)]  cursor-pointer">Obuna</p>
    </div>
  );
}
