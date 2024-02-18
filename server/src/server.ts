import express, {NextFunction, Request, Response} from 'express';
const PORT = process.env.PORT || 3000;
const app = express();

// support request body json
app.use(express.json());

// home route
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to BoomerSurfer');
});

// watch tv route
app.get('/watch', (req: Request, res: Response) => {
    const videos = ["l7rce6IQDWs", "8v0QwgWPqPU", "he-7vs0BkLE", "icwYkOun_Po"];
    res.json(videos);
});

// 404 route
app.all('*', (req: Request, res: Response) => {
    res.status(404).send('The page you are looking for does not exist');
});
  
// Global error handler
app.use((
    err: { status: number; message: string; }, 
    req: Request,
    res: Response,
    next: NextFunction) => {
        res.status(err.status || 500).json({ error: err.message });
    });

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});