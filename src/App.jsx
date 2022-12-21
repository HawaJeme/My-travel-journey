import React from "react"
import data from "../data"
import Card from "../page/Card"
import Header from "../page/Header"


export default function App() {
  const CardItems = data.map(item => {
    return(
    <Card
    key={item.id}
    item={item} />
    )}
  )
    return (
        <div>
        <Header />
        <div className="cards-list">
        {CardItems}
        </div>
        </div>
    )
}