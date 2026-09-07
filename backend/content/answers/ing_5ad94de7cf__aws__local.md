---
qid: ing_5ad94de7cf__aws__local
question: 'Explain: TL;DR — Xai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 450
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:03-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When our recommendation engine hit a 12 % drop in click‑through rate (CTR), customers complained that “the AI feels like a black box.” I was tasked with delivering an explainable AI (XAI) layer so users could see why items were suggested.

**Action (Dive Deep & Ownership)**  
1. **Requirements** – Build a real‑time explanation service that returns feature importance for each recommendation, without adding >50 ms latency.  
2. **Design** –  
   * **Feature Store**: Amazon SageMaker Feature Store to cache user‑profile and item features at 5 min refresh.  
   * **Model**: A gradient‑boosted tree model (XGBoost) wrapped in SageMaker hosting.  
   * **Explainability Engine**: Deploy SHAP locally on an EC2 Spot Fleet (t3.large) behind an Application Load Balancer; the engine pulls the request, runs SHAP on the cached features, and streams a JSON payload back.  
   * **Observability** – CloudWatch metrics for latency, error rate, and “explanation confidence.”  
3. **Scalability & Cost** – Spot Fleet keeps costs ~30 % lower than On‑Demand; auto‑scaling by Lambda based on request burst ensures 99.9 % availability.

**Result (Deliver Results)**  
Within two weeks:  
* Latency ≤ 45 ms (down from 120 ms).  
* CTR recovered to +8 % over baseline, customer satisfaction score rose 15 pts.  
* Explanations logged in S3 for audit; quarterly compliance review showed 100 % adherence.

**Learning & Bar‑raiser Feedback**  
I realized the trade‑off between model fidelity and explainability latency—so I added a “quick‑look” rule set that served precomputed explanations during peak hours, reducing compute load by 40 %. This iterative improvement demonstrates ownership and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
