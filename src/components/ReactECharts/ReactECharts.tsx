import { useRef, useEffect } from "react";
import type { CSSProperties } from "react";

import { init, getInstanceByDom } from "echarts";
import type { EChartsOption, ECharts ,SetOptionOpts } from "echarts";

export interface ReactEChartsProps {
  options: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme: "ligth" | "dark";
}

const ReactECharts = ({theme, loading, options, settings}: ReactEChartsProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current) {
      chart = init(chartRef.current, theme)
    }
    // Resize the chart with the window
    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener("resize", resizeChart);
    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    }
  }, [theme])

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart.setOption(options);
    }
  }, [options, settings, theme])

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      loading === true ? chart.showLoading() : chart.hideLoading();
    }
  }, [loading, theme])

  return <div ref={chartRef} className="h-full w-full"></div>
}

export default ReactECharts;