---
qid: ing_fecf06f6a2__star__local
question: 'Explain: Types of Service Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 383
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:21-05:00'
sources: []
---

**Situation**  
At my previous startup we were moving from a monolithic recommendation engine to a micro‑service architecture for the personalization layer. The team noticed that new model deployments weren’t being picked up by existing services; manual IP updates caused outages.

**Task**  
I had to design an automated service discovery mechanism so every inference micro‑service could locate fresh model endpoints without hard‑coding addresses, while keeping latency low and scaling to 200+ instances.

**Action**  
We adopted a **client‑side registry approach** using Consul. Each new model container registers its health‑check URL on startup. Clients query the local Consul agent for available instances, apply round‑robin with weighted health scores, and cache results for 30 s to avoid DNS lookup overhead. For global reach we also exposed a **DNS SRV record** that maps logical names (e.g., `recommendation.service.internal`) to current IP ranges, allowing external services to discover the cluster via standard DNS queries. We implemented a fallback: if Consul is unreachable, clients revert to static environment variables. I wrote the registration script in Go and integrated it into our CI/CD pipeline.

**Result**  
Deployment latency dropped from 3 min manual updates to under 10 s automatic roll‑outs. The system handled 4× traffic spikes without a single service outage. I learned that blending client‑side discovery with DNS fallback gives both speed and resilience, and that keeping health checks lightweight is key to avoiding false positives in large clusters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
