// components/Layout.js

const Layout = ({ children }) => {
    return (
      <div className="container">
        {children}
        <footer>
          <p>© 2023 Your Website Name</p>
          {/* Add other footer content here */}
        </footer>
        <style jsx>{`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Shadow for the container */
          }
  
          footer {
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
          }
        `}</style>
      </div>
    );
  };
  
  export default Layout;
  