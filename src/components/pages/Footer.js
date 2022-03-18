import React from 'react'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">

          <div className="col-lg-5 mx-lg-auto col-md-8 col-10">
            <h1 className="text-white" data-aos="fade-up" data-aos-delay="100">Notícias sobre o bairro aqui na <strong>CT News</strong> </h1>
          </div>

          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <h4 className="my-4">Informações de contato</h4>

            <p className="mb-1">
              <i className="fa fa-phone mr-2 footer-icon"></i> 
              +55 (11) 98451-6987
            </p>

            <p>
              <a href="#">
                <i className="fa fa-envelope mr-2 footer-icon"></i>
                ctnews@company.com
              </a>
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
            <h4 className="my-4">Nosso estúdio</h4>

            <p className="mb-1">
              <i className="fa fa-home mr-2 footer-icon"></i> 
              Rua Arroio Sarandi 241  - Cidade Tiradentes, São Paulo - SP, Brazil
            </p>
          </div>

          <div className="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay="400">
            <p className="copyright-text">Copyright &copy; 2020 Etec Cidade Tiradentes
            <br></br>
            <a rel="nofollow noopener" href="https://templatemo.com">Design: TemplateMo</a></p>
          </div>

          <div className="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
            
            <ul className="footer-link">
              <li><a href="#">Stories</a></li>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
            <ul className="social-icon">
              <li><a href="#" className="fa fa-instagram"></a></li>
              <li><a href="#" className="fa fa-twitter"></a></li>
              <li><a href="#" className="fa fa-facebook"></a></li>
              <li><a href="#" className="fa fa-behance"></a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}