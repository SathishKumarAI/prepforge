---
qid: ing_a92df60325__star__local
question: 'Explain: Write the server-side handler for streaming token generation.
  Handle client disconnects correctly.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 330
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:10-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a real‑time language‑model API that streamed tokens back to web clients. One sprint, our load testing revealed a 12% increase in dropped connections during peak traffic—clients lost half the generated text because the server didn’t gracefully handle disconnects.

**Task:**  
I had to rewrite the streaming endpoint so it could detect when a client closed the socket and stop sending tokens immediately, freeing resources and avoiding unnecessary compute costs, all while keeping latency under 30 ms per token.

**Action:**  
Using Node.js with Express and the `stream` module, I wrapped the generator in an async iterator. I attached a `close` event listener to the response object (`res.on('close', …)`) that sets a flag. Inside the token loop I checked this flag after each chunk; if set, I break out of the loop and close the generator stream. I also added back‑pressure handling with `stream.write()`’s callback to pause generation when the client’s pipe is full. For safety, I implemented a 5 second timeout on idle connections. The code was fully typed in TypeScript, and I used Jest for integration tests that simulated abrupt disconnections.

**Result:**  
After deployment, connection‑loss incidents dropped from 12% to <0.2%, and CPU usage during peak hours fell by 18%. I learned the importance of tying stream lifecycle to socket events and the value of back‑pressure in high‑throughput streaming APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
