const Client = () => {
  const data = [
    {
      id: 1,
      across_cities: 228,
      across_cities_description: "Presence across cities",
      quality_products: 2500,
      quality_products_description: "Quality products",
      professional_teams: 45,
      professional_teams_description: "Professional teams",
      happy_clients: 6500,
      happy_clients_description: "Happy clients",
    },
  ];

  return (
    <div className="client-container">
      <div className="client-content-1">
        <div className="">
          <p className="client_paragraph">
            Asphalt Brand is present across 228+ cities to serve more than 2500
            quality products.
          </p>
        </div>
        <div className="">
          <p className="client_paragraph">
            Having good strength to solve problem with help of more than 45
            professional team across major cities.
          </p>
        </div>
        <div className="">
          <p className="client_paragraph">
            With the help of this team, we reached to a reasonable milestone of
            more than 6500 happy clients.
          </p>
        </div>
      </div>
      <div className="client-content-2">
        <div className="client-cart-container">
          {data.map((item) => (
            <>
              <div className="client-cart">
                <h1>{item.across_cities} +</h1>
                <p>{item.across_cities_description}</p>
              </div>
              <div className="client-cart">
                <h1>{item.quality_products} +</h1>
                <p>{item.quality_products_description}</p>
              </div>
              <div className="client-cart">
                <h1>{item.professional_teams} +</h1>
                <p>{item.professional_teams_description}</p>
              </div>
              <div className="client-cart">
                <h1>{item.happy_clients} +</h1>
                <p>{item.happy_clients_description}</p>
              </div>
            </>
          ))}
        </div>
        <div className="youtupe-video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/1qjy0wi_R8c"
            title="Aluminium machining by Asphalt Carbide Endmill"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Client;
