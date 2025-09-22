import React from 'react'
import { useData } from '../Context/DataContext';

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
}

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getDate() + n)
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date)

}

function formatData(date: Date){
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() +1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`
}

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getDate() + n);

    const firstDay = new Date(date.getDay(), date.getMonth(), 1);
    const lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatData(firstDay));
    setFinal(formatData(lastday));
  }

  setMes(n)

  return (
    <button style={style} onClick={() => setMes(n)}>
      {nomeMes(n)}
    </button>
  )
}

export default MesBtn
