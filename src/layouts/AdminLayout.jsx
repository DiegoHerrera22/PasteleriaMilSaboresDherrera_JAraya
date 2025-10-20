import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';
import AdminFooter from '../components/admin/AdminFooter';

export default function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <main className="container">
        <Outlet />
      </main>
      <AdminFooter />
    </>
  );
}
