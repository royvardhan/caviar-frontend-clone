import bgImg from "../../../public/boat.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 300px",
          padding: "35px",
          backgroundColor: "white",
          border: "none",
          borderRadius: "20px",
          height: "250px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h4>Guaranteed liquidity for collections</h4>
          <p>
            Gone are the days of taking on huge slippage when selling or buying
            your NFTs.
          </p>
          <a
            style={{
              marginTop: "10px",
              color: "#0A77C0",
            }}
            href="#"
          >
            Learn more
          </a>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImg.src})`,
            border: "none",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            position: "relative",
            backgroundSize: "contain",
            height: "220px",
            width: "550px",
            top: "-35px",
            right: "-35px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 300px",
          padding: "30px",
          backgroundColor: "white",
          border: "none",
          borderRadius: "20px",
          height: "350px",
          gap: "20px",
        }}
      >
        <p style={{ fontSize: "25px" }}>Our partners and collaborators</p>
        <p>
          We work with various NFT collections and organizations across the
          ecosystem to improve liquidity.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "10px",
          }}
        >
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
          <Image src={"/nftperp-logo.svg"} alt="bg" width={60} height={60} />
        </div>
        <a
          href="#"
          style={{
            color: "#0A77C0",
          }}
        >
          Want to work with us? Reach out on discord!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
