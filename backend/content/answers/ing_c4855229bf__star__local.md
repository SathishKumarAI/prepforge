---
qid: ing_c4855229bf__star__local
question: How Does Long Polling Work? — Long Polling vs WebSockets - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 326
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:02:57-05:00'
sources: []
---

**Situation:**  
While building a real‑time model monitoring dashboard for a credit‑risk scoring system, our internal data pipeline produced new predictions every minute, but the front‑end had to show them as soon as they were ready without overwhelming the server with frequent polling.

**Task:**  
I needed to deliver near‑instant updates to users while keeping the backend load low and avoiding the complexities of WebSocket deployment in a corporate firewall.

**Action:**  
I implemented long polling on the Flask API. Each client sent a request that the server held open until a new prediction batch was available or a 30‑second timeout occurred. The server stored pending requests in an in‑memory queue (Redis) keyed by user session. When the ETL job finished, it pushed the result to Redis; a worker then popped any waiting clients and responded immediately. I added exponential backoff for failed connections and used gzip compression to keep payloads under 5 KB.

**Result:**  
Latency dropped from ~30 seconds (standard polling) to <2 seconds on average, with CPU usage staying below 15% compared to 45% during aggressive polling. Users reported a smoother experience, and I learned that proper queueing and timeout tuning can make long polling a viable alternative to WebSockets when infrastructure constraints exist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
