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
    const videoObjects = [
        {
            'videoID':'l7rce6IQDWs',
            'channelID':'testChannel1',
            'playlistID':'testPlaylist1',
            'videoURL':'testURL1',
            'videoTitle':'The world\'s worst video card?',
            'videoDescription':'Let\'s build a circuit that displays an image on a VGA monitor! In this video, I talk about how VGA signals work and build a circuit that provides the correct timing of sync signals so that a monitor recognizes the signal.',
            'videoUploadDate':'July 5, 2019',
        },
        {
            'videoID':'8v0QwgWPqPU',
            'channelID':'testChannel2',
            'playlistID':'testPlaylist2',
            'videoURL':'testURL2',
            'videoTitle':'Science Briefing on NASA Mission Studying Earth\'s Atmosphere and Oceans (Feb. 4, 2024)',
            'videoDescription':'Targeted to launch on Tuesday, Feb. 6, NASA\'s Plankton, Aerosol, Cloud, ocean Ecosystem (PACE) satellite mission will study how our oceans and atmosphere interact in a changing climate. Prelaunch activities include a briefing on the mission science on Sunday, Feb. 4 at 11 a.m. EST (1600 UTC) with the following NASA participants:',
            'videoUploadDate':'Februaury 4, 2024',
        },
        {
            'videoID':'he-7vs0BkLE',
            'channelID':'testChannel3',
            'playlistID':'testPlaylist3',
            'videoURL':'testURL3',
            'videoTitle':'Professor Dave Humiliates Flat Earther David Weiss (DITRH Debunked Live)',
            'videoDescription':'For months now, hordes of idiots have been lurking in my comments sections, aggressively insisting that I need to debate David Weiss, because he\'s some kind of flat earth messiah who is undebunkable, and I should cower in the face of his might. Of course I ignored them because he is a two-bit charlatan and who cares what idiots say, but then a channel with almost 700k subscribers asked if I would debate Weiss on his channel, and I figured it might be a good way to pick up a few subscribers, and also humiliate a flat earth icon irreparably in the process. And folks, that\'s exactly what happened. From the moment he opened his mouth to the moment we left the stream, I took every single word he said and demonstrated in real time how David Weiss is a science illiterate moron that doesn\'t understand basic concepts learned in elementary school, just like every other pointless flat earth grifter. Anyone who watches this exchange and still refers to him as a credible source of information is in complete denial of reality and hopelessly unreachable. Of course that describes most flat earthers, so I\'ll see you dummies in the comments section complaining about what a meany mean-pants I am instead of admitting to yourself that you are completely unable to address a single thing I said in this absolutely airtight, relentless destruction of a toxic influence on society. Toodles!',
            'videoUploadDate':'April 8, 2022',
        },
        {
            'videoID':'icwYkOun_Po',
            'channelID':'testChannel4',
            'playlistID':'testPlaylist4',
            'videoURL':'testURL4',
            'videoTitle':'Chiefs win Super Bowl, Mahomes tweets "Never A Doubt" & Nick celebrates | NFL | FIRST THINGS FIRST',
            'videoDescription':'Nick Wright, Chris Broussard and Kevin Wildes react to the Kansas City Chiefs win over the San Francisco 49ers in Super Bowl LVIII. The FTF cast discuss Patrick Mahomes, Brock Purdy, Nick\'s Picks, Kyle Shanahan and more.',
            'videoUploadDate':'February 12, 2024',
        },
    ]
    res.json(videoObjects);
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