import Location from "./Location";
import locations from "./data";

export default function Main() {
  let counter = locations.length;
  const locationCards = locations.map((location) => {
    counter--;
    return (
      <>
        <Location key={location.id} location={location} />
        {counter > 0 && <hr className="card--separator" />}
      </>
    );
  });
  return locationCards;
}
