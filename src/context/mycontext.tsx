import React, { createContext, useState, ReactNode } from 'react';


interface MyContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);


const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<string>('initial state');

  // Ensure the provider's value is typed correctly
  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

// Optional: create a custom hook for easier context consumption
export const useMyContext = () => {
  const context = React.useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};



// import React from 'react';
// import { useMyContext } from './MyProvider'; // Adjust the path as necessary

// const SomeComponent: React.FC = () => {
//   const { state, setState } = useMyContext();

//   const handleClick = () => {
//     setState('new state');
//   };

//   return (
//     <div>
//       <p>Current state: {state}</p>
//       <button onClick={handleClick}>Change State</button>
//     </div>
//   );
// };
