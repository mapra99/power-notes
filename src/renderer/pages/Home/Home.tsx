import ActionsBar from '../../components/ActionsBar';
import MarkdownParser from '../../components/MarkdownParser';

import './Home.scss';

const Home = () => (
  <>
    <ActionsBar />

    <section className="content">
      <MarkdownParser />
    </section>
  </>
);

export default Home;
