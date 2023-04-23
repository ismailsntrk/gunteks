import React from "react";
import "./AboutChapOne.scss";
import yarn from "../../../assets/yarn.jpg";
const AboutChapOne = () => {
  return (
    <div id="chap-one">
       <img id="yarn" src={yarn} alt=""></img>
      <div id="yarn-p">
        <div id="abo-tit"
        >
          GUN TEKSTIL
        </div>
        <div id="abo-exp" >
          Şirketimiz 1989 yılında iplik üretim faaliyetine başlamıştır. İlk
          kurulumu Uşak merkezinde iken şirketimiz şu anda Uşak Organize Sanayi
          Bölgesi’nde üç ayrı fabrikada %100 ham pamuk, pamuk polyester ve
          rejenere elyaf ham maddeleri, akrilik, viskon, yün karışımlarından
          open-end, beyaz, renkli ve melanj iplik üretimi yapmaktadır. İplik
          sağladığımız sektörler: yuvarlak örgü, triko, gömlek imalatçıları,
          havlu, çorap ve farklı kumaş üreticilerine 8Ne-30Ne arasında iplikler.
          Müşterilerimizin özel karışımlı tekliflerine ve kalitelerine uygun
          özel üretimler yapmaktayız.
        </div>
      </div>
     
    </div>
  );
};

export default AboutChapOne;
