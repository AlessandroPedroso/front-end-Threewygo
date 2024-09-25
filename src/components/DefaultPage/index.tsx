import { Outlet } from 'react-router-dom';
import Header from '../Header';
function DefaultPage() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <Outlet />
    </main>
  );
}

export default DefaultPage;
