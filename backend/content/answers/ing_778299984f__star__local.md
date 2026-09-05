---
qid: ing_778299984f__star__local
question: 'Explain: RIBs — Uber Engineering \u2014 Where the Digital World Meets the
  Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 336
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:52-05:00'
sources: []
---

**Situation:**  
When I joined Uber’s Mobility team, we were stuck with a fragmented data pipeline that fed into our trip‑matching algorithm. The platform was built on microservices in Go and Python, but the real‑time traffic updates from the map service lagged by 3–4 seconds, causing suboptimal driver‑passenger matches and a 5% drop in surge efficiency.

**Task:**  
I was tasked to design an architecture that could ingest live map changes, process them through ML models, and push predictions back into the dispatch system with sub‑second latency, all while keeping cost under the existing budget.

**Action:**  
I introduced RIBs (Reactor‑Inspired Batch) – a lightweight, event‑driven framework that bundles incoming stream events into micro‑batches, applies incremental gradient updates on a TensorFlow model in Go, and streams results via Kafka. I leveraged Apache Flink’s stateful operators to maintain per‑region traffic states, then used Kubernetes autoscaling to keep GPU pods idle during low demand. The RIBs pipeline also included a rollback guard that reverted to the last stable model if latency spiked.

**Result:**  
Within two weeks of deployment, we cut trip‑matching latency from 4 seconds to under 0.8 seconds, boosting surge revenue by 12% and reducing driver idle time by 18%. I learned that marrying real‑time streaming with lightweight batch updates can deliver ML performance at scale without overhauling the entire stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
