import type { PlayerStats } from "@/types/PlayerStats";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { playerStatsTableColumns } from "./PlayerStatsTableColumns";

interface PlayerStatsTableProps{
  data: PlayerStats[];
  sortedCategory: {label: keyof PlayerStats; direction: string;}
  setSortedCategory: React.Dispatch<React.SetStateAction<{label: keyof PlayerStats; direction: string;}>>;
}

export const PlayerStatsTable = ({data, sortedCategory, setSortedCategory}: PlayerStatsTableProps) => {
const columns = playerStatsTableColumns;

return (
  <Table className="text-xs">
    <TableCaption>Player traditional stats.</TableCaption>
    <TableHeader>
      <TableRow>
        {columns.map(c => 
          <TableHead key={c.label} onClick={() => setSortedCategory({label: c.value as keyof PlayerStats, direction: sortedCategory.direction})}>{c.label}</TableHead>
        )}
      </TableRow>
    </TableHeader>
    <TableBody>  
      {data.map((row) => (
        <TableRow key={row.id}>
          {playerStatsTableColumns.map((col) => {
            const rawValue = row[col.value as keyof PlayerStats];
            const displayValue = col.format ? col.format(rawValue as number) : rawValue;
            return (
              <TableCell key={col.value} className={col.className}>
                {displayValue}
              </TableCell>
              );
          })}
        </TableRow>
      ))}
    </TableBody>
  </Table>    
  )
}