"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DataPoint {
    id: string;
    ammount: number;
    payMethod: string;
    category: string;
    date: string;
    fill: string;
}

interface SpentsGraphDataProps {
    title: string;
    description: string;
    data: DataPoint[];
    dataKey: string;
    nameKey: string;
  }

export function SpentsGraphData({title, description, data, dataKey, nameKey}: SpentsGraphDataProps) {
    const chartConfig = React.useMemo(()=> {
        return data.reduce((config, item)=> {
            config[item.category] = {
                label: item.category,
                color: item.fill,
            };
            return config;
        }, { } as Record<string, {label: string, color: string} >)
    }, [data])
  
     // Calcular total de valores (por ejemplo, total de visitantes)
  const totalValue = React.useMemo(() => data.reduce((acc, curr) => acc + curr.ammount, 0), [data]);

  return (
    <Card className="flex flex-col h-96 w-full lg:w-1/4">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={data} dataKey={dataKey} nameKey={nameKey} innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalValue.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Gastos totales
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Gráfico en tiempo real de gastos <TrendingUp className="h-4 w-4" />
        </div>
       {/*  <div className="leading-none text-muted-foreground">Showing total visitors for the last 6 months</div> */}
      </CardFooter>
    </Card>
  )
}

