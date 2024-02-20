import Link from 'next/link'

const Logo: React.FC = () => (
  <Link className='logo' href='/'>
    <img className='logo__img' src='/img/logo.svg' alt='Rostelecom Logo' />
  </Link>
)

export default Logo
