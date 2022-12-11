import ContentBanner from '../content-banner';
import Follow from '../follow';
import Footer from '../footer';
import HeadBanner from '../head-banner';
import Header from '../header';
import Mailing from '../mailing';
import OurServices from '../our-services';
import TemplatePages from '../template-pages';
import './app.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <HeadBanner />
      <div className="container">
        <TemplatePages />
      </div>
      <ContentBanner />

      <div className="container">
        <OurServices />
        <Follow />
        <Mailing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
