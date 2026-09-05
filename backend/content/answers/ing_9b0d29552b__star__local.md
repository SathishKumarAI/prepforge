---
qid: ing_9b0d29552b__star__local
question: A user closes the tab halfway through a streamed response. What happens
  on the server, and what should happen?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 329
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:24-05:00'
sources: []
---

**Situation:**  
In a production chatbot service we were delivering long‑form answers via Server‑Sent Events (SSE). One day a user on the front‑end closed their browser tab while the model was still generating a 12‑minute response. The SSE stream abruptly dropped, but our server kept computing until completion.

**Task:**  
I needed to stop the expensive generation process as soon as the client disconnected, free GPU resources, and ensure no orphaned processes lingered that could degrade throughput or inflate costs.

**Action:**  
First, I added a “disconnect” listener on the SSE socket in Node.js. When triggered, it sent an interrupt signal (SIGTERM) to the worker thread handling the OpenAI inference call. The worker caught the signal, broke out of the token loop, and released the GPU memory immediately. On the server side, I updated the job queue to mark such jobs as “canceled” so downstream monitoring wouldn’t count them toward SLA metrics. Finally, I instrumented logs to capture the exact time between disconnect and cancellation for future capacity planning.

**Result:**  
The average cancellation latency dropped from ~15 s to <1 s, cutting idle GPU hours by 30% during peak periods. Costs fell accordingly, and our monitoring dashboards now reflected accurate throughput metrics. I learned that graceful shutdown hooks are essential for streaming services to prevent resource leaks and maintain cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
