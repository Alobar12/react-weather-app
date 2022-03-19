import { useEffect, useState } from "react";
import "./App.css";
import { Toast,ToastHeader,ToastBody, Container } from "reactstrap";

function App() {
  const [weather, setWeather] = useState("");
  const [value, setValue] = useState("Samsun");
 



  const handleChange = (e) => {
    setValue(e.target.value);
  };
  

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=2073cec6584608efbf63cf481c6e06c7`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      });
  }, [value]);
  if (!weather) {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden center">Loading...</span>
      </div>
    );
  }

  const string0 = weather.list[0]
  const string1 = weather.list[1]
  const string2 = weather.list[2]
  const string3 = weather.list[3]

  return (
    <div className="App">
      <div className="form">
        <select
          className="description"
          aria-label="Default select example"
          name="Sehir"
          value={value}
          onChange={handleChange}
        >
          <option value="İstanbul">İstanbul</option>
          <option value="Ankara">Ankara</option>
          <option value="İzmir">İzmir</option>
          <option value="Adana">Adana</option>
          <option value="Adıyaman">Adıyaman</option>
          <option value="Afyonkarahisar">Afyonkarahisar</option>
          <option value="Ağrı">Ağrı</option>
          <option value="Aksaray">Aksaray</option>
          <option value="Amasya">Amasya</option>
          <option value="Antalya">Antalya</option>
          <option value="Ardahan">Ardahan</option>
          <option value="Artvin">Artvin</option>
          <option value="Aydın">Aydın</option>
          <option value="Balıkesir">Balıkesir</option>
          <option value="Bartın">Bartın</option>
          <option value="Batman">Batman</option>
          <option value="Bayburt">Bayburt</option>
          <option value="Bilecik">Bilecik</option>
          <option value="Bingöl">Bingöl</option>
          <option value="Bitlis">Bitlis</option>
          <option value="Bolu">Bolu</option>
          <option value="Burdur">Burdur</option>
          <option value="Bursa">Bursa</option>
          <option value="Çanakkale">Çanakkale</option>
          <option value="Çankırı">Çankırı</option>
          <option value="Çorum">Çorum</option>
          <option value="Denizli">Denizli</option>
          <option value="Diyarbakır">Diyarbakır</option>
          <option value="Düzce">Düzce</option>
          <option value="Edirne">Edirne</option>
          <option value="Elazığ">Elazığ</option>
          <option value="Erzincan">Erzincan</option>
          <option value="Erzurum">Erzurum</option>
          <option value="Eskişehir">Eskişehir</option>
          <option value="Gaziantep">Gaziantep</option>
          <option value="Giresun">Giresun</option>
          <option value="Gümüşhane">Gümüşhane</option>
          <option value="Hakkâri">Hakkâri</option>
          <option value="Hatay">Hatay</option>
          <option value="Iğdır">Iğdır</option>
          <option value="Isparta">Isparta</option>
          <option value="Kahramanmaraş">Kahramanmaraş</option>
          <option value="Karabük">Karabük</option>
          <option value="Karaman">Karaman</option>
          <option value="Kars">Kars</option>
          <option value="Kastamonu">Kastamonu</option>
          <option value="Kayseri">Kayseri</option>
          <option value="Kırıkkale">Kırıkkale</option>
          <option value="Kırklareli">Kırklareli</option>
          <option value="Kırşehir">Kırşehir</option>
          <option value="Kilis">Kilis</option>
          <option value="Kocaeli">Kocaeli</option>
          <option value="Konya">Konya</option>
          <option value="Kütahya">Kütahya</option>
          <option value="Malatya">Malatya</option>
          <option value="Manisa">Manisa</option>
          <option value="Mardin">Mardin</option>
          <option value="Mersin">Mersin</option>
          <option value="Muğla">Muğla</option>
          <option value="Muş">Muş</option>
          <option value="Nevşehir">Nevşehir</option>
          <option value="Niğde">Niğde</option>
          <option value="Ordu">Ordu</option>
          <option value="Osmaniye">Osmaniye</option>
          <option value="Rize">Rize</option>
          <option value="Sakarya">Sakarya</option>
          <option value="Samsun">Samsun</option>
          <option value="Siirt">Siirt</option>
          <option value="Sinop">Sinop</option>
          <option value="Sivas">Sivas</option>
          <option value="Şırnak">Şırnak</option>
          <option value="Tekirdağ">Tekirdağ</option>
          <option value="Tokat">Tokat</option>
          <option value="Trabzon">Trabzon</option>
          <option value="Tunceli">Tunceli</option>
          <option value="Şanlıurfa">Şanlıurfa</option>
          <option value="Uşak">Uşak</option>
          <option value="Van">Van</option>
          <option value="Yalova">Yalova</option>
          <option value="Yozgat">Yozgat</option>
          <option value="Zonguldak">Zonguldak</option>
        </select>
      </div>
      <div className="text">
      <div style={{"fontSize":"50px","paddingBottom":"30px"}}>{value}</div>
        

        <div className="weat">
          <div className="box">
            <div  className="cit">Date/Hour
            <div className="date">{weather.list[0].dt_txt}</div>
            </div>
            <div className="middle">
            
            </div>
            <div className="img">
            <img  src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`} alt="weather"></img>
            <div >{weather.list[0].weather[0].main}</div>
            </div >
            
            
            <div className="temp" >{weather.list[0].main.temp_max.toFixed(0)}°C</div>
          </div>
        
        <hr></hr>
        <div className="box">
          <div className="cit">Date/Hour
          <div className="date">
            {string1.dt_txt}
          </div></div>
          
            <div className="img">
            <img  src={`http://openweathermap.org/img/wn/${string1.weather[0].icon}@2x.png`} alt="weather"></img>
            <div >{string1.weather[0].main}</div>
            </div >
            
           
            <div className="temp">{string1.main.temp_max.toFixed(0)}°C</div>
          </div>
          <hr></hr>
          <div className="box">
            <div  className="cit">Date/Hour
            <div className="date">{string2.dt_txt}</div>
            </div>
            <div className="middle">
            
            </div>
            <div className="img">
            <img className="img-color" src={`http://openweathermap.org/img/wn/${string2.weather[0].icon}@2x.png`} alt="weather"></img>
            <div >{string2.weather[0].main}</div>
            </div >
            
            
            <div className="temp" >{string2.main.temp_max.toFixed(0)}°C</div>
          </div>
          <hr></hr>
          <div className="box">
            <div  className="cit">Date/Hour
            <div className="date">{string3.dt_txt}</div>
            </div>
            <div className="middle">
            
            </div>
            <div className="img">
            <img  src={`http://openweathermap.org/img/wn/${string3.weather[0].icon}@2x.png`} alt="weather"></img>
            <div >{string3.weather[0].main}</div>
            </div >
            
            
            <div className="temp" >{string3.main.temp_max.toFixed(0)}°C</div>
          </div>
        </div>
        
        
        
        
        
        {/* <p>{weather.list[1].dt_txt}</p>
            <div className={`${string1}`}></div>
            <p>Min({weather.list[1].main.temp_min}°C)-Max({weather.list[0].main.temp_max})</p>
            <p>{weather.list[1].weather[0].main}</p>
            <hr></hr>
            <p>{weather.list[2].dt_txt}</p>
            <div className={`${string2}`}></div>
            <p>Min({weather.list[2].main.temp_min}°C)-Max({weather.list[0].main.temp_max})</p>
            <p>{weather.list[2].weather[0].main}</p>
            <hr></hr>
            <p>{date.format(now,weather.list[3].dt_txt)}</p>
            <div className={`${string3}`}></div>
            <p>Min({weather.list[3].main.temp_min}°C)-Max({weather.list[0].main.temp_max})</p>
            <p>{weather.list[3].weather[0].main}</p>
 */}
      </div>
    </div>
  );
}

export default App;
