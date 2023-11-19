
import "@/styles/globals.css";
import React from 'react';
//import { UserProvider } from '../path-to-your-provider/UserProvider'; // Ensure this path is correct
//import Login from './Login'; // Correct the path if necessary

export default function App({ Component, pageProps }) {
  return (
    // <UserProvider>
      <Component {...pageProps} />
    // </UserProvider>
  );
}


// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
