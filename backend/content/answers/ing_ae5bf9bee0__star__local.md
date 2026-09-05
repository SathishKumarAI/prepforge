---
qid: ing_ae5bf9bee0__star__local
question: 'Explain: What Went Wrong — Use Cases And Case Studies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 370
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:56-05:00'
sources: []
---

**Situation** – At my previous firm we launched an automated fraud‑detection model for a large credit‑card processor. The marketing team expected it to reduce false positives by 30 % while keeping true‑positive rates above 95 %. Within the first month, however, merchants reported a 45 % spike in flagged legitimate transactions and customer churn started climbing.

**Task** – I had to identify why the model was over‑aggressive, quantify the impact on revenue and reputation, and redesign it so that it balanced sensitivity and precision without hurting throughput.

**Action** – First, I performed an error‑analysis audit: collected a stratified sample of false positives, ran SHAP explanations, and discovered that the feature “recent overseas purchases” was heavily weighted due to a data drift event—our training set had only 5 % such transactions. Next, I re‑balanced the training data using SMOTE for rare legitimate cases, retrained with a cost‑sensitive loss function (penalizing false positives twice as much), and added an online feedback loop that allowed merchants to flag misclassifications in real time. Finally, I set up A/B testing and continuously monitored precision–recall curves.

**Result** – After two weeks, the model’s false‑positive rate dropped from 45 % to 28 %, meeting the original target. Revenue loss due to churn fell by 12 %, and we reduced manual review effort by 35 %. I learned that real‑world AI deployments must anticipate data drift, incorporate stakeholder feedback early, and treat business metrics as first‑class constraints in model design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
