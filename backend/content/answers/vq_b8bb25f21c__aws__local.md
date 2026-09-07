---
qid: vq_b8bb25f21c__aws__local
question: what is rack awareness?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 523
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:11:02-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Question:** *What is rack awareness in a distributed system?*  

**Situation / Task**  
I was leading the migration of our on‑prem Hadoop cluster to an Amazon EMR cluster for a 5‑year data‑science pipeline that processed ~2 TB/day. The SLA required < 30 min turnaround and cost ≤ $1.50/GB.  

**Action**  
To avoid single‑rack failures, I enabled *Rack Awareness* in the YARN scheduler and configured EMR’s EC2 launch template with **Tenancy: dedicated** instances across three Availability Zones (AZs). Each AZ represented a rack; we used **EMR Managed Spot Instances** for cost savings while keeping at least one on‑demand instance per rack. I also set up CloudWatch metrics to monitor *rack‑level node health* and triggered Lambda alerts if > 20 % of nodes in a rack failed.  

- **AWS Services:** EMR, EC2 (dedicated & spot), CloudWatch, Lambda  
- **Scalability/Availability:** By spreading racks across AZs, we achieved 99.9 % availability; rack‑level failure detection prevented data loss and reduced job retries by 45%.  
- **Cost Trade‑off:** Spot usage lowered compute cost by 35 %, while on‑demand “spare” nodes ensured recovery latency < 5 min.  

**Result**  
We met the SLA with a *30%* faster job completion (from 55 min to 38 min) and cut infrastructure spend from $8k/month to $5.2k/month—directly impacting the product’s revenue margin.  

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered a reliable, fast pipeline that met user expectations.  
- **Ownership & Dive Deep:** Took full responsibility for fault tolerance and drilled into rack‑level failure patterns to design a robust solution.

**Bar‑raiser checkpoints**  
- Demonstrated *ownership* by leading the migration end‑to‑end.  
- Showed *deep technical dive* with specific AWS services, metrics, and trade‑offs.  
- Quantified impact (time & cost savings).  
- Reflected on a failure scenario (spot instance preemption) and how it informed the rack‑spare strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
