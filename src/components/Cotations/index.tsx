import {
  TbCurrencyDollar,
  TbCurrencyDollarCanadian,
  TbCurrencyEuro,
  TbCurrencyPeso,
  TbCurrencyPound,
  TbCurrencyYuan,
  TbCurrencyYen,
  TbCurrencyBitcoin,
  TbCurrencyEthereum,
} from 'react-icons/tb';
import CotationCard from './CotationCard';
import { Container, Divider } from './styles';

export default function Cotations() {
  return (
    <Container>
      <h1>Cotações</h1>
      <Divider />

      <div className="cotationList">
        <CotationCard
          icon={<TbCurrencyDollar />}
          cotationName="Dólar"
          cotationId="USD"
        />
        <CotationCard
          icon={<TbCurrencyDollarCanadian />}
          cotationName="Dólar Canadense"
          cotationId="CAD"
        />
        <CotationCard
          icon={<TbCurrencyEuro />}
          cotationName="Euro"
          cotationId="EUR"
        />
        <CotationCard
          icon={<TbCurrencyPeso />}
          cotationName="Peso Argentino"
          cotationId="ARS"
        />
        <CotationCard
          icon={<TbCurrencyPound />}
          cotationName="Libra Esterlina"
          cotationId="GBP"
        />
        <CotationCard
          icon={<TbCurrencyYuan />}
          cotationName="Yuan"
          cotationId="CNY"
        />
        <CotationCard
          icon={<TbCurrencyYen />}
          cotationName="Iene"
          cotationId="JPY"
        />
        <CotationCard
          icon={<TbCurrencyBitcoin />}
          cotationName="Bitcoin"
          cotationId="BTC"
        />
        <CotationCard
          icon={<TbCurrencyEthereum />}
          cotationName="Ethereum"
          cotationId="ETH"
        />
      </div>
    </Container>
  );
}
