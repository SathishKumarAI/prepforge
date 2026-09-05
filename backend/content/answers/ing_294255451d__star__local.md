---
qid: ing_294255451d__star__local
question: 'Explain: Routing Strategies — Ai Gateways And Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 353
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:50:50-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a multi‑tenant SaaS platform that offered three different NLP models (sentiment, summarization, intent) to customers through a single REST API. By the third quarter the average latency had risen from 120 ms to 250 ms and support tickets about “model slowness” doubled.

**Task:**  
I was tasked with redesigning the routing layer so that each request would be sent to the most appropriate model instance, reducing overall response time while keeping cost per inference under $0.0003.

**Action:**  
1. Implemented an AI gateway using Envoy with a custom Lua filter that inspected the `Content-Type` and a small “model‑hint” header.  
2. Built a lightweight service registry in Consul that stored health, load, and version info for each model pod.  
3. Added a decision engine written in Go that queried the registry every 5 seconds, calculated a weighted score (latency + CPU usage), and updated Envoy’s virtual host routes via its dynamic routing API.  
4. Deployed a fallback circuit‑breaker to redirect traffic to a “fallback” model when any instance exceeded a 200 ms threshold.

**Result:**  
Latency dropped to an average of 95 ms, with peak requests under 150 ms, cutting inference costs by 18%. The gateway also reduced support tickets by 70%, and I documented the routing logic in our internal wiki for future model rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
