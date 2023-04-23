import React from "react";
import "./ProdTwo.scss";
import dref from "../../../assets/drefip.jpg";
import open from "../../../assets/openip.jpg";
import mob from "../../../assets/mopip.jpg";
const ProdTwo = () => {
  return (
    <div id="prod-cont">
      <div id="prod-cont-two">
        <div
          id='prod-cont-two-title'
        >
          İstenilen her renk ve kalitede üretim…
        </div>
        <div style={{fontSize:'1.2em' , marginBottom:'2em'}}>
          {" "}
          Seri üretimini yaptığımız ürünlerin yanı sıra istediğiniz renk ve
          kalitede ürünler de üretiyoruz.
        </div>
      </div>
      <div id="prod-cont-three">
        <img src={dref} alt="dref" id="dref-img" ></img>

        <table className="tables" >
          <tr>
            <th>PAMUKLU İP İÇERİK</th>
          </tr>
          <tr>
            <td>Ne</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>Nm</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>Büküm</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>Pamuk</td>
            <td>%55 - %85</td>
          </tr>
          <tr>
            <td>Polyester</td>
            <td>%15 - %45</td>
          </tr>
          <tr>
            <th>YÜN İP İÇERİK</th>
          </tr>
          <tr>
            <td>Ne</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>Nm</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>Büküm</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>Pamuk</td>
            <td>%20 - %30</td>
          </tr>
          <tr>
            <td>Polyester</td>
            <td>%70 - %80</td>
          </tr>
        </table>
      </div>
      <div id="prod-cont-three">
        <img src={open} alt="dref"  id="dref-img"></img>

        <table className="tables">
          <tr>
            <th>PAMUKLU İP İÇERİK</th>
          </tr>
          <tr>
            <td>Ne</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>Nm</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>Büküm</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>Pamuk</td>
            <td>%55 - %85</td>
          </tr>
          <tr>
            <td>Polyester</td>
            <td>%15 - %45</td>
          </tr>
          <tr>
            <th>YÜN İP İÇERİK</th>
          </tr>
          <tr>
            <td>Ne</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>Nm</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>Büküm</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>Pamuk</td>
            <td>%20 - %30</td>
          </tr>
          <tr>
            <td>Polyester</td>
            <td>%70 - %80</td>
          </tr>
        </table>
      </div>
      <div id="prod-cont-three">
        <img src={mob} alt="dref"  id="dref-img" ></img>

        <table className="tables">
          <tr>
            <th>PAMUKLU İP İÇERİK</th>
          </tr>
          <tr>
            <td>Ne</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>Nm</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>Büküm</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>Pamuk</td>
            <td>%55 - %85</td>
          </tr>
          <tr>
            <td>Polyester</td>
            <td>%15 - %45</td>
          </tr>
          <tr>
            <th>YÜN İP İÇERİK</th>
          </tr>
          <tr>
            <td>Ne</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>Nm</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>Büküm</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>Pamuk</td>
            <td>%20 - %30</td>
          </tr>
          <tr>
            <td>Polyester</td>
            <td>%70 - %80</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProdTwo;
