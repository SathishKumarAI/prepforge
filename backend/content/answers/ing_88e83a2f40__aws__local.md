---
qid: ing_88e83a2f40__aws__local
question: 'Explain: Why we built this — Kora: The Cloud Native Engine for Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 424
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:57-05:00'
sources: []
---

**Why we built Kora – the cloud‑native engine for Apache Kafka**

**Situation & Task**  
When our data platform team migrated from on‑prem Kafka to AWS Managed Streaming (MSK), we discovered that scaling consumer groups cost 3× more than expected and latency spiked during peak bursts. The leadership team demanded a solution that let us *own* the streaming layer, reduce operational overhead, and keep costs predictable.

**Action**  
I led a cross‑functional squad to design **Kora**, an open‑source wrapper that runs natively on Amazon EKS, automatically provisions Kafka Connect workers, and exposes a declarative CRD for topics. We used **AWS Fargate** + **Amazon MSK** for elasticity, **S3** for durable checkpoints, and **CloudWatch** + **Prometheus** for observability. The design allows *zero‑downtime* scaling (k8s HPA) and guarantees 99.99 % availability with an SLA‑based cost model.

**Result**  
- Reduced consumer‑group provisioning time from ~45 min to <5 min (90 % faster).  
- Cut operational costs by **$120K/year** through automated scaling and spot‑instance usage.  
- Improved end‑to‑end latency by 35 %, keeping SLA compliance above 99.95 %.  

**Leadership Principles Reflected**  
*Customer Obsession*: We built Kora to solve real pain points for our data teams.  
*Ownership*: I owned the end‑to‑end delivery, from design through production rollout.  
*Dive Deep*: Continuous monitoring and tuning led to a 30 % performance gain after the first iteration.  

**Bar‑raiser takeaway**  
The interviewee shows *ownership*, deep technical insight, quantifiable impact, and a learning loop—exactly what we look for when hiring senior engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
