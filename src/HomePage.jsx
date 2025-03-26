function HomePage() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Ensures even spacing
          padding: "10px 20px",
        }}
      >
        {/* YouTube Logo and Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img
            src="utube_icon.jpg"
            alt="youtube icon"
            style={{ width: "58px", height: "40px", objectFit: "contain" }}
          />
          <h1 style={{ fontFamily: "Roboto", margin: "0" }}>
            YouTube
            <span style={{ fontSize: "0.7em", verticalAlign: "super" }}>IN</span>
          </h1>
        </div>
  
        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "24px",
            padding: "5px 10px",
            width: "500px",
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "16px",
            }}
          />
          <img
            src="search_icon.JPG"
            alt="search icon"
            style={{ width: "20px", cursor: "pointer" }}
          />
        </div>
  
        {/* Icon Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src="sound_li.JPG"
            alt="sound icon"
            style={{ width: "45px", cursor: "pointer" }}
          />
          <img
            src="create.JPG"
            alt="create icon"
            style={{ width: "95px", cursor: "pointer" }}
          />
          <img
            src="noti_icon.JPG"
            alt="notification icon"
            style={{ width: "40px", cursor: "pointer" }}
          />
          <img
            src="acc_icon.JPG"
            alt="account icon"
            style={{ width: "48px", cursor: "pointer" }}
          />
        </div>
      </div>
    );
  }
  
  export default HomePage;
  