import React, { useState } from 'react';

declare namespace JSX {
    interface IntrinsicElements {
      'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { src: string, trigger: string };
    }
  }
// define "lord-icon" custom element with default properties

const NavbarUser: React.FC = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  // src/custom.d.ts


  
//   #a11128

  return (
    <nav className="bg-800" style={{backgroundColor:'#00AFE5'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Partie gauche pour le logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold">Logo</span>
            </div>
          </div>
          {/* Partie droite pour les liens et l'icône de connexion */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-white font-bold hover:text-white block px-3 py-2 rounded-md text-base font-medium">Accueil</a>
              {/* <a href="#" className="text-white font-bold hover:text-white block px-3 py-2 rounded-md text-base font-medium">A propos</a> */}
              <a href="#" className="text-white font-bold hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a>
              <a href="#" className="text-white font-bold hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tarif</a>
              <a href="#" className="text-white font-bold hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              {/* Icône de connexion */}
              <div>
              <button className="text-white font-bold hover:text-white focus:outline-none rounded-full border-2 border-white w-7 h-7" style={{backgroundColor:'white'}}>
                  <lord-icon
                      src="https://cdn.lordicon.com/xcxzayqr.json"
                      trigger="hover"
                      colors="primary:#00afe5,secondary:#00afe5"
                      style={{width:'20px',height:'20px'}}>
                  </lord-icon>
              </button>
              </div>

            </div>
          </div>
          {/* Bouton de toggle pour les écrans mobiles */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white  focus:outline-none  focus:text-white" style={{backgroundColor:'#91A6F1'}}>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Menu déroulant pour les écrans mobiles */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-white font-bold hover:text-white block px-3 py-2 rounded-md text-base font-medium">Accueil</a>
          {/* <a href="#" className="text-white font-bold hover:text-white block px-3 py-2 rounded-md text-base font-medium">A propos</a> */}
          <a href="#" className="text-white font-bold hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a>
          <a href="#" className="text-white font-bold hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tarif</a>
          <a href="#" className="text-white font-bold hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          {/* Icône de connexion */}
          <div className="flex justify-center mt-4">
            <button className="text-white font-bold hover:text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
