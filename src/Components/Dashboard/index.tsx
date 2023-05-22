import { styled } from "styled-components";
import { useDashboard } from "../../Contexts/DashboardContext";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "../../Services/api/api";

function Dashboard() {
  const {
    state: { cardList },
    dispatch,
  } = useDashboard();

  const { isError } = useQuery({
    queryKey: ["Dashboard"],
    queryFn: () => getDashboardData(dispatch),
    staleTime: Infinity,
  });

  return (
    <>
      {cardList.length > 0 && (
        <DashboardWrapper>
          {cardList.map((eachcard) => (
            <Card key={eachcard.id} data={eachcard} />
          ))}
        </DashboardWrapper>
      )}
      {!isError && cardList.length <= 0 && (
        <LoadingWrapper>Loading...</LoadingWrapper>
      )}
      {isError && <LoadingWrapper>Failed to load dashboards.</LoadingWrapper>}
    </>
  );
}

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 20px;
  max-width: 80%;
  padding: 20px;
  border-radius: 10px;
`;

const LoadingWrapper = styled.div`
  margin: auto 0px;
  font-size: 1.5rem;
`;

export default Dashboard;