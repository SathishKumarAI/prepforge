---
qid: ing_9fff4f1802__aws__local
question: 'Explain: Translation: Statistical & learned evals for quality'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 443
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:37-05:00'
sources: []
---

**Situation / Task**  
I was asked to validate the quality of a new neural‑translation model for an international e‑commerce platform that serves 30 M users per month. The goal was to replace the rule‑based engine while guaranteeing at least a 15 % lift in customer satisfaction (CSAT) and no drop in conversion rates.

**Action**  
1. **Dive Deep into data** – Collected 2 M user‑generated review pairs, split them into training, validation, and holdout sets.  
2. **Statistical evaluation** – Implemented BLEU, METEOR, and a custom *human‑in‑the‑loop* scorer that weighted context relevance (0–10).  
3. **Learned evals** – Trained an LLM (SageMaker JumpStart) to score translations against 50 K reference sentences; used its probability distribution as a confidence metric.  
4. **AWS stack** – SageMaker for training & inference, Glue for ETL, DynamoDB to store scores, CloudWatch Alarms for drift detection.  
5. **Bias for Action** – Deployed the model in a canary (10 % traffic) with A/B tests on conversion and CSAT.

**Result**  
- BLEU improved from 0.42 to 0.61; learned‑eval confidence rose 25 %.  
- Canary traffic showed a 18 % lift in CSAT and a 3.2 % increase in checkout completion, exceeding the target.  
- Cost of inference dropped 12 % due to model compression (quantization) and auto‑scaling.

**Reflection**  
I owned the end‑to‑end pipeline, dug into every metric, and iterated quickly—demonstrating Ownership and Customer Obsession. The bar‑raiser will note that I quantified impact, used data‑driven decisions, and learned from early drift alerts to refine the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
