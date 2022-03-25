import React, { useEffect, useState } from 'react'
import { Blog } from './Blog';
import Axios from 'axios'

export function News() {
  const [news, setNews] = useState()

  useEffect(() => {
    Axios.post('http://localhost:3001/news').then((response) => {
      setNews(response.data)
    })
  }, [news])

  return (
    <section className="blog section-padding">
          <div className="container">
               <div className="row">

                    <div className="col-lg-12 col-12 py-5 mt-5 mb-3 text-center">

                      <h1 className="mb-4" data-aos="fade-up">Notícias</h1>
                    </div>

                    {news?.map((value) => {
                      return <Blog key={value.idNoticia} title={value.tituloNoticia} categoria={value.categoriaNews}/>
                    })}
                    

               </div>
          </div>
     </section>
  );
}