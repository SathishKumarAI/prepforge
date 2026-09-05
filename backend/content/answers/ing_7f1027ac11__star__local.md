---
qid: ing_7f1027ac11__star__local
question: 'Explain: Frontend Listener — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 343
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:47:44-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a real‑time analytics dashboard that served millions of concurrent users. During peak traffic the front‑end API gateway started timing out and the user experience degraded.

**Task:**  
I was asked to design a load balancer with an intelligent “frontend listener” that could detect failing backends, route traffic dynamically, and keep latency under 200 ms while scaling horizontally.

**Action:**  
I built a custom HTTP/2 listener in Go using `net/http2`. It parsed the request path, extracted user tokens, and applied a weighted round‑robin algorithm based on real‑time health probes (every 5 s). For each backend I maintained a sliding window of response times; if latency spiked or errors exceeded 3%, that instance was marked “unhealthy” and temporarily removed from the pool.  
To handle sudden spikes, the listener throttled requests with an exponential backoff queue and exposed metrics to Prometheus for auto‑scaling in Kubernetes. I also integrated a WebSocket fallback for live data streams so clients could reconnect without full page refresh.

**Result:**  
After deployment, average request latency dropped from 350 ms to 120 ms, and error rates fell below 0.01%. The system handled a 4× traffic increase during the product launch with no downtime. I learned that coupling real‑time health metrics with a lightweight listener can turn a fragile gateway into a resilient, self‑healing load balancer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
