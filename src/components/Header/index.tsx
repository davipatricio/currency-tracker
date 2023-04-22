import { TbZoomMoney } from 'react-icons/tb';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <TbZoomMoney />
      <a href="/">Home</a>
      <a href="https://github.com/davipatricio/currency-tracker">GitHub</a>
    </Container>
  );
}
