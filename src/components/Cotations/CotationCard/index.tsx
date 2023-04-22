import { useState } from 'react';
import { formatCurrency } from '../../../utils/formatCurrency';
import { getCurrencyCotation } from '../../../utils/getCurrencyCotation';
import { Container } from './styles';

interface CotationCardProps {
  icon: React.ReactNode;
  cotationId: string;
  cotationName: string;
}

export default function CotationCard({
  icon,
  cotationId,
  cotationName,
}: CotationCardProps) {
  const [cotation, setCotation] = useState<number>(0);

  if (!cotation) {
    getCurrencyCotation(cotationId).then(setCotation);
  }

  return (
    <Container>
      {icon}

      <div>
        <p>{cotationName}</p>
        <span>{cotation === 0 ? '...' : formatCurrency(cotation)}</span>
      </div>
    </Container>
  );
}
