import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import ErrorComponent from './components/ErrorComponent';
import WelcomeComponent from './components/WelcomeComponent';
import ListTodosComponent from './components/ListTodosComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LogoutComponent from './components/LogoutComponent';
import AuthProvider, { useAuth } from './components/security/AuthContext';


function AuthenticatedRoute({children}) {
  const authContext = useAuth()
  
  if(authContext.isAuthenticated)
      return children

  return <Navigate to="/" />
}


function App() {
  return (
    <div className="App">
      
    <AuthProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/welcome/:username' element={ 
            //<AuthenticatedRoute>
            <WelcomeComponent />
          //</AuthenticatedRoute> 
          }/>

          <Route path='/login' element={ <LoginComponent /> }/>
          <Route path='/logout' element={ //<AuthenticatedRoute>
            <LogoutComponent /> 
          //</AuthenticatedRoute> 
          }/>
          
          <Route path='/todos' element={ //<AuthenticatedRoute>
            <ListTodosComponent /> 
          //</AuthenticatedRoute> 
          }/>
          
          <Route path='/error' element={ <ErrorComponent /> }/>
          
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </AuthProvider>
      
    </div>
  );
}

export default App;
