import usePageTitle from '../hooks/usePageTitle';

const NotFound = () => {
  usePageTitle('404 페이지');
  return <div>not found</div>;
};

export default NotFound;
