import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>KP Product Challenge</h1>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        

        {/* <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80 }} onClick={bottomFunction()}/> */}

        {/* <IconButton aria-label="KeyboardDoubleArrowDown" onClick={bottomFunction()}>
  <KeyboardDoubleArrowDownIcon onClick={bottomFunction()}/>
</IconButton> */}





      </header>
      {/* <section id="section01" class="demo">
          <h1>CalmCobra's Portfolio</h1>
          <a href="#section02"><span></span>Scroll</a>
        </section> */}

        <div className = "intro">
        <br></br>
        What is a product that does not yet exist but should?

        </div>

        <div className = "body">

        <h2>
          Introduction
        </h2>
        <p>Hey there! I’m Suyash Kothari, a senior at Brown University. I spent my junior year summer as a Software Engineering Intern with the Core Product focus area — the engineering team that creates and maintains the representation of a Coda doc in code. Specifically, I worked on improving the performance of how offline edits on your Coda doc get reflected back to the server.</p>
        <p>Despite my niche project area, I had many opportunities (and was indeed encouraged) to get to know Codans from all over the company.</p>
        <p>Interns choose a ‘home office’ to work from. Right now, this includes San Francisco, Bellevue, Mountain View or the remote option. I chose to live in San Francisco for the summer and went into Coda’s office in FiDi most days.</p>
        <p>The internship was 12 weeks long. For the first several weeks, we underwent Bootcamp which involved learning how to use the product through hands-on exercises. Dotted throughout this period were organized ice-breakers, happy hours, intimate fireside chats by company executives, spontaneous table tennis and Mario Kart games and sessions on company culture and work-life balance. What struck me was the company’s inclusive culture: full-time employees and company leaders went out of their way to invite us to socials, get to know us over the company’s regular family-style lunches (anyone from the company, from CEO to an intern like myself eats lunch together on the office dining table), and encourage us to ask questions or pitch ideas, no matter the scenario. These cadences lasted well beyond Bootcamp and lasted until the end of my internship.</p>
        <p></p>
        <p></p>
        <p></p>
        <h2>
          Context
        </h2>
        <p>Interns are each given a project to own and work on for the summer. These projects aren’t contrived or created for an intern program; rather, they are actual features that the company has flagged as needed for improving the product. For instance, the project I was assigned (improving the performance of how offline edits on your Coda doc get saved) was mine to lead. This required me to really understand the backend of how a Coda doc works, giving me the opportunity to meet a variety of software engineers for their input and advice.</p>
        <p>What's the specific issue? Bulk actions. We’ve all made a couple of edits offline and had them come back once we’re back online, no issue. But, customers sometimes face a scenario where they have a massive build-up of offline edits. Think huge notion import, copy/paste between docs or automatedWhen trying to process these, processUncommittedOps can get stuck if the processing takes too long or it takes too much space. </p>


        {/* <img src = "/images/chunking2.png" width = "1400px"></img> */}

        <p></p>
        <p></p>
        <p></p>
        <h2>
          Research/Feedback
        </h2>
        <p>Chunking with constant size chunks technically does solve the issue of overloading the server with too large a request. However, after testing the solutuion with users, I realized that many users found the lag time between processing chunks noticable. Even for smaller tasks that perhaps would have worked without chunking, my solution introduced a lag. </p>
        <p>So, I researched ways to chunk only when necessary--and that too, minimally. I read up on Exponential Backoff, which is a process that first tries to process the request without chunking. If it fails, it splits the request size half into two chunks. If these chunks are still too big, it again splits each chunk in half and attempts the process. We keep splitting chunks in half until all ops are committed succesfully. </p>
        <h2>
          Design Iterations
        </h2>
        <p>With Exponential backoff: My project tackles this by chunking processUncommittedOps into smaller, bitesize chunks as and when we need. That is, if processUncommittedOps fails, we run it again on a smaller chunk. If that still fails, we run it again on an even smaller chunk of ops. This approach is called backoff and we do this exponentially until we can finally process the part of the uncommitted op log we’re on. Overall, this looks results in running processUncommittedOps multiple times on different parts of the uncommitted op log, incrementally covering the entire uncommitted op log, as opposed to trying to process everything at once and failing. Side note: if you’ve worked with ops before, you may be wondering how chunking doesn’t split transactions — in a nutshell, a transaction is a series of ops that must be processed together (e.g. when creating a formula). We’ve ensured that chunking respects transactions no matter the chunk size.  </p>
        <h2>
          Conclusion
        </h2>
        <p>Chunking bulk actions was definitely challending, but necessary. The key insight was testing the solution with users which eventually led to a design iteration that minimized the lag time while also chunking op logs when necessary. All in all, an enjoyable summer! </p>
      </div>
    </div>
  );
}

export default App;
