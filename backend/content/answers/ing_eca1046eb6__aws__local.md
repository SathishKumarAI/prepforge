---
qid: ing_eca1046eb6__aws__local
question: 'Q: Your agent''s memory store has 50M memories across 10K tenants. How
  do you guarantee cross-tenant isolation and what''s your blast radius if isolation
  fails?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 479
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:13:36-05:00'
sources: []
---

**Situation / Task**  
I led the memory‑store redesign for a multi‑tenant AI platform that held **50 M memories** across **10 K tenants**. The business required *zero cross‑tenant leakage* and an acceptable blast radius in case of failure.

**Action**  
1. **Data isolation** – I enforced tenant separation at three layers:  
   - **Schema**: each tenant’s memories lived in its own DynamoDB table (partition key = `TenantID`).  
   - **IAM & VPC endpoints**: fine‑grained policies and private link ensured only the tenant’s Lambda functions could read/write.  
   - **Encryption**: per‑tenant KMS keys (AWS Key Management Service) guaranteed that even a compromised node couldn’t decrypt another tenant’s data.

2. **Audit & monitoring** – I added CloudTrail event logging, DynamoDB Streams to detect cross‑partition reads, and GuardDuty alerts for anomalous API calls.  

3. **Blast‑radius mitigation** – I introduced an *isolation‑proxy* layer (API Gateway + Lambda) that throttles requests per tenant, so a rogue query can’t flood the underlying tables.

**Result**  
- Zero reported data leaks in 12 months; incident response time dropped from 45 min to <5 min.  
- Cost remained under $2 k/month because we used on‑demand DynamoDB with auto‑scaling.  

**Leadership Principles & Bar‑raiser cues**  
- **Customer Obsession / Ownership**: I designed for the tenant’s privacy as a first‑class feature.  
- **Dive Deep**: We measured read/write latency, error rates, and KMS key usage to validate isolation.  
- **Deliver Results**: Quantified impact (0 leaks, 90 % faster response).  
- **Learning from Failure**: Post‑mortem of a past breach led us to adopt per‑tenant keys; we now routinely simulate “blow‑up” tests.

This architecture scales horizontally—each DynamoDB table can elastically grow—and offers high availability with minimal cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
