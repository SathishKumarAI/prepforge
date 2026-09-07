---
qid: ing_28520b7317__aws__local
question: 'Explain: Appendix – Cost calculations — Uncovering Kafka\u2019s Hidden
  Infrastructure Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 516
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:48-05:00'
sources: []
---

**Situation (S)**  
At my previous role we migrated a real‑time analytics pipeline to Amazon MSK (Kafka). A hidden spike in monthly spend—$18 k—was traced back to “idle” broker storage and unmonitored EBS snapshots that were automatically created by the cluster.

**Task (T)**  
I owned the cost‑optimization effort: quantify the hidden expense, design a sustainable monitoring solution, and reduce the budget impact by 35 % without hurting latency or durability.

**Action (A)**  
1. **Dive Deep into metrics** – I scripted an AWS Lambda that queried MSK broker CloudWatch metrics (`BrokerStorageBytes`, `SnapshotSize`) every hour and pushed them to Amazon Timestream for retention.  
2. **Design a Cost‑Visibility Layer** – Built a Grafana dashboard powered by Timestream, exposing daily storage growth per topic and snapshot frequency.  
3. **Automate Cleanup** – Added a Lambda that deletes snapshots older than 30 days, triggered via EventBridge on the metric threshold (`StorageBytes > 80%`).  
4. **AWS Services & Trade‑offs** – Leveraged Timestream for low‑cost time series storage (≈$0.15/GB/month) vs. S3 ($0.023/GB). The Lambda cost <$1/day, while saving ~$6 k/month in EBS snapshot charges.

**Result (R)**  
Within two weeks the hidden costs fell from $18 k to $12 k per month— a 33 % reduction—while maintaining 99.99 % availability and zero data loss. The dashboard is now part of our quarterly cost‑review, and I documented the process in Confluence for cross‑team reuse.

**Leadership Principles Highlighted**  
- **Ownership & Bias for Action** – Took full responsibility and acted swiftly.  
- **Dive Deep** – Extracted granular metrics to uncover unseen expenses.  

Bar‑raisers will note my proactive ownership, depth of analysis, quantifiable impact, and the lesson that “monitor what you pay for” is a continuous discipline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
