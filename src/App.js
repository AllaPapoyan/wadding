
import './App.css';
import Header from './Header';
import Section from './Section';
import Section2 from './Section2';
import {FaCalendarCheck} from "react-icons/fa";
import {FaMapMarkedAlt} from "react-icons/fa";
import {FaSuitcase} from "react-icons/fa"
import {FaPlaneDeparture} from "react-icons/fa"
import{FaAsterisk} from "react-icons/fa"
import{FaReply} from "react-icons/fa"
import nkar2 from './img/02.jpg'
function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Section2  icon={<FaCalendarCheck />} text1="WHEN"  text2="January 1, 2045"  text3="Add to Calendar"
       />
      <Section2 icon={<FaMapMarkedAlt/>} text1="LOCATION" text2="Grand Venue Place, City, State" 
      nkar0={nkar2} />
      <Section2 icon={<FaSuitcase />} text1="LODGING" text2="DJ Jazzy Nupitals guitar acoustic bass 
      embarrassing first aisle guitar acoustic bass cheers glitter . Macarena fish aisle aisle wedding,
       forever happy salad drunk groomsman overpriced 
      florist embarrassing coworkers tuxedo aisle guitar acoustic bass champagne bouquet.
       Ring wedding beautiful tuxedo fish toast, veil Bryna aisle centerpieces. Cheers embarrassing 
       bouquet bouquet Bryna overpriced florist DJ Jazzy Nupitals Bryna macarena. DJ Jazzy 
       Nupitals prime 
       rib centerpieces centerpieces cake dessert, cake dessert tuxedo aisle
        seat covers aisle " text3="Church Will chicken unity sparkles Bryna cake dessert, 
       centerpieces aisle Will debt guitar acoustic bass glitter . 
       Magic sparkles father bridesmaid champagne bouquet wedding mother. 
       Magic first dancing fish chicken champagne debt mother guitar acoustic bass."/>

       <Section2  icon={<FaPlaneDeparture/>} text1="FLIGHTS" text2="Ring wedding beautiful tuxedo fish toast,
        veil Bryna aisle centerpieces. Cheers embarrassing bouquet bouquet 
       Bryna overpriced florist DJ Jazzy Nupitals Bryna macarena."  text3="Magic sparkles father bridesmaid
        champagne  bouquet wedding mother. Magic first dancing fish chicken champagne debt mother guitar 
        acoustic bass."/>

        <Section2 icon={<FaAsterisk />} text1="OTHER NOTES" text2="Cake dessert mother guitar acoustic bass cheers,
         uncle joe seat covers 
        guitar acoustic bass macarena seat covers cake dessert embarrassing."  text3="Also, your presence is the only
         present we desire. No gift required." />

         <Section2  icon={<FaReply />} text1="RSVP" text2="[Embed your RSVP form here]" text3="."/>
    </div>
  );
}

export default App;
