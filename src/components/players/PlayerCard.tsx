import type { PlayerCardData } from "@/types/PlayerCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

interface PlayerCardProps {
  data: PlayerCardData 
}

export const PlayerCard = ({data}: PlayerCardProps) => {
  return (
    <Card>
      <img className="object-fit bg-slate-900" src={`https://cdn.nba.com/headshots/nba/latest/260x190/${data.id}.png`} alt={data.nickname as string}/>
      <CardHeader>
        <CardTitle>
          <h3>{data.name}</h3>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p></p>
      </CardContent>
    </Card>
  )
}