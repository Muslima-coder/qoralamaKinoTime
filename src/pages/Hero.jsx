import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from "react";
import { CopyIcon, FacebookIcon, ImdbIcon, LogoKIcon, LogoTvIcon, ShareIcon, TelegramIcon } from "../assets/icons";
import { Link } from 'react-router-dom';

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    fetch("https://kinotime.world/api/banners?lang=uz")
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, []);

  if (!movies || movies.length === 0) {
    return <p>Hech qanday film topilmadi.</p>;
  }

  //Swiper fn si
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} custom-bullet" >${index + 1}</span>`;
    },
  };


  return (
    <Swiper autoplay={{ delay: 5000, disableOnInteraction: false }} loop={true} pagination={pagination} cssMode mousewheel modules={[Pagination, Autoplay]} className="mySwiper"  >
      {movies.map(item => {
        const movie = item.movie;
        return (
          <SwiperSlide key={movie.id}>
            <div className="relative w-full min-h-[100vh] flex flex-col justify-center text-white overflow-hidden">
              <div className="absolute hero-bg inset-0 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url('https://kinotime.world${movie.backdrop}')` }} >
              </div>

              <div className="relative p-0 text-center sm:text-start sm:mx-0 mx-auto  z-10 w-[400px] sm:pl-[50px] sm:pt-25 pb-5">
                <h2 className="sm:text-[35px] text-[24px] font-bold text-center sm:text-start w-auto sm:w-[500px] mb-[40px]">
                  {movie.title}
                </h2>

                <div className="sm:flex hidden items-center gap-[10px] mb-[18px]">
                  <div className="flex items-center gap-[5px]">
                    <ImdbIcon />
                    <p className="font-bold text-[18px]">
                      - - {movie.imdbRating.toFixed(1)}
                    </p>
                  </div>
                  <LogoKIcon />
                  <LogoTvIcon />
                </div>

                <p className="font-semibold text-center sm:text-start w-full line-clamp-1 text-[16px]">
                  {movie.genres.map(g => g.name).join(", ")}
                </p>

                <div className="relative sm:static mt-[30px] sm:justify-start justify-center flex items-center gap-[15px]">

                  <Link to={`/singleMovie/${item.id}`} className="w-[151px] h-[50px] flex items-center justify-center font-medium text-[18px] cursor-pointer text-white bg-[rgb(82,176,56)] rounded-lg text-center ">
                    Ko'rish
                  </Link>

                  <div className="sm:relative static">
                    <button onClick={() => setMenu(prev => !prev)} className="text-white w-[50px] h-[49px] rounded-lg flex items-center justify-center bg-[#849dab42]  hover:bg-[#3748086b5] duration-300 cursor-pointer">
                      <ShareIcon />
                    </button>


                    {menu && (
                      <div className="absolute mx-auto right-0 left-0 top-0 mt-13 sm:mt-10 mb-10 w-[214px] rounded-md bg-[rgb(29,31,30)] backdrop-blur-[5px] z-50 overflow-hidden">
                        <a
                          className="flex items-center gap-[15px] text-[16px] p-3 duration-300 hover:bg-[rgb(52,54,53)] rounded-tl-md rounded-tr-md"
                          href="#">
                          <TelegramIcon />
                          Telegram
                        </a>

                        <a
                          className="flex items-center gap-[15px] text-[16px] p-3 duration-300 hover:bg-[rgb(52,54,53)]"
                          href="#">
                          <FacebookIcon />
                          Facebook
                        </a>

                        <a
                          className="flex items-center gap-[15px] text-[16px] p-3 duration-300 hover:bg-[rgb(52,54,53)] rounded-bl-md rounded-br-md"
                          href="#"
                        >
                          <CopyIcon />
                          Havolani nusxalash
                        </a>

                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Hero;




