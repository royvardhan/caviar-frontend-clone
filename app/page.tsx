import NftCollections from "./components/NftCollections";

export default function Home() {
  return (
    <main
      style={{
        margin: "200px",
        height: "100vh",
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
                fontSize: "65px",
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
                border: "1px solid black",
                borderRadius: "20px",
                width: "350px",
                height: "150px",
                display: "flex",
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
                  <p>Side Logo</p>
                </div>
              </div>
            </div>
            <div
              style={{
                color: "black",
                border: "1px solid black",
                borderRadius: "20px",
                width: "350px",
                height: "150px",
                display: "flex",
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
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>Security Audits</p>
                  <h1>2</h1>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <p>Side Logo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NftCollections />
      </div>
    </main>
  );
}
