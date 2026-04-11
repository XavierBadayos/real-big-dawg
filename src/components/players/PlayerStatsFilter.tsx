import type { Filter } from "@/types/FilterType";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectGroup, SelectItem } from "../ui/select"
import { conditionsArray, operatorsArray } from "./operators"
import { playerStatsTableColumns } from "./PlayerStatsTableColumns"

interface StatsFilterProps{
  data: Filter
}

export const StatsFilter = ({data}: StatsFilterProps) => {
  const columns = playerStatsTableColumns;
  const operators = operatorsArray;
  const conditions = conditionsArray;

  return (
    <div className="flex">
      <Select defaultValue={data.stat} items={columns}>
        <SelectTrigger className={"w-25 rounded-r-none border-r-0"}>
          <SelectValue placeholder="Category"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {columns.map(col =>
              <SelectItem key={col.value} value={col.value}>
                {col.label}
              </SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select defaultValue={data.operator} items={operators}>
        <SelectTrigger className={"w-10 rounded-l-none rounded-r-none border-l-1 [&_svg]:hidden"}>
          <SelectValue placeholder="operator"/>
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false}>
          <SelectGroup>
            {operators.map(operator =>
              <SelectItem key={operator.value} value={operator.value}>
                {operator.label}
              </SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Input id="filterValueInput" placeholder="Value" className="rounded-l-none rounded-r-none border-l-0 border-r-0 w-20" />

      <Select defaultValue={data.condition} items={conditions}>
        <SelectTrigger className={"w-15 rounded-l-none [&_svg]:hidden"}>
          <SelectValue placeholder="operator"/>
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false}>
          <SelectGroup>
            {conditions.map(condition =>
              <SelectItem key={condition.value} value={condition.value}>
                {condition.label}
              </SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}