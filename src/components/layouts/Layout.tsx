import Header from '../modules/Header/Header'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    {children}
    <div />
  </>
)

export default Layout
