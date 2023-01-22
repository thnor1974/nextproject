// components/layout.js

export default function Layout({ children }) {
  return (
    <>
      <main className="md:container md:mx-auto">{children}</main>
    </>
  )
}