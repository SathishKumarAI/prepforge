---
qid: ing_39595896aa__star__local
question: 'Explain: Week 3: LLM Judge — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 440
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:50-05:00'
sources: []
---

**Situation:**  
During my senior design project, we were building a conversational AI for a virtual health assistant. Our internal QA metrics had plateaued: the model scored 0.78 on BLEU and 0.72 on ROUGE against human references, but user satisfaction surveys still lagged at 65 %. We needed a more nuanced evaluation that could capture nuance, safety, and factuality.

**Task:**  
I was tasked with implementing an “LLM Judge” – an automated evaluator that uses a large language model to score responses on multiple dimensions (accuracy, relevance, empathy, safety). The goal was to reduce manual annotation time by 70 % while keeping evaluation quality comparable to human raters.

**Action:**  
1. **Prompt Engineering:** I designed a composite prompt that fed the candidate answer, reference answer, and a rubric into GPT‑4. The prompt instructed the LLM to score each dimension on a 0–5 scale and justify its scores in one sentence.  
2. **Batching & Parallelism:** Using OpenAI’s API with concurrency limits, I processed 1,000 responses per batch, storing results in PostgreSQL for downstream analysis.  
3. **Calibration Loop:** To ensure consistency, I ran a calibration set of 200 manually scored examples and tuned the prompt until Pearson correlation exceeded 0.85 with human scores.  
4. **Integration into CI/CD:** The LLM Judge was wrapped in a Python CLI that ran on every new model checkpoint; if any dimension fell below 3.5, the pipeline flagged it for review.

**Result:**  
Evaluation time dropped from ~8 hours of manual annotation to under 30 minutes per batch. Our final model’s overall score rose to 0.84 BLEU and 0.78 ROUGE, while user satisfaction increased to 82 %. I learned that a well‑crafted prompt can turn an LLM into a reliable “judge,” but it still requires periodic human calibration to guard against drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
