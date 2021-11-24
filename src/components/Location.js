export default function Location(props) {
  console.log(props);
  return (
    <>
      <section id={props.location.id} className="location--card">
        <img src={props.location.img} alt={props.location.place} />
        <div className="text--container">
          <div className="text--container--top">
            <div className="text--container--location">
              <h4 className="location--city">
                {props.location.city.toUpperCase()}
              </h4>
              <a
                className="google--maps--link"
                href={props.location.googleMaps}
              >
                View on Google Maps
              </a>
            </div>
            <h1 className="location--title">{props.location.place}</h1>
          </div>
          <div className="text--container--bot">
            <b className="location--date">{props.location.date}</b>
            <p className="location--description">
              {props.location.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
