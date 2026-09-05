---
qid: ing_f0ae919e58__star__local
question: 'Explain: What they emphasise — Xai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 284
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:29:23-05:00'
sources: []
---

**Situation**  
At my last company we launched a credit‑risk model that scored applicants for loan approvals. The internal audit flagged that the model’s decisions were opaque, and regulators demanded an explanation of why certain customers were denied.

**Task**  
I was tasked with turning the black‑box neural net into a transparent system—providing clear, actionable explanations to both compliance officers and loan officers—without sacrificing predictive accuracy.

**Action**  
First I mapped each feature’s contribution using SHAP values, then built an interactive dashboard in Tableau that displayed top drivers for each decision. To keep latency low, I pre‑computed SHAP slices during inference and cached them with Redis. For audit trails, every explanation was logged with a cryptographic hash to ensure tamper resistance. I also ran A/B tests against the legacy model: the new XAI‑enabled system maintained 98% of its original F1 score while cutting false‑positive denial rates by 12%.

**Result**  
Regulators approved our product within two weeks, and the loan team reported a 25% reduction in appeal requests. I learned that coupling explainability tools with real‑time performance engineering can satisfy both compliance and business goals—turning XAI from a compliance checkbox into a competitive advantage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
