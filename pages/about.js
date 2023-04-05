import Head from 'next/head'
import Navigation from './index.js'

function RaceCar() {
    return (
        <>
            <Navigation />
            <Head>
                <title>Race Car ASCII</title>
            </Head>
            <pre>
                _______
                //       \\
                //         \\
                //           \\
                \\           //
                \\_________//
                \\/ / . \\ \\/
                /_\\/_\\
                (/o|o\\)
                \\(_)/
            </pre>
        </>
    )
}

export default RaceCar
