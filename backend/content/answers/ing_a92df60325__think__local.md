---
qid: ing_a92df60325__think__local
question: 'Explain: Write the server-side handler for streaming token generation.
  Handle client disconnects correctly.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 514
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:12:51-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
   * What protocol is used (e.g., HTTP/2 Server‑Sent Events, WebSocket)?  
   * How are tokens generated?  Assume a generator that yields strings asynchronously.  
   * Define “handle disconnects correctly”: stop sending, free resources, avoid leaking goroutines or memory.

**2️⃣ Mental model / framework**  
   * Treat the handler as an async producer‑consumer pipeline: client → request → server generates → stream back.  
   * Use a context that is cancelled on client drop (e.g., `http.Request.Context()` for HTTP/2, WebSocket’s close event).  
   * Employ cancellation propagation to stop token generation early.

**3️⃣ Step‑by‑step reasoning**  

1. Accept the request and obtain the `ctx`.  
2. Create a channel (`tokens := make(chan string)`) for generated tokens.  
3. Launch a goroutine that loops:  
   ```go
   for tok, err := gen.Next(); err == nil; tok, err = gen.Next() {
       select { case <-ctx.Done(): return // client gone
                case tokens <- tok: } }
   close(tokens)
   ```
4. In the main handler, write tokens to the response writer (or WebSocket) as they arrive, flushing after each send.  
5. Wrap writes in a `select` that also listens for `<-ctx.Done()` so you can abort mid‑send if the client disconnects.  
6. After streaming completes or context is cancelled, clean up: close the channel, wait for goroutine to finish (e.g., via sync.WaitGroup).

**4️⃣ Common traps**  

* Forgetting to `close(tokens)` → goroutine leaks.  
* Blocking on a send when the client has closed → deadlock.  
* Ignoring context cancellation inside the generator loop.  
* Not flushing after each token, causing buffering and delayed disconnect detection.

**5️⃣ Sanity‑check & communicate**  

* Verify that `ctx.Done()` fires on client close by unit‑testing with a simulated client.  
* Log entry/exit points of the goroutine to ensure it terminates promptly.  
* Explain to peers: “We use context propagation to stop token generation immediately when the client disconnects, preventing resource waste.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
