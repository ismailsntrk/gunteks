import React from "react";
import "./AboutChatTwo.scss";
import mission from "../../../assets/mission.jpg";
const AboutChapTwo = () => {
  return (
    <div
      id="chap-two"
      style={{
        backgroundImage: `url(${mission})`,
        filter: "sepia(40%)",
        backgroundPosition: "center",
      }}
    >
      <div id="vision">
        <div className="mission">
          <div id="vis-tit">Vizyonumuz</div>
          <div>
            <ul id="vis-p">
              <li>
                Müşterilerimiz ve üretim ortaklarımızla karşılıklı ve
                sürdürülebilir büyümeyi gerçekleştirmek.
              </li>
              <li>
                Sektörümüzde, uyguladığımız sosyal sorumluluk ilkeleri ile
                uluslar arası alanda belirleyici olmak.
              </li>
              <li>
                Son teknoloji ve süreç uygulamaları ile sektöre yeni hizmetler
                sunmak ve lider konumda olmak.
              </li>
              <li>
                Tedarik zinciri boyunca yer alan tüm süreçlerimizi bilişim
                teknolojileri ile entegre ederek müşterilerimizin artan üretim
                ihtiyaçlarına cevap vermek.
              </li>
              <li>
                Üretim süreçlerini kısaltmak için müşterilerimiz ile
                ilişkilerimizi sürekli hale getirmek.
              </li>
              <li>Süreç odaklı kalite yönetim sistemini uygulamak.</li>
            </ul>
          </div>
        </div>
        <div className="mission">
          <div id="mis-tit">Misyonumuz</div>
          <div>
            <ul id="mis-p">
              <li>
                Amacımız müşterilerimizin beklentilerine tamamiyle cevap
                verebilmek, firmamızın rekabet ve gelişim gücünü
                arttırabilmektir.
              </li>
              <li>
                Hizmette hedefimiz “İlk Seferde Doğru Yapmak” ve “Sıfır
                Hata”dır. İmal etmekte olduğumuz hizmetlerin zamanında, eksiksiz
                ve problemsiz olarak teslim edilmesi vazgeçilemez bir ilkedir.
              </li>
              <li>
                Ar/Ge ve Hizmet Geliştirme faaliyetlerindeki hedefimiz;
                bilgimizi ve üreticiliğimizi sürekli olarak geliştirerek,
                müşteri memnuniyeti ve rekabet için etkin hizmetler
                tasarlamaktır.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="policies">
        <div id="pol-tit" >
          Kalite Politikalarımız
        </div>
        <div>
          {" "}
          <ul id="pol-p">
            <li>
              Şirketimizin yetenek ve kapasitesi doğrultusunda, müşterilerimizin
              tüm hizmet beklentilerini dünya standartlarında karşılamak,
            </li>
            <li>
              Dinamik bir ekip çalışması ile hızlı, rekabetçi ve
              müşterilerimizin beklentilerini karşılayan hizmetler sunmak;
            </li>
            <li>Ülke ve bölge ekonomisine katkıda bulunmak,</li>
            <li>
              Mevcut ve yeni hizmetlerimiz ile faaliyet bölgelerimizin
              gelişiminde önemli roller alarak, sürekli girişimci olmak,
            </li>
            <li>
              Yenilikçi bir şirket olarak, geleceği şekillendirme arzusu ve
              insanlığa faydalı olan yenilikler üretme konusundaki
              kararlılığının arkasında durmak,
            </li>
            <li>İnsana odaklı çalışmayı temel almak,</li>
            <li>Tüm kalite planlarını müşteri memnuniyetine dayandırmak,</li>
            <li>
              Konusunda uzman personel kadrosu ile çalışmayı ilke edinmek,
            </li>
            <li>
              Yalnızca bulunduğu bölgede değil ülke ve hatta dünya çapında bir
              marka olmak…
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutChapTwo;
