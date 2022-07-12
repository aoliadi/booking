import featured from "./featured.module.css";

function Featured({ imgUrls }) {
  const featuredListItems = [
    {
      name: "Jieshou",
      quantity: 39,
    },
    {
      name: "Haljala",
      quantity: 28,
    },
    {
      name: "Mityana",
      quantity: 50,
    },
    {
      name: "Tasböget",
      quantity: 24,
    },
    {
      name: "Milano",
      quantity: 16,
    },
    {
      name: "Ekpoma",
      quantity: 17,
    },
    {
      name: "Lào Cai",
      quantity: 23,
    },
    {
      name: "Odivelas",
      quantity: 42,
    },
    {
      name: "Marttila",
      quantity: 25,
    },
    {
      name: "Alua",
      quantity: 40,
    },
  ];

  return (
    <section className={featured.container}>
      <ul className={featured.list__container}>
        {featuredListItems.map((item, index) => (
          <li className={featured.list__item} key={index}>
            <img
              src={imgUrls[index]}
              alt=""
              width="100%"
              height="100%"
              className={featured.list__img}
            />
            <div className={featured.list__label}>
              <h1 className={featured.list__title}>{item.name}</h1>
              <h2 className={featured.list__desc}>{item.quantity}</h2>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Featured;
