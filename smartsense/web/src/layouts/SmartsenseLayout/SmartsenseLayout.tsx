type SmartsenseLayoutProps = {
  children?: React.ReactNode
}

const SmartsenseLayout = ({ children }: SmartsenseLayoutProps) => {
  return (
    <>
      <header>
        <h1>SmartSense</h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default SmartsenseLayout
