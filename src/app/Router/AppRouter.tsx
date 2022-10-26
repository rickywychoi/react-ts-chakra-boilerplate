import React from 'react';
import { Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useComponentDimensionsContext } from '../context/ComponentDimensions/useComponentDimensionsContext';
import { Navbar } from '../layout/Navbar';
import WithDefaultStyle from '../layout/WithDefaultStyle/WithDefaultStyle';
import Main from '../pages/Main/Main';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;
  const navbarRef = useRef();
  const { setRef } = useComponentDimensionsContext();

  useEffect(() => {
    if (navbarRef.current) {
      setRef(navbarRef);
    }
  }, [setRef]);

  return (
    <Router>
      <Navbar ref={navbarRef} />

      <Suspense fallback={<LoadingMessage />}>
        <Routes>
          <Route path="/" element={WithDefaultStyle(Main)} />
        </Routes>
      </Suspense>
    </Router>
  );
}
