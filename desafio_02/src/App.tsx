import motionSofa from '@/assets/images/sofa.gif'
import staticSofa from '@/assets/images/sofa.png'
import { Image, ProductCard, ProductDescription } from '@/components'

function App() {
  return (
    <main className="h-screen w-full flex justify-center items-center bg-main">
      <ProductCard
        image={
          <Image staticImage={staticSofa} motionImage={motionSofa} alt="Sofá" />
        }
        description={
          <ProductDescription
            code="42404"
            title="Sofá Margot II - Rosé"
            price="R$ 4.000"
            onAddCart={() => console.log('42404')}
          />
        }
      />
    </main>
  )
}
export default App
