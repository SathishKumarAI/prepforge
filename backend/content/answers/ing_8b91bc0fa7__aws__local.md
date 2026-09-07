---
qid: ing_8b91bc0fa7__aws__local
question: 'Explain: Sage Pattern — Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 461
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:36-05:00'
sources: []
---

**Situation / Task**

While building a multi‑tenant recommendation service at my previous company, we needed to guarantee that each user’s model training job would either finish successfully or roll back all intermediate artifacts (S3 checkpoints, DynamoDB metadata, Lambda state). The existing “Saga” pattern was unclear in AWS terms, and I had to explain it to the architecture team.

**Action**

I first mapped the Saga concept onto a *server‑less microservice choreography*:

| Step | Service | Responsibility |
|------|---------|----------------|
| 1 | **Step Functions** (state machine) | Orchestrates the entire flow, keeps state across retries. |
| 2 | **Lambda** | Executes training, writes checkpoints to **S3**, updates **DynamoDB**. |
| 3 | **SNS + Lambda** | Publishes “commit” or “abort” events; the abort Lambda deletes S3 objects and DynamoDB entries. |

I introduced *compensation actions* (the second half of Saga) by adding an “Abort” state that triggers cleanup Lambdas only when a downstream failure occurs. To keep costs low, I used **Provisioned Concurrency** for critical Lambdas and leveraged **S3 Object Lifecycle Rules** to auto‑expire orphaned checkpoints after 24 h.

I then ran a pilot with 200 concurrent training jobs:

* **Success rate:** ↑ from 88 % to 99.7 % (≈10× fewer partial failures).  
* **Cost impact:** ↓ by 12 % due to reduced Lambda retries and shorter S3 storage time.  

**Result**

The team adopted the pattern, improving reliability for 5‑year retention of user models. I documented the architecture in Confluence with a *“Saga Cheat Sheet”* that now serves as onboarding material.

---

### Leadership Principles Highlighted
- **Ownership** – Took end‑to‑end responsibility for fault tolerance.  
- **Dive Deep** – Quantified impact and tuned each service’s parameters.  

Bar‑raisers look for clear ownership, depth of technical reasoning, measurable outcomes, and lessons learned—this answer demonstrates all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
