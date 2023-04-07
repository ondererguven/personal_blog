import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
        src="/b.jpeg"
        width={320}
        height={320}
      />
      <Image
        src="/m.JPG"
        width={320}
        height={320}
      />
      <Image
        src="/i.jpeg"
        width={320}
        height={320}
      />
    </>
  )
}
