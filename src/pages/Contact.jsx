function Contact() {
  const inputStyle = {
    width: "100%",
    backgroundColor: "rgba(10, 3, 15, 0.6)",
    border: "1px dashed var(--term-dim)",
    color: "#b026ff",
    padding: "15px",
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "16px",
    marginBottom: "25px",
    outline: "none",
    boxSizing: "border-box"
  };

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto 80px", padding: "0 30px" }}>
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <div style={{ fontSize: "14px", color: "var(--term-dim)", marginBottom: "10px", letterSpacing: "1px" }}>
          C:\DEVQUIZ&gt; EXECUTE COMMS_LINK.EXE
        </div>
        <h1 style={{ margin: 0, fontSize: "48px", fontFamily: "'VT323', monospace", letterSpacing: "4px", color: "#ffffff" }}>
          TRANSMIT MESSAGE
        </h1>
      </div>

      <div className="term-box" style={{ padding: "40px" }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <label style={{ display: "block", color: "#f5d0fe", marginBottom: "10px", fontSize: "14px" }}>
            &gt; IDENTIFIER (NAME)
          </label>
          <input type="text" style={inputStyle} placeholder="Enter your designation..." required />

          <label style={{ display: "block", color: "#f5d0fe", marginBottom: "10px", fontSize: "14px" }}>
            &gt; SECURE RETURN ADDRESS (EMAIL)
          </label>
          <input type="email" style={inputStyle} placeholder="Enter comms link..." required />

          <label style={{ display: "block", color: "#f5d0fe", marginBottom: "10px", fontSize: "14px" }}>
            &gt; DATA PAYLOAD (MESSAGE)
          </label>
          <textarea style={{ ...inputStyle, minHeight: "150px", resize: "vertical" }} placeholder="Type transmission here..." required></textarea>

          <button type="submit" className="term-btn-solid" style={{ padding: "15px", fontSize: "18px", marginTop: "10px" }}>
            INITIATE TRANSMISSION
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;