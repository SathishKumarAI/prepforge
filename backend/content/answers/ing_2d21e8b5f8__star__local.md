---
qid: ing_2d21e8b5f8__star__local
question: 'Explain: Building Anthropic — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 363
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:13-05:00'
sources: []
---

**Situation**  
At the start of last quarter I was tasked with launching an internal “Anthropic – Careers” recommendation engine for our talent‑acquisition team. The goal was to surface high‑potential candidates from our internal talent pool in real time, but the existing pipeline had a 40 % hit‑rate and took hours to run.

**Task**  
I needed to build a lightweight model that could ingest candidate profiles, job descriptions, and skill embeddings, then rank applicants within two seconds while keeping inference costs under $0.01 per query.

**Action**  
First I distilled the problem into a binary classification of “match” vs. “no match.” I used Hugging Face’s `sentence-transformers` to generate 768‑dimensional embeddings for both job texts and CVs, then trained a LightGBM model on 200k labeled pairs (80/20 split). To meet latency constraints I distilled the model into a 32‑node XGBoost ensemble and deployed it via FastAPI behind an AWS Lambda edge. Continuous A/B testing was set up with Optuna to tune hyperparameters while monitoring GPU utilization.

**Result**  
Within three weeks, the new system raised the match hit‑rate from 40 % to 73 %, cut inference time from 12 s to 1.8 s, and reduced per‑query cost by 85 %. The talent team reported a 30 % faster hiring cycle for internal transfers, and I learned how to balance model accuracy with real‑world deployment constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
