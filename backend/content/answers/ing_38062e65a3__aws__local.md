---
qid: ing_38062e65a3__aws__local
question: 'Explain: NFR — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 536
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:08-05:00'
sources: []
---

**Context (S)**  
While leading a cross‑functional team that built a recommendation engine for a social‑media platform, I was asked to explain how non‑functional requirements (NFRs) such as *latency*, *availability* and *security* shape the ML pipeline.

**Task (T)**  
Translate high‑level NFRs into concrete design decisions, quantify their impact on user experience, and ensure the solution stays cost‑effective at scale.

**Action (A)**  

| NFR | Design Decision | AWS Services | Why |
|-----|-----------------|--------------|-----|
| **Latency ≤ 200 ms** for feed generation | Use *Amazon SageMaker Endpoint* with **GPU instances** and *Edge Lambda* for pre‑processing. Cache feature vectors in *ElastiCache – Redis*. | **SageMaker, Lambda, ElastiCache, CloudWatch** | Keeps inference time < 150 ms; caching reduces 30% of compute. |
| **99.999% Availability** across 3 AZs | Deploy endpoint with *Auto Scaling* and *Multi‑Region* read replicas in *DynamoDB*. Use *AWS WAF* for DDoS protection. | **SageMaker, DynamoDB, WAF, CloudFront** | Multi‑AZ design gives < 1 s failover; WAF blocks 99.9% of malicious traffic. |
| **Data Privacy & GDPR** | Apply *KMS* encryption at rest and *VPC endpoints*. Tag all datasets with *AWS Resource Groups* for audit. | **KMS, VPC, CloudTrail** | Encrypts > 95 TB of user data; audit logs enable 100% compliance coverage. |

**Result (R)**  
Implemented the pipeline in **6 weeks**, reducing feed latency by **42 %** and increasing daily active users by **18 %** due to smoother experiences. Cost rose only **12 %** because caching cut compute usage.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Latency directly improves user engagement.
- **Dive Deep & Ownership** – I quantified trade‑offs, monitored metrics, and iterated on the design until SLAs were met.

*Bar‑raiser cue:* Look for evidence that I owned the entire end‑to‑end stack, dug into metric details, learned from a prior latency spike (adjusted caching strategy), and measured impact with real numbers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
