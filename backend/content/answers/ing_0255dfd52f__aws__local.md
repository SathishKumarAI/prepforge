---
qid: ing_0255dfd52f__aws__local
question: 'Explain: Co-Reasoning (Shared Scratchpads) — Human In The Loop Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 420
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:29:33-05:00'
sources: []
---

**Co‑reasoning (shared scratchpads)**  
*Leadership Principles: Customer Obsession & Ownership.*

**Situation:** At my previous role I led a cross‑functional AI lab that built an NLP model to auto‑summarize customer support tickets. The model’s confidence scores were high, yet customers reported missing nuances.

**Task:** We needed a human‑in‑the‑loop (HITL) workflow that let analysts refine outputs without sacrificing throughput.

**Action:**  
1. **Design shared scratchpads** – implemented an AWS AppSync GraphQL API backed by DynamoDB for real‑time storage of model drafts and analyst edits.  
2. **Co‑reasoning UI** – built a React SPA on Amplify, where the model’s draft appears alongside a “scratchpad” panel; analysts can annotate, reorder sentences, or inject domain terms.  
3. **Audit trail & feedback loop** – each edit triggers an SNS topic that feeds into SageMaker Pipelines, retraining the model with weighted human corrections (≈ 20% of training data).  
4. **Scalability & cost:** DynamoDB auto‑scales; AppSync handles 10k concurrent users at <$0.02/hr per API call; SageMaker Spot instances keep training costs <30% of on‑demand.

**Result:**  
- Latency from ticket receipt to final summary dropped from 45 min to **12 min** (≈ 73% improvement).  
- Customer satisfaction scores rose by **15 points** (CSAT 78 → 93).  
- Model error rate fell from 12% to 4%.

**Bar‑raiser note:** I own the end‑to‑end pipeline, dive deep into DynamoDB throttling logs, quantify impact with CSAT and latency, and iterate when the model over‑fits human bias.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
