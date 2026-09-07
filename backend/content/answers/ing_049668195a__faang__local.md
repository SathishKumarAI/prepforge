---
qid: ing_049668195a__faang__local
question: 'Explain: Choose Vertical Scaling When — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 465
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:09-05:00'
sources: []
---

**Vertical Scaling (Scale‑Up) – When to Pick It**

| Step | What to say |
|------|-------------|
| **Clarify** | “We’re deciding between adding resources to a single node (CPU/RAM/SSD) or adding more nodes.”  Ask: *What is the workload pattern?* *Is there a single‑point bottleneck (DB, cache)?* *Do we have a strict SLA for latency and throughput?* |
| **Approach** | 1. Identify the *critical resource*: CPU‑bound query engine, memory‑heavy ML model inference, or I/O‑limited storage. 2. Estimate how much extra capacity is needed per unit (e.g., +50 % RAM). 3. Verify that the application is *stateless* or can tolerate a single node failure. |
| **Depth** | • **Pros** – Simpler architecture; no sharding logic, lower latency because data stays local. <br>• **Cons** – Limited by hardware ceilings (e.g., max 1 TB RAM). <br>• **Cost** – Up to $5–$10 per extra CPU core or GB of memory on cloud VMs; often cheaper than spinning up many small nodes until you hit the ceiling. |
| **Edge Cases** | • *Memory‑bound ML inference*: a single GPU node can process millions of requests per second, while adding more CPUs gives little benefit.<br>• *Hot‑spot DB rows*: if one row dominates traffic, vertical scaling of that DB instance helps; otherwise sharding is required. |
| **Optimize & Communicate** | Highlight that vertical scaling is the first line of defense when < 10 % of a node’s resources are underutilized and the workload is *monolithic*.  Explain trade‑offs: higher per‑instance cost vs. lower operational overhead, and how to monitor for the “sweet spot” where adding more cores no longer improves throughput.  Conclude that once you hit hardware limits or need multi‑region availability, you must pivot to horizontal scaling. |

*Word count: ~190.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
