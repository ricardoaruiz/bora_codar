type ProductDescriptionProps = {
  code: string
  title: string
  price: string
  onAddCart: () => void
}

export const ProductDescription = ({
  code,
  title,
  price,
  onAddCart,
}: ProductDescriptionProps) => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start font-light">
      <p className="text-xxs text-purple-main mb-3 font-lato">{`CÓDIGO: ${code}`}</p>
      <h2 className="text-3xl font-semibold mb-3 font-crimson">{title}</h2>
      <p className="text-base text-purple-main mb-5 font-lato">{price}</p>

      <button
        className="border border-purple-main rounded-full px-4 py-2 uppercase font-lato font-normal"
        onClick={onAddCart}
      >
        Adicionar à cesta
      </button>
    </div>
  )
}
