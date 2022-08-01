import clsx from 'clsx'
import Card from '../card/Cards'

export default function Projects() {
  return (
    <div className="flex flex-row flex-wrap justify-center mt-10 mb-10 p-10">
      <Card title="Pro-Tekt" children="text" url="/pro-tekt" />
      <Card title="LA Neon" children="text" url="/laneon" />
      <Card title="Hero" children="text" url="hero" />
    </div>
  )
}
