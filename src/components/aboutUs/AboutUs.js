import React from "react";
import "./AboutUs.scss";
import konteynir from "../../assets/konteynir.jpg";
import ucgen from "../../assets/ucgen.jpg";
import "animate.css/animate.min.css";
import smile from "../../assets/smile.png";
import forest from "../../assets/forest.png";
import medal from "../../assets/medal.png";
import arge from "../../assets/arge.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutUs = () => {
  return (
    <div id="about-us">
      <div id="about-cont">
        <div id="about-title">Kalite Tesadüf Degildir.</div>
        {/* <div id="about-exp">
          GUN TEKSTİL'in ayrıcalıkları nelerdir ? Projelerinizin her adımında
          gereken hassasiyeti gösterip, ihtiyaçları karşılamak ve müşteri
          memnuniyetini sağlamak için yenilikçi kumaş çözümleri, en uygun
          fiyatlandırma çalışmaları, etkin kontrol mekanizması ve deneyimli
          personelimizle, hızlı bir servis sağlamaktayız. Biz yüksek kaliteli
          kumaşlar ve rekabetçi fiyatları ile işinizi büyütmenize yardımcı
          oluyoruz. Kuruluşunuz için olumlu deneyimler ve verimlilik yaratmak
          için temel olarak doğru üreticiye yatırım yapıyorsunuz.
        </div> */}
        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className="arge-item">
            <img src={arge} alt="arge" className="arge-img"></img>
            <div className="arge-p">
              AR-GE Ar-Ge ofisimizde farklı iplikler, dokuma teknikleri ve apre
              çeşitleri ile müşteri talepleri ve trendler doğrultusunda
              yenilikçi çözümler sunulmaktadır.
            </div>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className="arge-item">
            <div className="arge-p">
              AR-GE Ar-Ge ofisimizde farklı iplikler, dokuma teknikleri ve apre
              çeşitleri ile müşteri talepleri ve trendler doğrultusunda
              yenilikçi çözümler sunulmaktadır.
            </div>
            <img src={ucgen} alt="arge" className="arge-img"></img>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className="arge-item">
            <img src={konteynir} alt="arge" className="arge-img"></img>
            <div className="arge-p">
              AR-GE Ar-Ge ofisimizde farklı iplikler, dokuma teknikleri ve apre
              çeşitleri ile müşteri talepleri ve trendler doğrultusunda
              yenilikçi çözümler sunulmaktadır.
            </div>
          </div>
        </AnimationOnScroll>
        <div id="export">
          <div style={{ fontSize: "5em", fontWeight: "bold" }}>
            export areas
          </div>
          <div>
            Our company has been supply the woven fabrics to mainly European
            Countries for Apparel industry. We are increasing to export areas at
            each year in Global and Domestic market with increasing the
            production capacity with sales and marketing activities.
          </div>
          <div id="prog-bar">
            <div id="prog-item-one">Avrupa</div>
            <div id="prog-item-two">Asya</div>
            <div id="prog-item-three">USA</div>
          </div>
        </div>
        <div id="quality">
          <div className="qua-items">
            <div id="icons">
              <img src={medal} alt="forest"></img>{" "}
            </div>
            <strong style={{fontWeight:'bolder' , fontSize:'1.3em' , marginBottom:'1em'}}>YÜKSEK KALİTE</strong>
            <div style={{ width: "80%" }}>
              Dünya standartlarında iplik üretimi için kaliteden ödün
              vermiyoruz.
            </div>
          </div>
          <div className="qua-items">
            <div id="icons">
              <img src={smile} alt="forest"></img>{" "}
            </div>
            <strong style={{fontWeight:'bolder' , fontSize:'1.3em' , marginBottom:'1em'}}>MÜŞTERİ MEMNUNİYETİ</strong>
            <div style={{ width: "80%" }}>
              İş süreçlerimizin tümünde %100 müşteri memnuniyetini hedefliyoruz.
            </div>
          </div>
          <div className="qua-items">
            <div id="icons">
              <img src={forest} alt="forest"></img>{" "}
            </div>
            <strong style={{fontWeight:'bolder' , fontSize:'1.3em' , marginBottom:'1em'}}>ÇEVRE DOSTU ÜRETİM</strong>
            <div style={{ width: "80%" }}>
              Geri Kazanılmış ham maddeleri yeniden kullanarak çevreye dost bir
              üretim politikası sürdürüyoruz.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
