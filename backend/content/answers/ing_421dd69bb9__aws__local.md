---
qid: ing_421dd69bb9__aws__local
question: 'Explain: The base workloads for consideration — Uncovering Kafka\u2019s
  Hidden Infrastructure Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 439
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:28-05:00'
sources: []
---

**Situation & Task**  
In my last role I was tasked with reducing the “hidden” infrastructure spend of our real‑time analytics pipeline that used **Kafka** on EC2 and EBS volumes. The team had no visibility into burstable traffic or idle partitions, so costs were ballooning by ~15 % YoY.

**Action (Design & AWS Services)**  
1. **Observability Layer** – I introduced **Amazon CloudWatch Metrics** for `BurstBalance`, `ConsumerLag` and EBS I/O per topic, publishing them to a dedicated **Kafka‑to‑CloudWatch exporter** on a small Fargate task.  
2. **Cost Attribution** – Leveraged the **AWS Cost Explorer API** and **Tagging (Project/Environment)** to map CloudWatch metrics back to cost centers.  
3. **Auto‑Scaling & Spot Integration** – Added an **Amazon MSK Auto Scaling policy** that scales broker nodes based on `ConsumerLag` thresholds, and switched idle brokers to **EC2 Spot Instances** via the **MSK Managed Streaming for Kafka** feature.  
4. **Alerting & Dashboards** – Built a CloudWatch Dashboard with alarms for `BurstBalance < 20%`, automatically triggering an OpsGenie incident that spun down unnecessary partitions.

**Result (Quantified Impact)**  
- Reduced EC2/Spot spend by **$42k/month** (~12 % of total streaming budget).  
- Cut idle broker hours from 18 hrs/day to 4 hrs/day.  
- Maintained SLA >99.9 % with zero data loss.

**Leadership Principles Highlighted**  
- **Ownership** – I took end‑to‑end responsibility for cost visibility and mitigation.  
- **Dive Deep** – Built a custom exporter, parsed raw Kafka metrics, and correlated them with AWS billing APIs.  

**Bar‑raiser Takeaway**  
Showed ownership, deep technical insight, clear data-driven results, and a lesson: “If you can’t see the metric, you can’t control the cost.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
