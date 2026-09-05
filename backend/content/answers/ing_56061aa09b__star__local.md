---
qid: ing_56061aa09b__star__local
question: 'Explain: Core APIs — Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 406
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:57-05:00'
sources: []
---

**Situation**  
At my last startup we were shipping an online recommendation service that had to scale from 10k to 1M concurrent users during holiday spikes. The existing monolith kept all traffic in a single data center and the latency started creeping above 400 ms.

**Task**  
I was tasked with designing a load‑balancing layer that could route requests across multiple inference nodes, support zero‑downtime deployments, and expose clean APIs for health checks, metrics, and dynamic scaling.

**Action**  
First I defined three core API endpoints:  
1. **/healthz** – returns node status (CPU, GPU usage, model version) so the balancer can prune unhealthy workers.  
2. **/predict** – a stateless gRPC service that accepts a batch of user IDs and returns scores; I added request‑weighting headers to let the balancer perform weighted round‑robin based on current inference latency.  
3. **/metrics** – publishes Prometheus metrics (request count, latency percentiles, error rate) for auto‑scaling rules.  

I wired these into a custom Envoy front‑end that used service discovery from Consul. The balancer ran a simple exponential backoff retry policy and updated routing tables every 5 s based on healthz responses.

**Result**  
Latency dropped from 400 ms to 120 ms under peak load, error rates fell by 70%, and we could roll out new model versions with no service interruption. I learned that exposing lightweight health and metrics APIs is the backbone of a resilient, auto‑scalable ML inference system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
