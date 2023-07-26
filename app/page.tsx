"use client";

import Footer from "./components/Footer";
import NftCollections from "./components/NftCollections";
import miladyImage from "../public/milady-eth.png";
import securityImage from "../public/security.png";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();
  console.log(isConnected);
  return (
    <main
      style={{
        margin: "200px",
        height: "100%",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "50%",
            }}
          >
            <div
              style={{
                fontSize: "55px",
              }}
            >
              Caviar is an AMM for NFTs. Trade, swap, and provide liquidity.
            </div>
            <button
              style={{
                width: "225px",
                height: "75px",
                border: "none",
                backgroundColor: "#333",
                borderRadius: "20px",
                color: "white",
                fontSize: "25px",
                marginTop: "10px",
              }}
            >
              Start Trading
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <div
              style={{
                color: "black",
                border: "none",
                borderRadius: "20px",
                width: "350px",
                height: "150px",
                display: "flex",
                backgroundColor: "#FFFCFC",
              }}
            >
              <div
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "50px",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    Total Value Locked
                  </p>
                  <h1>$1.13M</h1>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${miladyImage.src})`,
                      border: "none",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right",
                      backgroundSize: "contain",
                      position: "relative",
                      height: "120px",
                      width: "120px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              style={{
                color: "black",
                border: "none",
                borderRadius: "20px",
                width: "350px",
                height: "150px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 10px",
                backgroundColor: "#FFFCFC",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "50px",
                }}
              >
                <p style={{ marginBottom: "10px" }}>Security Audits</p>
                <h1>2</h1>
              </div>
              <div
                style={{
                  backgroundImage: `url(${securityImage.src})`,
                  border: "none",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  backgroundSize: "contain",
                  position: "relative",
                  height: "180px",
                  width: "300px",
                }}
              ></div>
            </div>
          </div>
        </div>
        <NftCollections />
        <Footer />
      </div>
    </main>
  );
}
