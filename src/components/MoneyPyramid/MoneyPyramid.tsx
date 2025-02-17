import { MoneyPyramidType } from '../../types';
import './MoneyPyramid.css';

interface MoneyPyramidProps {
  moneyPyramid: MoneyPyramidType[];
  questionNumber: number;
}

export const MoneyPyramid = ({
  moneyPyramid,
  questionNumber,
}: MoneyPyramidProps) => {
  return (
    <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((item) => (
          <li
            key={item.id}
            className={
              questionNumber === item.id
                ? 'moneyListItem active'
                : 'moneyListItem'
            }
          >
            <span className="moneyListItemNumber">{item.id}</span>
            <span className="moneyListItemAmount">{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
