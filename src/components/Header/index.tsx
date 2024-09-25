import { Link, Header as Menu } from './style';

export default function Header() {
  return (
    <Menu>
      <h2>Threewygo</h2>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/cadastro'}>Cadastrar Curso</Link>
      </nav>
    </Menu>
  );
}
