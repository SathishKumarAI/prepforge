---
qid: ing_3e9ebae40e__aws__local
question: 'Explain: Hallucination is a safety problem — Safety Security And Responsible
  Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 515
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:47:44-05:00'
sources: []
---

**Hallucination as a safety issue in AI**  

*Leadership Principles:* **Customer Obsession** – users must trust the model’s outputs; **Ownership** – we own the end‑to‑end quality and risk profile.

---

### Behavioral (STAR)

**Situation:** Our recommendation engine for a health‑tech marketplace started returning drug suggestions that were not FDA‑approved.  
**Task:** Reduce hallucinations to < 0.5 % while keeping latency ≤ 200 ms.  
**Action:**  
1. Implemented a *dual‑filter* pipeline: (a) **Content Moderation Service** using Amazon Comprehend Medical to flag non‑compliant terms; (b) **Real‑time Verification Service** on AWS Lambda that queries the FDA’s public API.  
2. Added an *audit log* in DynamoDB and set CloudWatch Alarms for spikes.  
3. Deployed a *feedback loop* via Amazon SageMaker Model Monitor to retrain on flagged samples quarterly.  
**Result:** Hallucination rate dropped from 4 % to 0.32 %, latency stayed at 180 ms, and user trust score (NPS) rose by 12 points in three months.

---

### Technical/System

*Requirements:* Low‑latency inference, high availability, cost control, data privacy.  
*Design:*  
- **Inference Layer:** Amazon SageMaker Endpoint with Multi‑Model Serving, auto‑scaling on CloudWatch metrics.  
- **Safety Layer:** AWS Lambda (Python) + Comprehend Medical + FDA API; stateless, scales to 10k RPS.  
- **Observability:** DynamoDB audit table, CloudWatch dashboards, SNS alerts.  

*Scalability:* Auto‑scaling handles traffic spikes; Lambda concurrency limits can be increased via reserved concurrency.  
*Availability:* Endpoint in two AZs, Lambda with provisioned concurrency for cold starts.  
*Cost:* Estimated $0.03/1k requests for Lambda + $0.10/1k inference calls; savings from reduced retraining cycles (~$2k/month).  

---

**Bar‑raiser focus:** Ownership of the safety loop, depth in choosing Comprehend Medical over custom regex (dive deep), measurable impact on hallucination rate, and learning that continuous monitoring prevents drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
