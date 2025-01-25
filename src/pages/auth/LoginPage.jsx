import backgroundImage from "../../assets/images/login-background.png";
import banner from "../../assets/images/banner.png";
const LoginPage = ({ openMdk }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
        width: "100%",
        background: `url(${backgroundImage}) no-repeat center center/cover`,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        className="header-container"
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            width: "180px",
            margin: "0 auto",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={banner}
            alt="banner"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="header" style={{ width: "100%" }}>
          <h1
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "64px",
              textTransform: "uppercase",
              fontFamily: "K2D",
              padding: "0 20px",
              fontWeight: "800",
              fontStyle: "normal",
              lineHeight: "64px",
            }}
          >
            Connect Four
          </h1>
        </div>
      </div>

      <div
        className="button-container"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            lineHeight: "64px",
            padding: "0 20px",
            fontSize: "40px",
            backgroundColor: "#FFCE67",
            color: "white",
            borderRadius: "16px",
            cursor: "pointer",
            fontFamily: "K2D",
            fontWeight: "800",
            boxShadow:
              "2px 6px  #1A1B0E, -2px 6px  #1A1B0E, 2px -2px  #1A1B0E, -2px -2px  #1A1B0E",
            textShadow:
              "1px -1px 0 #1A1B0E, -1px -1px 0 #1A1B0E, 1px 4px 0 #1A1B0E, -1px 4px 0 #1A1B0E",
            transition: "transform 0.3s ease",
          }}
          onClick={openMdk}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
