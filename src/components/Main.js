import Location from "./Location";
import locations from "./data";

export default function Main() {
  let counter = locations.length;
  const locationCards = locations.map((location, index) => {
    counter--;
    return (
      <div className="key--container" key={`container-${index}`}>
        <Location key={location.id} location={location} />
        {counter > 0 && <hr key={index} className="card--separator" />}
      </div>
    );
  });
  return locationCards;
}
