import React, { useState, useEffect } from 'react';
import './style.css';
import logo from '../assets/LOGO.jpg';
import fish from '../assets/fish.png';
import { Link,Navigate,useNavigate } from "react-router-dom";
import coral from '../assets/Coral.png';
import whale from '../assets/whale.png';
import scuba from '../assets/scuba.png';
import sub from '../assets/submarine.png';
import card from '../assets/design1.png';
import Chat from '../components/chat/chat.jsx';
import {FaComment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

function Home() {
    const images = [
        'data:image/jpeg;base64,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',
        'data:image/jpeg;base64,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',
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMWFhUWFRgWFRUXFxcXFRUXFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADwQAAEDAgMFBgUDBAEDBQAAAAEAAhEDIQQxQRJRYXGRBROBobHBIkJS0fAUMuEVYnLxIzOS0hZTgqKy/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACAwQF/8QAIBEBAAMBAAICAwEAAAAAAAAAAAECERIhMQMTQVFhgf/aAAwDAQACEQMRAD8A88KSZpUlNNiYYxex4UMoozaSuxiK1igG2miBiK1iIGJATaasKaMKauKaCAKasGI4pq4YnVhcMUhiZDFPdq1YX7tdsJnu13dq1F9hdspnu1HdqRbYXbCY7pcaSEWLEM000aaqaalpQsQnMTrmIJYogGmoTPdrlBlU6aZZTU02jcmGMWdbxVlNGbTV2MR2U1aMBFNXDEwGK4pq6PJcMVwxHFNXFNWrAAxWDEcU1YMVqwuGKwYj7CtsK1YX2FOwj7CnYVqwDYXbCPsLthWrC+wo2ExsKNhWosWKhYm9hVLFaCbmITqaeLFRzE6sIOC5MvYuVoxm9mV6JtUkbjxThoxqDIkEXBXnqLFrdmuOWi4xGTuvTOTHo+1iM1q5jUZrVrWMVa1EDURlInIZK7WcEdHAw1XDEWd8KpqtmPRHR5/SAxW2FSvXAMNh3G66niTqB4TKujxIoYp2FBq7gtXCYMOadqJ0Pos2+WK+zX4pt6Zewp2E53Kg0wnuB9clQxcWJruuSh1JXY4KFigsTJpqNhPQ5KliqWJssVTTT0OSZYhuYnXMVS20K6HLPexQmXsXJ6XLxlJaOCIm7oHrwWZSKYY9GOuvRtIiRlxQf1B3rNp1zEaIrHKxHm4h0zKKzFP3+6RDkRtRGNaZdVJzurU3cEJhV5WZaMhw3I1JglKMcjMKzMS1B8UxofJNUalQa9YS2Fdb+fRO4cF1gvPaf27Vh0HUIjKAOhTOHAINrjTgqOxANgsd2/B4r+VRhRvQ+6AzTzKcMdySZldKWm35cr1iJ8QE+mFXYRSFELq5hFk6KrqaMQqEJgSA6mhupplwQ3BLPgq6kuRHtXKXh84ovbvRwVmMBCcpuXq5cejrXI7HpSkiNdCOT0ea5c6uBvS7HIohXJ6N0as3COHpKnZEbUWZqYudYiApNtZFbWWZq3FoP0ai0cBUIcDKxadVaODrAGVw+Svh3+O3l6Us+IOCV2QXGMpVn4n/AI5by5SgYevxXjrWceiZjT1YhjcrmySpAgiEWvWa4C8xnG5A2i02uDlyW6x4Zn2ZxDII4i+5C2VWpictoi2ikVAcl1ruOFojVahAElCp1gZR3Cc0KrQa4QQt6xgZqtkCRJyE571JYsvtLs0j46cyDMe6g9rv2Wktgz8Ui3gt5vpnf20XsXKtKttCYhSuey1zD5HSqFN03TwQKDQmWg8F9DXjwegCmS1AokytGlh3EE2yWZtntuKzPou0IrSj4Sm0m4RMbhNg2/abg+yO43D9c89AhyglSArBq0woHIjaiqQpLFHB2PTdOukARvRBVCzNdai+N3D4kxE2Kk1Fk0Ku5X72NVx+ry7fb4aDcQWm3JWZjnDVZ5rSoL0/XH5X2T+DHamNcbiwgZe6r2d2q7aG0bHQKKjJZc2WS47Lvhut0rWYzHP5LTE69t3qg1gvL4XtV4f8RMZRp0WsKt7X3hcL059utJ79HamLYMyErWr03Zxbelu0aQaAcp8lkYiqRldNKRaNgXma+Jb9HEUwLOC5eabiN65an4hHyPKUAZhPuYW3IhKYd4nMJ44mQAV12dYiIwXAuk2W05hbT2jnu4LGoPAyThxRcIdcLF4mZdKTFYTSxMZBMY7GbQAGSTqxAgAR5qKtQEcQtRWNiWZvOTGiNqIjXJIORJIXXHHTcK9kGhDrTyTrsC65BEDjuWJtEe24rMxsFDTUCRoj1KccVamVrpnkM1DFgqhztQmQVc1BEEI6XJbaKIKpGauGDeqAXVp5xSrWLhCoxkXKcxOB+EEePBJ7IyzVW0THhWpMT5EzOQWsMT3ezaSQspjIyQK+LfInSwWLV78N1tx5bHbNcFoIEnnlvXne9IJvZUxGIeUm9zlv4/j5jHP5fk7tp5tdSs0OcuWprDEWklRwxiddyqS4GFu0nBEruBGh6SuEfJ5d5p4YdPEFO08SCIKboYdvjxATAwwtdvRbm8MxWWcH71xctxlgAWn/ACiyYLZEI+3Pwfr15sPT9HZIAdfyTgwIzIaVRvZ9LUkcjbzC1PyRIikwXqNAu1NN7T+HZP8AtWHZTCbOdHgq1OzA3UkI6rPs5ePQb8bOiluJCN/TaZuCeKo/s9oycfFMWqJrdzcQFWpWGi5mB4lTUwY4+Kdroy2B99xRKZlDq4MjVQzDu3hOxiiJ3ycOJLbHVRtAjNKvpPOZCju3jcs5DXkw1TWY0jJJv2+CkCojP6d/GJNNoXF4GgQK1J34VDSdQln/AAQvHDouQXmNFysWs6jVhNsqcFkU8Wzf5H7JhmLZv8j9lnD002vRxVnMLNZi2b/Io7MWz6vVWDf60mVbZngriu7es9uLZ9QRBi6f1Dqrk9f08a5Utq8Eo3FU/qHVEbiWfUOoVn8W/wBOCsiPxBKTGIZ9TeoV212fUOoVydn9jB6naVG1m7x1CsKjd48lH/VtsqNtW75u8eSgvbwQc/qm0qokjgosrViWvGoCqdmeCmy6VlsN7NyHsHcjyF20rZGQXLTqEKpTjQppzlVzldSsgk4TouR3kLldSuYeKp4c7yjsonj5ILHnWU1R8V1eVdtAojMO78Ksxu9x8gigf3nq2E6ECid3mFdtF27zCKx2m36K/eb3AeICtWBBvDzVnA/T0TFJ4PzDLeD7ogfl9pJVqwo1p+lXbSdP7fRM99ub+boUiuSRY8t6tOBhjhp6K+yd09EZtZ30dZRm13nJgHGCfQImWogDu+HoqFhn9qbG2dBe9r+hVK9OoDnE77RylHRmAHN/tPOAo2OCOW1AM+l/C0oUP1OkiASOsWTEiYDdS4eSoGcPJGcX78t8Qqbb7yY6eadYUcwbiuNNEO2d/gFQ1Hfn+koLZPFVdTPHzRHVHb/DdKr8USfzyUgHtdvPUrlYl1/w+S5C1h0Wb49/RNU6SSpmNY8U1SM/N4WWWzbaegRRRtl5/wAIAdF5PX0Rg86x+cIsrVi4oNNomOflIRGYVptHUIcu+UjxVHl5+ExHIdblKw0MK38A+y5tETGwOBhpnjmhUKxyINtZbfgACiVMTHpa5HgAoZBllCMoHD+AiClvA8b9NyVFQiIceRgeyYFUi9z4X8hkhqIg6wTr0gQrtYZzM7gSJ+6TZiSDMtAOhF/AyL+BTbKkiRO8Tcclzl0iIHLnxZpvnLrjiIVGh5P/AE2zkPfMKO8dvg20bPnKKKhi5ngdeghZaxZ7X/2+Y8pQXtfOQ4kH1lS6oTcDZMkEQJjmM1DLjM2vJBb6JiRMQ4sdkPIkHqEMCpOnUn3urvBmQ789VQOvcR0g+ea3EucwhzXbhz2VGw4fn5Cs6RkBfO8LhtZlw5CTCtHJWpTdmZ6adboXcHP29DonnPLh+D2S7i7+DPlknRNQHNIykeE+qlWc92RiNLqFasfOGdqmP2HxJTFLtturb8D6rJ/UDRpk6gAe64VDrteI+zlJtN7ZJuKe1FrEQPEqv9YdtftA4Ekk+YWIcS4ZExy+5Kap4s5kCeMnp8SWdegHa7dab4I0J05JqjjmOE7Do1mxniCPVeYGNcZkDdABEDgCVDKrh8oM/m6ylr1f61mcHWxLR/KqcdAB7sxoZ6ZH2Xmf1BAyI4kEjqLolLHOaYIBn6SW+phK16M9qNiNm+gv56qo7ZDYDo8NoHksQVGOPxDKL7UnwtkpZTpgwNqTOpPqIClsvR0e3GG2xN7CTM8bQm/6iZ+GlzPeZc9lp+68xiHMgAl082ugjcbkc1dlOn+6Xh2sQD4nVGQ1FpekPaUn4mCYyLibbha38qKXakAw14yi3w33S2fNYXefCRtukZzTnzGaC2oQB/yNaDcHZNzuMD1RyepejZ2s4ZbZGskiDuBIKZp9sC07Y3gNMdS0LB71+XwEn+3ZG68mEpQxMO+JonKM2kzq2RbxTkDqXoqnbhnMxFgHU9o+B+6Yods0yJc60TJ2JG8GBZYVO8lrQNbAgTyCJhmEkuBgkXh15v8AUPdOQOpbf9fogXqtymBB/wDqJKW/9SsMwBO4587j3SFenUi0DhDZPiRASdbBVY2g0Z5k/wAgI5hdS16vbeg2S7OJP34q47RsC487xHCDMrHw/eiQfEyD4EaotIvn4qcjeAJMcWwnIWy0T2u0nLTKQPOFyzH7D86TpByhzY6/dSjIWy8AS8Gdl3gJ8dVR79rQk6z9tFUOd9bvNRBOrj4lc28GpVCzO35zRDiWm9gd+z63Sw2t58T91Yh3DoE6zhtoBye0c9oexTVNr4s6eDXsM9SFktad6u1g48gmBMHX0n/Sf+77Krg4DMgbrnzQadP/AC5W+6Z7l0bQb5EHySMAZULcnOngc0zRxDsw6+odrG4oILtWyFQsGeyY0ukGKmNd9HPd0V/1gP7mgTNwfYpZhM22gm6O0DaDvmPVSMUK9iQXRlYkH19Dor0sQ1ubnExF3HLdOvVBh4E7JI4G3UKzaLcyCGnSfiBjIiEo6cayxG2Y5emqXOO2jbbHAhvjEj1UsNPQ7PEtk+iC9hm3xCNQPKSoj05MxVc2TfR3DIWTo78NtXDvGTxmZKyf1Em4NpE7IF90qGVXVAQWZfMWnLzAUm5+uJHxOZI3OG0Y4OXDGuObZGUOgeQnzKxMM/Z3gcyPIqj6tMu+IOB0iZ53lSeifjQcmOBykRHlKC/HSf3QBmPib62WTU7QEEAun+4h3iALhS2uYG08EHhHsL8yhNMY5v0bW/L2lcstuFb+5oPOB6tJUKLHaT/7YTLGNsdjjnbiqHYBz6W6QrtcImC4cf8Aaw2I59OMwL5RoqNdTPwgTOVwP9IzIGbItoAJUNduY0dJHhKRgZw4ZnSfnEm46g5K7X0x8hRZeTmI3nTwurto6y3nN+mypYCabTmIHEyR4KXYRttkkjdeAeSebVjQnUGLeqP+tEZX8D1lKZjKDmmRbkD6JjDUg4w5r/8AINgeidPabG5ajOAVzca1zrNneI84hIwI4LZPw0qtTjbzEIdas1rYcx7JzlkRxmL8ls/qrWZNvpFlQY3P4bf4+wKtk5DANWns/DUaOY16ID67Tbbk74z/ADkt040T+2jPFt0OpjGbX/Tp8fhANs4RsrmGEKvKOIiUTuDqBMTZpPK61q+LpfK0NMydPddR7QAkENjfHoVauQuzO7aJebj6hlyCfoYumbNIM6xAJS+Ix9EgAyL6WHWUpSrt27uOxw+IzpIAyWoszNWs6lTMbTAeJj8lZ1fAtzDJ3gOJITLarbbEu0tsyPArjQa7Jz50BA9kzMLJZ9SgPofzzMaTKh7DoCOO0ZNvpcrVcS5pc0ggtnOD5hwPglmYhzmkxI3ho9pWdg8yuylBs5zRvsPEjNSgUcU02LgfCD6LkHCJrj6B/wB0+qIMSDoeQiOiq2m43AAPj9lZmEqzm1Y8t+Fqb256+26yJUqsiNkgbxf8ChuCefmXNpubm4ctT0SEYbEOJhoJPEbuOSaZVNrx4jpGhVf1loBB1mCiU+0HW/b4AT5JCzMS4Zg7vlhMlxIsDHANB6oP6wkjP084RadZtyc9IN0hIxez8sm0ggHxkZJ7D4oOzDhzAjrMpT9a+LNbwm/WAl/6hU2rtAHA/Y2VqxvtrbIyHhN+YCA/HttDCTwBCy29pVtDI6+f8qrsRVMnYvzE9ZRpPvqMP76ZzzMEdARKvTp0nSS1sbrj1JWezFv+cNy3guHQQiGoHCCy2hB9svNSEYKAJ2WNOhlw6ZD1VKlWjl3ZF8wf5Q20Wv1c0j6mgt8IKL+gi3et5bOnC6kh9Sm2dkAc/umMM9kSWz7big1ezo+eG8Ql6+GM/C9vOYPSQlNpz7EimON2+qA/u7bTQDoYJ8xqsdzHNJHemNAHNm+cgmE3Rw7jm53iZnzhGI/iKLCJLRbUhLUgG2ZsDy8pRKLZtsm1yTB8gpNFh+S3KPZWLS9WqW3lg5NklcpfhKYsGAcbGeq5GLXnGNOU6a/ZN0SBcuE+CzwTOcp2hRaUE217BqOqFXY1+oJV/wCnt3+ZVXYFo3dPunFpF1Go3IA8bqzKtT6fRNtoDf4CR7olPCj6jG7NWDStAVTkG8rJ1mDe4xIBOiK2iRkQOdvRULagP7m85PpHukJfgo3dSh1KDGDacxwHBwvxnROOggAulw1kD3XOcBbPeM/JRZVXEt+SRvl09Fxqk/CDB/MyVr4djCZFNg47IRcTSbm4ggb25eUQjyfDIY52/LomRXqATAjkR7otcuHxMbSJtkLrKx76k/8AI2Ocx6QnYWSddi5bcwZ0yP8AKEKe0ZnrPpKUqV3NEwbZkG3UIT8abTfW8H2VoxqN2mizxM/t2AmKT3v0dPJrR4mFjUsUb3t4JzD17mdnxJ/AqFJ19MizjDs52WkxzhM0WRBL7bwPWSst+ILTYtHLTxhSzFNcRN98lOpqYh9ObOII45+CiniwDAcDvvKwu0MYwukTGhEjyKGK4cQJnyujo8tzE9oWyPr5LlkO2h8zeUz4rkasZbKrm8U1Tex28FJUcWQI0RW4ls/tCIMweabZ2TFFg0cetln0sWTYCwud8I7O0hbMdITrOHdo6XV5fpASP9UG48bel7KaNYn5X+GSUYqUnnM9FNPBnjvQ2vqDLpkfVXdin5xyUBmU4GU7vyy7afoweiQq9p1Abx0QavaruA8vVGnG22s7VoG4TdRXA+Yu4xB6WsvOu7Qd9UeZV6OMquyJPgPZU21qIa1ZrCJaKoj5oHpml6oqxbacDoCW+SNRFWPiH/5HqjNqP1b6exWSTpYVz86RB/zv5p1vZjY+IZf/ACPVED3nIDhIH/kudTqu1byyR5PhU4UWAiBpBVa/ZzCIjpI91PdOGWzbeUSm6/xeUrTJGv2QwXlw8Uozs0Tv4mVubTAbgKlQMzjxBVi0vTwW0IIB9UpX7KaDYwef3R6r2jf1mEIVZyM+nVODSTsGWnM+vouT9Qg2y5ELkHWWGDd+XVTTAOWgXLkVVgXOINrKWOJPgfQrlyCbDb/m4pmhrwP2XLkwJCxldzHANJAJyzHQ5LQoHaZJuuXJgIr0xtNEC8JLFYdodYaBcuRPtqPQlOk0CQBl7FOD9s8fyy5ciTAmEFynWvKhcusOdlcS4+qHh6YdE38SuXLFmqlsZTETG5VLBsTeeZ9Fy5MCQfzci4MbUzf1y3rlykhjibHKfZJYkS6/FQuWZIoaIXLlyU//2Q=='
    ]

    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
      setIsChatOpen(prevState => !prevState);
   };
    const headings = [
        'Coral reefs conservation',
        'Marine biodiveristy',
        'Saving Our Oceans'
    ]

    const paragraph = [
        'They are a vital part of our ecosystem but they are threatened by climate change,pollution and various other reasons.Protecting these are necessary for maintaining biodiversity and even essential for our survival',
        'Oceans play a vital role in regulating temperature of Earth by absorbing carbon-di-oxide and heat.This natural process helps mitigate climate change impacts. Understanding and protecting this function is crucial for maintaining global climate stability.',
        'Our oceans cover over 70% of the Earth’s surface and are essential for regulating climate and supporting diverse ecosystems. However, they face threats from pollution, overfishing, and climate change. By reducing plastic use and supporting sustainable practices, we can help protect these vital resources. Together, we can ensure our oceans remain healthy for future generations.'
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollFraction = Math.min(scrollTop / maxScroll, 1);

            const startColor = [38, 174, 232]; 
            const endColor = [10, 25, 74]; 

            const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollFraction);
            const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollFraction);
            const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollFraction);

            document.querySelector('.background').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        };

        document.addEventListener('scroll', handleScroll);
        
        return () => {
            document.removeEventListener('scroll', handleScroll); 
        };
    }, []);

    useEffect(() => {
        const handleFooterScroll = () => {
            const footer = document.querySelector('footer');
            const footerPosition = footer.getBoundingClientRect();
            if (footerPosition.top < window.innerHeight) {
                document.querySelector('.whale').style.display = 'block';
            } else {
                document.querySelector('.whale').style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleFooterScroll);

        return () => {
            window.removeEventListener('scroll', handleFooterScroll); 
        };
    }, []);
    const navigate = useNavigate();
    const handleOnclick1 = (e) => {
           navigate('/login')
        }
    const handleOnclick2 = (e) => {
            navigate('/roleplay')
         }
    const handleOnclick3 = (e) => {
            navigate('/weather')
         }
    return (
        <div className='background'>
            <div className="topbar">
                <img className="logo-icon" src={logo} alt="Logo" />
                <h2 className="logo">Jala Jeevana Kirthi</h2>
                <button className="topbar-button">Game</button>
                <button className="topbar-button" onClick={handleOnclick3}>Weather</button>
                <button className="topbar-button">Blogs</button>
                <button className="topbar-button" onClick={handleOnclick2}>RolePlay</button>
                <button className="topbar-button">Forums</button>
                <button className="topbar-button"  onClick={handleOnclick1}>Login</button>
            </div>
            <div className="spacer"></div>
            <div className='waves'></div>
            <div className="image-holder-whole">
            <button className="nav-button" onClick={handleLeftClick}>&lt;</button>
            <div 
        className="image-holder" 
        style={{ 
            backgroundImage: `url(${images[currentIndex]})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        }}
    >
        <div className="text">
            <h1>{headings[currentIndex]}</h1>
            <p>{paragraph[currentIndex]}</p>
        </div>
    </div>
    <button className="nav-button" onClick={handleRightClick}>&gt;</button>
</div>

            <div className="spacer">

            </div>
            <div className='fishes'>
                <img className="fish-icon" src={fish} alt="Fish" />
                <img className="fish-icon" src={fish} alt="Fish" />
            </div>
            <div className="about-section">
                <h2>About Us</h2>
                <p>At Jala Jeevana Kirthi, we believe that every individual has the power to make a significant impact on our planet. Our mission is to inspire and empower people to reduce ocean pollution through engaging and immersive role-playing experiences.

How We Work:

By placing users in a variety of real-life scenarios, we aim to foster a deeper understanding of the consequences of human actions on our oceans. Our interactive platform allows users to take on different roles, exploring the potential outcomes of their choices. Through these immersive experiences, we hope to cultivate a sense of responsibility and inspire positive change.

Our Motto: "Small Actions, Big Impact."

We believe that even the smallest actions can have a profound effect on our environment. Our motto, "Small Actions, Big Impact," reflects our commitment to empowering individuals to make a difference. By making informed choices and taking steps to reduce their environmental footprint, users can contribute to a healthier and more sustainable future for our oceans.</p>
            </div>
            <div className='scuba'>
                <img className='scuba-icon' src={scuba} alt="ScubaDivers" />
            </div>
            <div className='sub'>
                <img className='sub-icon' src={sub} alt="Submarine" />
            </div>
            <div className="icons-section">
                <div className="icon-box">
                    <h2>Chat with AI</h2>
                    <p><br></br>We use the power of AI to make your experience better explore our chatbot and roleplay features to dive into the world of marine life and learn the lifecyle of marine life and also the consequences of actions on it. Ask and learn more about the sea from our Chatbot</p>
                    </div>
                <div className='spacer3'></div>
                <div className="icon-box">
                    <h2>Learn While Playing</h2>
                    <p><br></br>Try our fun game to learn more about the fishes and thier orgins, also you can check the market price of some species if you planning to go on a hunt. You can also explore and find out which species of fish and endangering.</p>
                    </div>
                <div className='spacer3'></div>
                <div className="icon-box">
                    <h2>Contribute to Community</h2>
                    <p>Also please read the blogs written by other marine enthuaists and participate in forums. Share valuable information to help the marine industry by writing blogging or uploapding datasets or files, research papers or your findings.</p>
                </div>
            </div>
            <div className='chat'>
                <button className="chatbot" onClick={toggleChat}>
                ChatBot
                </button>
                {isChatOpen && <Chat toggleChat={toggleChat} />}
            </div>
            <div className='whale'>
                <img className="whale-icon" src={whale} alt="Whale" />
            </div>
            <div className='spacer2' />
            <div className='spacer' />
            <footer className="footer-section">
                <h3>Meet the Developers!!</h3>
                <div className='profiles'>
                <img className='flogo' src={logo}/>
                <div className='spacer2' />
                <div className='creator1'>
                
                </div>
                <div className='spacer2'></div>
                <div className='creator2'>
                
                </div>
                <div className='spacer2'></div>
                <div className='creator3'>
                
                </div>
                <div className='spacer2'></div>
                <div className='creator4'>
                
                </div>
                <div className='spacer2'></div>
                <div className='creator5'>
                
                </div>
                <div className='spacer2'></div>
                <div className='creator6'>
                
                </div>
                <div className='spacer2'></div>
                <div className="social-media-icons">
                    <a href = "#"></a>
                </div>
                <div className="social-media-icons">
    <a 
        href="#" 
        onClick={(e) => { 
            e.preventDefault(); 
            console.log('Facebook icon clicked'); 
        }} 
        aria-label="Facebook"
    >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a 
        href="#" 
        onClick={(e) => { 
            e.preventDefault(); 
            console.log('Instagram icon clicked'); 
        }} 
        aria-label="Instagram"
    >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a 
        href="#" 
        onClick={(e) => { 
            e.preventDefault(); 
            console.log('Twitter icon clicked'); 
        }} 
        aria-label="Twitter"
    >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
</div>
                </div>
                
      <p>@ 2024 Your Company. All rights reserved</p>
            </footer>
        </div>
    );
}

export default Home;
