interface ToastProps {
  title: string
  description: string
}

const ToastElement: React.FC<ToastProps> = ({ title, description }: ToastProps) => {
  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ToastElement
