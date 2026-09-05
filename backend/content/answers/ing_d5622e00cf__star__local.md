---
qid: ing_d5622e00cf__star__local
question: What are reasoning models, and how does test-time compute change the picture?
  When would you use one versus a standard model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 308
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:40-05:00'
sources: []
---

**Situation:**  
During my last project at a fintech startup, we were building an AI‑powered credit risk engine. Our initial model—a standard XGBoost classifier—gave us 82 % accuracy, but regulators demanded explainability for every decision.

**Task:**  
I had to design a system that could reason about the evidence behind each score, without sacrificing real‑time inference speed needed for live loan approvals.

**Action:**  
I introduced a lightweight reasoning model: a chain‑of‑thought transformer that processes raw features and outputs a short textual justification. Instead of running this heavy network at every request, I leveraged *test‑time compute* by pre‑computing the reasoning embeddings during off‑peak hours and caching them. At inference, the system simply retrieves the cached rationale and runs a tiny linear layer to produce the final risk score. This trade‑off kept latency under 50 ms while still delivering human‑readable explanations.

**Result:**  
The new pipeline achieved 84 % accuracy (a 2 % lift) and reduced inference cost by 70 %. Regulators approved our model, and we saw a 15 % increase in loan approval confidence. I learned that reasoning models are ideal when interpretability is paramount, but test‑time compute optimizations can make them practical for production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
