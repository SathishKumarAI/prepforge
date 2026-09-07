---
qid: ing_06354e803a__aws__local
question: 'Explain: Zone-Failure-Resilient OpenSearch at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 452
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:57-05:00'
sources: []
---

**Situation / Task**  
At Uber I led the redesign of our search platform for real‑time trip matching. The legacy OpenSearch cluster was a single AZ per region, so a zone failure would take 30 % of riders offline and cause SLA violations. My goal: build a *zone‑failure‑resilient* OpenSearch architecture that kept query latency < 120 ms even during an AZ outage.

**Action**  
1. **Architecture** – Deployed three *OpenSearch* clusters (one per AZ) in a single region, each with 5 data nodes and 2 coordinating nodes.  
2. **Cross‑Cluster Replication (CCR)** – Set up CCR so every index replicated to the two other zones with a write latency < 200 ms.  
3. **AWS Services** – Used *Amazon OpenSearch Service* for managed clusters, *Elastic Load Balancing* to route traffic, and *AWS CloudWatch* + *EventBridge* to auto‑scale coordinators when an AZ reported high error rates.  
4. **Cost/Availability Trade‑off** – 3× the storage cost but we achieved 99.999 % uptime vs. 99.9 % previously.  
5. **Testing** – Simulated zone outages in a staging region, measured query latency and hit‑rate; tuned shard allocation to keep replicas local.

**Result**  
- *Availability*: 99.999 % over 12 months, a 10× improvement.  
- *Latency*: Median search latency dropped from 200 ms to 110 ms during failures.  
- *Cost*: +25 % of spend, but revenue impact avoided was >$5M per year.

**Leadership Principles**  
- **Customer Obsession** – Ensured riders never saw degraded service.  
- **Ownership & Dive Deep** – Owns end‑to‑end reliability, examined shard allocation, replication lag, and network paths until root cause understood.  

Bar‑raiser cues: clear ownership narrative, quantified impact (latency, uptime), deep dive into CCR tuning, and learning loop from failure simulations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
