import React from "react";

const Listings = () => {
  const listings = [
    {
      id: 1,
      title: "Address",
      img: "/images/luxuriousapartment.jpg",
      link: "https://sef.mlsmatrix.com/matrix/shared/Mkbpll0MyXf/1643BrickellAve",
      description: "Description of listing",
    },
    {
      id: 2,
      title: "Address",
      img: "/images/home2.jpg",
      link: "https://www.zillow.com/homedetails/2",
      description: "Description of listing",
    },
    {
      id: 3,
      title: "Address",
      img: "/images/home3.jpg",
      link: "https://www.zillow.com/homedetails/3",
      description: "Description of listing",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Listings</h2>
      {listings.map((listing) => (
        <div key={listing.id} style={styles.listingCard}>
          {/* Left: Property Image */}
          <img src={listing.img} alt={listing.title} style={styles.image} />

          {/* Right: Property Details */}
          <div style={styles.textContainer}>
            <h3 style={styles.title}>{listing.title}</h3>
            <p style={styles.description}>{listing.description}</p>
            <a
              href={listing.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View listing
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "30px",
  },
  listingCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1a1a1a",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  image: {
    width: "50%",
    borderRadius: "10px",
  },
  textContainer: {
    width: "45%",
    textAlign: "left",
    paddingLeft: "20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "16px",
    margin: "10px 0",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    marginTop: "10px",
  },
};

export default Listings;