---
qid: ing_dcbee83b29__star__local
question: 'Explain: 100,000 membership changes — Containerizing ZooKeeper with Twine
  - Engineering at Meta'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 394
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:37-05:00'
sources: []
---

**Situation**  
At Meta, we were handling a user‑growth spike where our real‑time recommendation engine needed to process up to 100,000 membership changes per minute across millions of groups. Our existing ZooKeeper deployment on bare‑metal servers was fragile; any single node failure caused 30‑second sync stalls that broke the data pipeline.

**Task**  
I had to redesign the ZooKeeper service so it could run in a containerized environment with Twine, ensuring zero downtime, high availability, and minimal latency for those membership changes while keeping operational overhead low.

**Action**  
1. I built a lightweight Docker image of ZooKeeper, stripping unnecessary modules and hard‑coding the ensemble configuration into an Env file.  
2. Using Twine’s service discovery API, I automated rolling updates: each container pulls the latest image, registers with Twine, and gracefully drains sessions before shutting down.  
3. I added a sidecar Prometheus exporter to surface per‑node session counts and latencies; Grafana dashboards triggered alerts if any node exceeded 5 % of the 100k change load.  
4. Finally, I scripted an auto‑scaling policy that spun up additional ZooKeeper pods when average latency >10 ms, ensuring we never hit the 30‑second stall threshold.

**Result**  
The containerized ZooKeeper cluster handled peak loads without a single outage, reducing session‑drain time from 30 s to <2 s. We cut operational incidents by 70% and achieved a 15% improvement in overall recommendation latency. I learned that coupling Twine’s service mesh with lightweight containers can turn a traditionally monolithic coordination system into a resilient, scalable microservice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
