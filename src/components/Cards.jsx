import Card from "./Card";

export default function Cards({ data, cardDelete }) {
  return data.map((e) => (
    <Card id={e.id} key={e.id} data={e.content} cardDelete={cardDelete} />
  ));
}
