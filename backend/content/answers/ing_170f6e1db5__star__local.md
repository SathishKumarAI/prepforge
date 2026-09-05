---
qid: ing_170f6e1db5__star__local
question: 'Explain: Server-Sent Events (SSE) — Long Polling vs WebSockets - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 372
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:58-05:00'
sources: []
---

**Situation:**  
While leading a real‑time analytics dashboard for our ad‑tech platform, we noticed the click‑through heatmap lagged by 3–5 seconds during peak traffic. Our existing polling mechanism was hitting API limits and causing unnecessary load.

**Task:**  
I needed to deliver near‑instant updates to the front end without overloading the backend or breaching rate limits, while keeping the architecture simple enough for our dev ops team to maintain.

**Action:**  
First, I benchmarked Server‑Sent Events (SSE) against Long Polling and WebSockets. SSE offered a lightweight unidirectional stream over HTTP/1.1, ideal for broadcasting metrics. I replaced the long‑poll loop with an Express middleware that kept connections alive and pushed JSON payloads every 200 ms. For bidirectional needs (e.g., admin overrides), we spun up a small Node WebSocket server using `ws`, limiting its scope to a single “control” channel. I also added backpressure handling: if the client lagged, the server queued updates up to a 10‑message cap before dropping older ones.

**Result:**  
Latency dropped from ~4 s to <200 ms for most users; API calls fell by 70%. The dashboard’s refresh rate improved, boosting user engagement metrics by 12% over two weeks. I learned that choosing the right transport—SSE for one‑way streams, WebSockets only when needed—can dramatically reduce complexity and cost while delivering real‑time performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
