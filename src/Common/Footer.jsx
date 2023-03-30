function Footer() {
    let year = new Date().getFullYear();
    const styles= {
        container: {
            // backgroundColor: "#F8F8F8",
            // borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%",
        },
        footer: {
            display: 'block',
            height: '60px',
            width: '100%',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.footer}>@{year}, JHI Footer Kha.</div>
        </div>
    )
}

export default Footer;