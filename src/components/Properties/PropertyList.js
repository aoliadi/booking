import properties from "./propertylist.module.css";

function PropertyList() {
  const propertyListItems = [
    {
      quantity: 494537,
      property: "hotels",
    },
    {
      quantity: 219874,
      property: "resorts",
    },
    {
      quantity: 254292,
      property: "lighthouses",
    },
    {
      quantity: 350486,
      property: "woodlands",
    },
    {
      quantity: 160437,
      property: "vicarages",
    },
    {
      quantity: 213686,
      property: "barns",
    },
  ];
  return (
    <section className={properties.container}>
      <ul className={properties.list__container}>
        <li className={properties.list__item}>
          <h2 className={properties.heading}>Browse by property type</h2>
        </li>
        {propertyListItems.map(({ property, quantity }, index) => {
          return (
            <li className={properties.list__item} key={index}>
              <figure>
                <img
                  src=""
                  alt=""
                  className={properties.img}
                  width="100%"
                  height="150px"
                />
                <figcaption>
                  <h3 className={properties.type}>{property}</h3>
                  <p
                    className={properties.quantity}
                  >{`${quantity.toLocaleString("en-US")} ${property}`}</p>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default PropertyList;
