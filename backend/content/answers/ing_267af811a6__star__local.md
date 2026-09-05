---
qid: ing_267af811a6__star__local
question: 'Q20: Explain reasoning models and controllable thinking. When are they
  worth the cost?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 267
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:41-05:00'
sources: []
---

**Situation** – In a fintech startup I was tasked with improving our fraud‑detection pipeline. Our model accuracy plateaued at 92 % and we were seeing an uptick in false positives that hurt customer experience.

**Task** – I needed to decide whether to invest in a more explainable, controllable AI system that would let us tune the decision thresholds per region and audit the reasoning behind each flag.

**Action** – I scoped out two options: a black‑box gradient‑boosted tree and a transparent decision‑tree ensemble with feature‑importance scoring. Using SHAP values on the latter, we built an interactive dashboard where analysts could adjust sensitivity weights for specific transaction types. We ran A/B tests over 30 days, monitoring precision, recall, and customer churn.

**Result** – The controllable model cut false positives by 18 % while maintaining a 91 % fraud detection rate, reducing churn by 2 %. The cost of adding the dashboard was $12K in development time, but the ROI—lower support tickets and higher user satisfaction—was immediate. I learned that explainability pays off when stakeholder trust, regulatory compliance, or customer impact outweighs marginal accuracy gains from opaque models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
