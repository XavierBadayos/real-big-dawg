import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export const PlayerCard = ({data}: any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kawhi Leonard</CardTitle>
        <CardDescription>The Klaw</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Boardman gets paid.</p>
      </CardContent>
    </Card>
  )
}