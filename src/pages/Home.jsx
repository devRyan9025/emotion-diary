import Header from './../components/Header';
import Button from './../components/Button';
import DiaryList from './../components/DiaryList';
import DiaryItem from './../components/DiaryItem';

const Home = () => {
  return (
    <>
      <Header
        title={new Date().toLocaleDateString()}
        leftChild={<Button text={'<'} />}
        rightChild={<Button text={'>'} />}
      />
      <DiaryList />
    </>
  );
};

export default Home;
