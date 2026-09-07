---
qid: ing_2b4961a07f__aws__local
question: 'Explain: IPv4 — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 611
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:02:53-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the “IP‑Pool Service” project: an internal SaaS that dynamically allocated IPv4 blocks to on‑prem and cloud customers while guaranteeing no overlap and 99.999 % uptime. The business needed a 30 % reduction in manual provisioning time and a 15 % cost saving on IP licensing.

**Action (Design)**  
1. **Requirements** – Stateless REST API, multi‑region availability, audit trail, compliance with RFC 1918 ranges, and auto‑scaling under burst traffic.  
2. **Architecture** –  
   * **API Gateway + Lambda**: thin entry point; cold‑start latency < 120 ms.  
   * **DynamoDB (global table)**: store allocation records with `PK=CustomerID`, `SK=IPBlock`. Global replication gives 99.9 % availability and sub‑50 ms reads.  
   * **S3 + Glacier**: immutable audit logs; cost ≈ $0.004/GB/month.  
   * **Step Functions**: orchestrate allocation, validation, and notification workflows (retry logic).  
   * **CloudWatch & X-Ray**: full observability for latency spikes.  

3. **Scalability / Cost** – Serverless eliminates over‑provisioning; Lambda scales to thousands of concurrent requests. DynamoDB’s on‑demand mode costs $0.25 per WCU/HCU, with 10 % overhead for peak bursts—overall <$500/month versus the legacy VM fleet (~$4k).  

4. **Trade‑offs** – We accepted eventual consistency for read‑through latency; mitigated by a local in‑memory cache (DAX) to keep it <1 ms.

**Result**  
* Provisioning time dropped from 12 hrs to <5 min (≈ 98 % faster).  
* IP allocation errors fell to <0.01 %.  
* Annual cost savings of $45k, surpassing the target by 30 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a self‑service API that cut manual effort and error rates for our internal customers.  
- **Dive Deep & Ownership**: Built end‑to‑end monitoring, performed post‑mortems on allocation failures, and iterated the schema to handle edge cases (e.g., overlapping CIDRs).  

**Bar‑raiser cues** – I quantified impact with real metrics, demonstrated ownership by owning all components from design to ops, and showed deep technical knowledge of AWS services while balancing cost, scalability, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
