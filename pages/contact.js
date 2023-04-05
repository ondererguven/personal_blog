import Head from 'next/head'
import Navigation from './index.js'

function Pineapple() {
    return (
        <>
            <Navigation />
            <Head>
                <title>Pineapple ASCII</title>
            </Head>
            <pre>
            //    /\
            //   //\\
            //  //  \\
            //  \\  //
            //   \\//
            //    \/
            </pre>
        </>
    )
}

export default Pineapple
