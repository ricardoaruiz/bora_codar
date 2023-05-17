type ProductCardProps = {
  image: React.ReactNode
  description: React.ReactNode
}

export const ProductCard = ({ image, description }: ProductCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {image}
      {description}
    </div>
  )
}
