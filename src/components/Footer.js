import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerLeft}>
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
        <div style={styles.footerRight}>
          <ul style={styles.socialIcons}>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#E3EDED',
    padding: '20px',
    textAlign: 'center',
    color: '#333',
    marginTop: '50px'
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerLeft: {
    flex: 1,
  },
  footerRight: {
    flex: 1,
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
    listStyleType: 'none',
    padding: 0,
    margin: '10px 0 0 0',
  },
};

export default Footer;
