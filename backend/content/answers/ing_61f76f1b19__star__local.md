---
qid: ing_61f76f1b19__star__local
question: 'Explain: Results — Introducing BigLaw Bench to Evaluate LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 341
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:05-05:00'
sources: []
---

**Situation:**  
In mid‑2024 I was leading a cross‑functional team at a boutique legal tech startup that had just released its first AI‑powered contract review tool. Our internal audit revealed that the model’s accuracy on complex litigation clauses lagged behind competitors, and we were under pressure from a key law firm client to prove our LLM could handle high‑stakes legal language.

**Task:**  
I needed to build a rigorous, industry‑specific benchmark that would let us evaluate our LLM against both internal standards and external expectations, while also giving the client confidence in our performance before their next trial.

**Action:**  
I spearheaded the creation of “BigLaw Bench,” a curated dataset of 3,200 real court filings, statutes, and precedent opinions annotated by senior legal analysts. We integrated this into an automated evaluation pipeline using OpenAI’s Eval framework, adding custom metrics for semantic similarity, error rate on clause classification, and time‑to‑response. I also coordinated a blind test run with the client’s data scientists to validate the benchmark’s relevance.

**Result:**  
After deploying BigLaw Bench, our LLM’s accuracy on critical clauses jumped from 78 % to 92 %, and response latency fell by 35 %. The client adopted the tool for their upcoming case, citing the benchmark as a key factor. I learned that domain‑specific benchmarks not only improve model tuning but also become powerful trust signals in high‑stakes industries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
