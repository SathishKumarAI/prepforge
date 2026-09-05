---
qid: ing_a01b3e4dcf__star__local
question: 'Explain: Success Response (200 OK) — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 408
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:32-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with revamping the inference API for a real‑time recommendation engine that served over 3 million requests per day. The existing monolithic deployment was hitting a 4% error rate, mostly “503 Service Unavailable” due to overloaded model servers.

**Task:**  
I needed to design a scalable load balancer that would route traffic efficiently across multiple inference containers while guaranteeing that every request received a 200 OK when the system was healthy and gracefully handling overloads.

**Action:**  
I built an Nginx‑based reverse proxy with dynamic upstreams fed by Kubernetes readiness probes. I implemented weighted round‑robin based on real‑time CPU/memory metrics exposed via Prometheus, coupled with a circuit‑breaker that dropped traffic to a pod when its latency exceeded 200 ms for three consecutive checks. The LB also served as a health checker: if a backend returned non‑200 or timed out, Nginx automatically removed it from the pool until the readiness probe succeeded again. I added TLS termination and HTTP/2 support for lower overhead.

**Result:**  
After deployment, 99.8% of requests hit the system with a 200 OK, dropping the overall error rate to <0.5%. Latency improved by 35%, and we increased request throughput from 3 M/day to 4.5 M/day without additional hardware. I learned that coupling dynamic health checks with intelligent routing can turn a fragile monolith into a robust, self‑healing service layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
