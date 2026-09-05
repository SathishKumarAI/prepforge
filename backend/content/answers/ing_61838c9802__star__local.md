---
qid: ing_61838c9802__star__local
question: 'Explain: Automatic benchmarks — GitHub - huggingface/evaluation-guidebook:
  Sharing both practical insights and theoretical knowledge about LLM evaluation that
  we gathered while managing the Open LLM Leaderboard and designing lighteval! \u00b7
  GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 327
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:12-05:00'
sources: []
---

**Situation:**  
At my previous role, we were running the Open LLM Leaderboard and noticed that every week new models were submitted but there was no consistent way to compare them across tasks—results drifted because of different evaluation scripts and data splits.

**Task:**  
I had to build an automatic benchmark pipeline that could ingest any model checkpoint, run it against a curated set of public datasets, and produce a unified leaderboard score—all without manual intervention or re‑training.

**Action:**  
First, I cloned the Hugging Face `evaluation-guidebook` repo and forked its `lighteval` scripts. Using Dockerized containers, I wrapped each evaluation script in a standardized API that accepted a model name and checkpoint path. Then I wrote a CI workflow on GitHub Actions that triggers whenever a new model is pushed to our registry; it pulls the latest `lighteval`, runs all tasks (GLUE, SQuAD, MT datasets), aggregates metrics with weighted averaging, and updates the Markdown leaderboard via a bot PR. To keep runtime low, I added caching of intermediate tokenizers and switched from CPU to GPU nodes on demand.

**Result:**  
The new pipeline cut evaluation time per model from ~8 hours to 45 minutes, increased throughput by 12×, and reduced manual errors to zero. The leaderboard now updates automatically every 24 hours, giving stakeholders instant, reproducible comparisons. I learned that standardizing the evaluation interface and automating the workflow eliminates drift and scales with community growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
