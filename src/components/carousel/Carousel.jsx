import { useState, useEffect } from "react";
import Slider from "react-slick";
import "./../carousel/Carousel.css";

const CarouselItems = (props) => {
  let [sales, setSales] = useState([]);
  const [counter, setCounter] = useState(0); 

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    fetch("https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products")
      .then((response) => response.json())
      .then((data) => setSales(data));
  }, []);

  return (
   
    <div className="container-sales">
      <p className="text-sales">Mais Vendidos</p>

      <Slider {...settings}>
        {sales.map((item, i) => {
          return (
            <div key={item.id}>
              <img className="img-product" src={item.img}></img>
              <p className="item-product">{item.product}</p>
              <p className="price">por R${item.price}</p>
              <button className="buy" onClick={() => setCounter(counter + 1)}>
                COMPRAR
              </button>
            </div>
          );
        })}
      </Slider>
    </div>
 
  );
};
export default CarouselItems;
