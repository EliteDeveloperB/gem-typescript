type props = {
    children:React.ReactNode
}

function HText({children}:props) {
  return (
    <div className="text-2xl font-bold uppercase py-5">
        {children}
        </div>
  )
}

export default HText