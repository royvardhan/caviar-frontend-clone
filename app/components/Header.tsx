const Header: React.FC = () => {
  return (
    <header
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div
        style={{
          fontSize: "20px",
        }}
      >
        Caviar
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "10px",
            fontSize: "20px",
          }}
        >
          <p style={{ margin: "0 8px" }}>Docs</p>
          <p style={{ margin: "0 8px" }}>Twitter</p>
          <p style={{ margin: "0 8px" }}>Discord</p>
        </div>
        <button
          style={{
            backgroundColor: "#333",
            borderRadius: "12px",
            color: "white",
            padding: "5px 20px",
            border: "white",
            cursor: "pointer",
          }}
        >
          Open App
        </button>
      </div>
    </header>
  );
};

export default Header;
