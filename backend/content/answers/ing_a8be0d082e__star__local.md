---
qid: ing_a8be0d082e__star__local
question: 'Explain: Calculate usage — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 356
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:10:25-05:00'
sources: []
---

**Situation:**  
In my last role I led the redesign of our internal analytics dashboard for a large social‑media platform that handled ~1 B tweets per day. The previous system reported “daily active users” incorrectly, inflating numbers by counting bots and duplicate sessions.

**Task:**  
I was tasked with building a robust usage‑calculation service that could ingest clickstream data in real time, deduplicate sessions, filter out known bot patterns, and produce accurate daily, weekly, and monthly user metrics for the product team—within 3 weeks.

**Action:**  
I architected a microservice on Kubernetes using Go and Kafka. The pipeline consumed raw events from our event bus, applied a sliding‑window stateful Bloom filter per user to detect session starts/ends, and used a Redis cache for quick lookup of known bot signatures (IP ranges, User‑Agent patterns). I added a rate‑limit back‑off that throttled suspicious IPs. For aggregation, I employed ClickHouse with time‑series tables, enabling fast roll‑ups via materialized views. The service exposed a gRPC API and pushed metrics to Prometheus for real‑time dashboards.

**Result:**  
The new system reduced false positives by 92 %, giving the product team a 15 % more accurate DAU figure. Query latency dropped from 12 s to <200 ms, and we saved $18k/month on infrastructure by consolidating services. I learned that careful state management and hybrid storage (in‑memory + columnar) can drastically improve both accuracy and performance in large‑scale usage analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
