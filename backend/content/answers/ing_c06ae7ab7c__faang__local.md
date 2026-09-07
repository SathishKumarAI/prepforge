---
qid: ing_c06ae7ab7c__faang__local
question: 'Explain: AWS Marketplace — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 549
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:09:13-05:00'
sources: []
---

**Clarify**  
You’re asking how Elastic’s cloud offering is priced on AWS Marketplace and what the difference is between the *serverless* (Elastic Cloud on Amazon OpenSearch Service) and *hosted* (Elastic Cloud on EC2) models. I’ll assume you want a quick comparison of cost drivers, billing granularity, and typical use‑cases.

**Approach**  
1. Outline Elastic’s two Marketplace products.  
2. Break down their pricing components (compute, storage, data transfer).  
3. Highlight key differences in billing frequency and scaling behavior.  
4. Summarize when each model is preferable.

**Depth**  
- **Serverless (Elastic Cloud on AWS OpenSearch Service)**  
  - *Compute*: Pay‑per‑second for the underlying compute capacity you consume; no idle charges if traffic drops to zero.  
  - *Storage*: Charged per GB of data stored in S3‑compatible buckets, plus snapshot storage.  
  - *Network*: Inbound traffic is free; outbound egress billed at AWS rates.  
  - *Scaling*: Auto‑scales with query load; you only pay for the capacity used during active periods.

- **Hosted (Elastic Cloud on EC2)**  
  - *Compute*: Fixed instance families (t3, m5, r5, etc.) billed per hour or month. Even if idle, you still pay.  
  - *Storage*: Elastic Block Store (EBS) volumes; cost is volume size × price per GB‑month.  
  - *Network*: Similar inbound/outbound rates as serverless, but outbound may be higher due to larger data movements.  
  - *Scaling*: Manual or autoscaling groups; you provision capacity ahead of time.

**Edge Cases**  
- High‑throughput, bursty workloads benefit from serverless’s fine‑grained billing.  
- Long‑running analytics pipelines with predictable load are cheaper on hosted instances because you can reserve instances and leverage spot pricing.  
- Data egress to external clouds is more expensive in the serverless model if large volumes leave AWS.

**Optimize & Communicate**  
For cost optimization, recommend starting with serverless for low‑to‑medium traffic sites; switch to hosted when you hit a predictable peak or need reserved capacity discounts. Explain that Elastic’s marketplace pricing abstracts licensing, so you only see the underlying AWS charges plus Elastic’s service fee—making budgeting straightforward once you map usage patterns to the right model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
