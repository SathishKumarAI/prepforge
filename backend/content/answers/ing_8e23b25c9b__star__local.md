---
qid: ing_8e23b25c9b__star__local
question: 'Explain: Types of Health Checks — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 313
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:08-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with launching a new real‑time analytics platform for a healthcare startup. The service had to stay online 24/7, so we built an NGINX load balancer fronting three stateless API nodes.

**Task:**  
I needed to design the health check strategy that would detect both “alive” and “ready” failures without causing false positives during heavy traffic bursts.

**Action:**  
I implemented two tiers of checks. First, a *TCP ping* every 5 seconds to confirm the socket was open—cheap and fast for detecting basic connectivity loss. Second, an HTTP `/healthz` endpoint that returned JSON with CPU, memory, and database latency metrics. This endpoint ran only after the node had warmed up (warm‑up flag) and used a *slow start* algorithm: it initially reported “unhealthy” until the response time stayed below 200 ms for three consecutive checks. I also added an exponential backoff retry in the LB to avoid flapping during transient spikes.

**Result:**  
After deployment, we saw a 40 % drop in false‑positive failovers and the platform maintained 99.95 % uptime over six months. The dual health‑check design taught me that combining lightweight connectivity tests with deeper application checks yields both speed and reliability in production load balancing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
