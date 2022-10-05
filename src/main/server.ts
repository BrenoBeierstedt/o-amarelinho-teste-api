import app from './config/app'

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
app.listen(process.env.PORT, () => console.log(`Server running at: http://localhost:${process.env.PORT}`))
