export default async function handler(req, res) {
    try {
        // const { uid } = await auth.verifyIdToken(req.headers.token)
        // const { sites } = await getUserSites(uid)

        res.status(200).json({ name: 'John Doe' })
    } catch (error) {
        // logger.error(
        //   {
        //     request: {
        //       headers: formatObjectKeys(req.headers),
        //       url: req.url,
        //       method: req.method
        //     },
        //     response: {
        //       statusCode: res.statusCode
        //     }
        //   },
        //   error.message
        // )

        res.status(500).json({ error: error.message })
    }
}
