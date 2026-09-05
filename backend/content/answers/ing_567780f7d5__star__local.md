---
qid: ing_567780f7d5__star__local
question: 'Explain: Availability patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 373
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:57-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the recommendation engine for a streaming service that had just hit 12 million monthly users. The previous monolith served requests from a single data center and had a 99.9% uptime SLA, but any outage meant a 5–10 minute loss of personalized content for all users.

**Task** – I needed to shift the system to a highly available architecture that could tolerate both node failures and regional outages while keeping latency under 200 ms per request.

**Action** – I broke the problem into three availability patterns: *active‑active*, *canary release*, and *fallback*.  
1. I deployed the model service as a Kubernetes StatefulSet across two AWS regions, using etcd for shared state and leader election to avoid split‑brain.  
2. For traffic routing I used AWS Global Accelerator with health checks every 30 s; if one region’s pods fell below 95% availability, traffic was automatically redirected to the other region.  
3. To minimize risk during rollouts, I introduced a canary release pipeline: new model versions were served to 2% of traffic first, monitored for error rate spikes (threshold set at 0.5%), and only promoted if metrics stayed below that.

**Result** – After deployment we achieved 99.9999% uptime over the next six months, reduced mean time to recovery from 12 min to under 30 s, and maintained <180 ms latency for 95% of requests. I learned that combining regional replication with fine‑grained health checks and canary promotion is essential for building truly resilient ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
