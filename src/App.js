import React from 'react'

import { useFetch } from './Component/useFetch'
import Article from './Component/Article'
import Search from './Component/Seach'
import FilteringTable from './Component/FilteringTable'
// import Search from './Seach'
function App() {
  const { loading } = useFetch();
  const [filter, setFilter]= React.useState('')
  
 
  return (
    <main>
      
      <section className="photos">
        <Search/>
        <br />
        <Article/>
      </section>
    </main>
  );
}

export default App
