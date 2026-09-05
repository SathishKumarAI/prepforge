---
qid: ing_28520b7317__star__local
question: 'Explain: Appendix – Cost calculations — Uncovering Kafka\u2019s Hidden
  Infrastructure Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 342
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:01-05:00'
sources: []
---

**Situation:**  
At my previous company, we were running a real‑time analytics pipeline on Apache Kafka to feed dashboards for our sales team. The monthly bill had jumped from $12k to $28k, but the data engineer dashboard only showed increased broker memory usage; no obvious spike in traffic.

**Task:**  
I was tasked with auditing the infrastructure to pinpoint where the hidden costs were coming from and propose a cost‑effective redesign without sacrificing throughput or reliability.

**Action:**  
First, I enabled detailed JMX metrics on each broker and used Prometheus + Grafana to visualize disk usage, CPU, and network I/O over a month. I discovered that many topics had high replication factors (3x) but low partition counts, causing under‑utilized SSDs and frequent leader re‑elects that inflated network traffic. I also found that the default log retention policy kept 7 days of data for every topic, even those with low access patterns. Using Kafka’s `compact` cleanup policy on legacy logs, I reduced disk consumption by 35%. Finally, I rewrote the producer code to batch messages in larger windows and switched from SSD to cost‑effective HDDs where latency was acceptable.

**Result:**  
The reconfiguration cut our monthly Kafka bill to $15k—over a 50% savings—and improved overall cluster stability. I learned that hidden costs often lie in misaligned retention policies, over‑provisioned replication, and unoptimized producer batching; careful metric analysis can reveal actionable levers for cost control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
