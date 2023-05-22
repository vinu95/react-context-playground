import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useQuery } from "@tanstack/react-query";
import { getMatchStats } from "../../Services/api/api";
import { useTheme } from "../../Contexts/ThemeContext";

export interface Team {
  Year: number;
  Team: string;
}

export interface MatchStats {
  [key: string]: number;
}

export type GroupedMatchData = MatchStats | undefined;

function Statistics() {
  const { data } = useQuery({
    queryKey: ["match-stats"],
    queryFn: getMatchStats,
  });
  const {
    context: {
      state: { theme },
    },
  } = useTheme();

  const groupedMatchData: GroupedMatchData = data?.reduce(
    (acc: MatchStats, curr: Team) => {
      if (acc[curr.Team]) {
        acc[curr.Team]++;
      } else {
        acc[curr.Team] = 1;
      }
      return acc;
    },
    {}
  );

  const resultStats =
    groupedMatchData &&
    Object.entries(groupedMatchData).map(([team, count]) => {
      return {
        name: team,
        y: count,
      };
    });

  const options: Highcharts.Options = {
    chart: {
      plotShadow: true,
      type: "pie",
      animation: true,
      backgroundColor: theme.colors.body,
    },
    title: {
      text: "IPL Winners",
      style: { color: theme.colors.text },
    },
    accessibility: {
      description: "IPL Winners Pie Chart Respresentation",
      enabled: true,
      point: {
        valueSuffix: "%",
      },
    },
    legend: {
      itemStyle: {
        color: theme.colors.text,
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "No. of Season Won",
        type: "pie",
        color: theme.colors.text,
        colorByPoint: true,
        data: resultStats,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default Statistics;