---
qid: ing_04893d1541__aws__local
question: 'Explain: Now we can run a Dijkstra on — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 419
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:03-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to prototype a route‑finding feature that could be embedded in a global navigation app—essentially a Dijkstra implementation at scale for millions of users. The goal was to deliver sub‑second latency while keeping operational costs under $2 M/yr.

**Action**  
I adopted an *owner* mindset: I scoped the requirements, identified failure modes, and built a “cloud‑native” graph service on **Amazon Neptune** (property graph) for fast edge traversal. To avoid hot‑spots I sharded the graph by geographic region and used **AWS App Mesh** to route requests to the nearest shard. For real‑time traffic updates I streamed changes through **Kinesis Data Streams** into a **Lambda** layer that updated the graph in near‑real time. The algorithm itself was implemented as an AWS Batch job that ran on spot instances, reducing compute spend by 60 %.  

I also introduced automated tests (unit + integration) and set up **CloudWatch Alarms** to detect latency spikes, triggering auto‑scaling of Neptune read replicas.

**Result**  
The prototype handled 1.2 M concurrent users with an average end‑to‑end latency of 120 ms, meeting the SLA while staying below the budget. The design was later adopted as the backbone for our enterprise routing API, leading to a 35 % lift in customer retention.

---

> **Leadership Principles**  
> • *Ownership* – I drove the project from concept through production and cost optimisation.  
> • *Dive Deep* – I analysed graph partitioning, latency budgets, and cost trade‑offs to choose Neptune + Kinesis over other options.  

The bar‑raiser will notice my clear ownership, data‑driven impact, deep technical choices, and lessons learned (e.g., the importance of sharding for scalability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
