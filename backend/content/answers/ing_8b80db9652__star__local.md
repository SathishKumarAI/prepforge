---
qid: ing_8b80db9652__star__local
question: 'Explain: Run experiment with automatic metrics — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 352
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:52-05:00'
sources: []
---

**Situation:**  
At my previous startup we were launching a conversational AI product that needed to meet a 90 % user satisfaction score on the first release. The internal QA team was overwhelmed with manual evaluations and we had no clear way to track performance across multiple model versions.

**Task:**  
I was tasked with designing an end‑to‑end evaluation pipeline that could automatically run experiments, collect metrics, and surface actionable insights for the data science and product teams.

**Action:**  
I set up Langfuse as our experiment orchestration layer. For each new model variant I defined a test harness in Langwatch: 1) scripted user intents, 2) automated response collection, and 3) scoring functions (BLEU, ROUGE‑L, and a custom semantic similarity metric using Sentence‑Transformers). The pipeline triggered on every GitHub PR, stored results in Langfuse’s event store, and generated a real‑time dashboard with trend charts. I also added an “ablation” feature that automatically compared baseline vs. new models, flagging statistically significant differences.

**Result:**  
Within two weeks the automated system cut manual evaluation time by 80 % (from 10 hrs to 2 hrs per release). We hit a 92 % satisfaction score on launch and reduced regression incidents by 35 %. The team now has instant visibility into model drift, and I learned how tightly coupling data pipelines with metric dashboards accelerates product iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
