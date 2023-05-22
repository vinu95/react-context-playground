import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { CardType, useDashboard } from "../../Contexts/DashboardContext";
import { useRef } from "react";

function Card({ data }: { data: CardType }) {
  const {
    state: { isEditable },
    dispatch,
  } = useDashboard();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAmountEdit = () => {
    const inputAmount = inputRef.current?.value;
    const { id } = data;
    if (inputAmount)
      dispatch({
        type: "UPDATE_SPECIFIC_DASHBOARD_AMOUNT",
        payload: {
          id,
          amountWithCurrency: inputAmount,
        },
      });
  };

  return (
    <CardWrapper>
      <CardHeading>
        <h2>{data.title}</h2>
      </CardHeading>
      <CardBody>
        <FontAwesomeIcon icon={faHouse} />
        <EditableSection
          ref={inputRef}
          contentEditable={isEditable}
          suppressContentEditableWarning
          onBlur={handleAmountEdit}
        >
          {data.amount}
        </EditableSection>
      </CardBody>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.variant_2};
  color: ${({ theme }) => theme.colors.button.text};
`;

const CardHeading = styled.div`
  padding: 0 1.4rem;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors.variant_4};
  background: ${({ theme }) => theme.colors.button.background};
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  padding-left: 2rem;
  font-size: 2rem;
  height: 100%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background: ${({ theme }) => theme.colors.variant_1};

  svg {
    width: 24px;
    height: 24px;
  }
`;

const EditableSection = styled.div`
  &:before {
    content: "$";
    margin-right: 0.2rem;
  }
`;

export default Card;
