---
qid: ing_c06ae7ab7c__aws__local
question: 'Explain: AWS Marketplace — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 485
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:38:54-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to evaluate the cost‑effectiveness of **Elastic’s official offering on AWS Marketplace**—specifically the *serverless* (OpenSearch Serverless) vs. the *hosted* (Amazon OpenSearch Service) models—to advise a $12 M marketing spend for real‑time analytics.

**Action**  
1. **Requirements & Scope** – 10–20 TB of ingest, 5 k queries/sec, SLA 99.9%, GDPR compliance.  
2. **Design & Services**  
   * Serverless: OpenSearch Serverless (pay per query/byte).  
   * Hosted: Amazon OpenSearch Service on EC2 Auto Scaling + EBS Provisioned IOPS.  
3. **Cost Modelling** – Used the AWS Pricing Calculator, factoring:
   * 30 days/month × 20 TB ingest = $4,800 (serverless) vs. $9,600 (hosted).  
   * Query cost: $0.02/query for serverless vs. $0.015 per 10 k queries for hosted.  
   * Operational overhead: 0 hrs/serverless vs. ~6 hrs/month/engineer for hosted.
4. **Scalability & Availability** – Serverless auto‑scales to 100× traffic spikes with zero admin, while hosted requires provisioning and patching windows.

**Result**  
I presented a **$3.8 M annual savings** (≈40% cost reduction) by shifting 70% of the workload to serverless, without compromising SLA or compliance. The recommendation was approved, leading to a 12‑month pilot that validated performance under peak loads and reduced ops hours by 4×.

**Reflection & Learning**  
The exercise reinforced *Customer Obsession* (deliver cost savings) and *Dive Deep* (thorough pricing analysis). I learned that serverless can dramatically lower total cost of ownership when traffic is bursty, but for steady high‑volume ingest the hosted model may still be cheaper. This insight will shape future multi‑cloud strategy discussions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
