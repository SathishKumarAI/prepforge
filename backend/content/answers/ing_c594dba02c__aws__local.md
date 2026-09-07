---
qid: ing_c594dba02c__aws__local
question: 'Explain: Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 461
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:46-05:00'
sources: []
---

**Idempotency in a distributed ML inference service**

**Situation** – I led the redesign of our on‑demand inference API that was ingesting 200 k requests/sec from mobile clients. Duplicate calls (network retries, user taps) caused double billing and stale predictions, eroding customer trust.

**Task** – Build an idempotent request layer that guarantees at most one prediction per logical request while keeping latency <150 ms and cost <$0.001/req.

**Action** –  
1. **Design**: Introduced a *Request‑ID* header (client‑generated UUID).  
2. **AWS Services**:
   - **Amazon DynamoDB** (partition key = Request‑ID, TTL 24 h) to store hash of input features and the prediction result.
   - **Lambda@Edge** for lightweight validation before invoking inference.  
3. **Workflow**:  
   *Lambda* checks DynamoDB; if hit → return cached result; else → invoke SageMaker endpoint, write to DynamoDB, then respond.  
4. **Scalability & Cost**: Provisioned 2 WCU/RCU per partition; auto‑scales with on‑demand mode. Estimated $0.00015/req for reads/writes, <10% of inference cost.

**Result** – Duplicate predictions dropped from 18 % to <0.5 %, saving ~30 k dollars/month. Latency remained 120 ms average; service availability hit 99.99 %.  

---

### Leadership Principles

- **Customer Obsession**: Eliminated billing errors that directly impacted user experience.  
- **Ownership** & **Dive Deep**: Took end‑to‑end responsibility and engineered a fault‑tolerant solution with measurable metrics.

Bar‑raisers look for ownership, deep technical reasoning, quantified impact, and lessons from the initial failure (e.g., why naive caching failed).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
