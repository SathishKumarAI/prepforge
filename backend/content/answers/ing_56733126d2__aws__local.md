---
qid: ing_56733126d2__aws__local
question: 'Explain: Create and manage ILM policies — Index lifecycle management (ILM)
  in Elasticsearch | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 463
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:36-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑engineering team for a global e‑commerce platform, we had to reduce storage costs on our Elasticsearch cluster that handled 5 TB of daily log data and served real‑time analytics for 1 M active users. The challenge was to keep hot data fast enough for dashboards while moving cold data to cheaper tiers without manual intervention.

**Action (Technical)**  
I designed an **Index Lifecycle Management (ILM) policy** that automated the migration path:  

| Phase | Action | AWS Service Used |
|-------|--------|------------------|
| Hot   | Keep index in EBS‑SSD for 7 days | Amazon EC2 & EBS |
| Warm  | Move to instance store on spot instances (80% cost reduction) | Amazon EC2 Spot Instances |
| Cold  | Archive to S3 Glacier Deep Archive | Amazon S3, S3 Glacier |

The policy leveraged Elasticsearch’s **rollover** and **delete** actions; I scripted the policy in YAML, validated with `curl` against the cluster, and deployed via Terraform. I added a monitoring Lambda that fired alerts if rollover failed, ensuring 99.9% uptime.

**Result**  
Within three months:  

- Storage cost dropped from $12k/month to $4.5k/month (62 % savings).  
- Query latency for hot indices stayed <200 ms; warm/cold queries were off‑loaded without impacting dashboards.  
- Operational overhead fell by 70 % as the ILM policy removed manual index lifecycle scripts.

**Learning & Ownership**  
I documented failure scenarios—e.g., spot instance preemption—and built a fallback to on‑demand instances, showing **Ownership** and **Dive Deep**. The success reinforced my bias for action: I prototyped in 48 h, iterated based on telemetry, and delivered measurable results that aligned with the customer’s need for fast insights.

*Leadership Principles highlighted:* Customer Obsession, Ownership, Dive Deep, Bias for Action, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
