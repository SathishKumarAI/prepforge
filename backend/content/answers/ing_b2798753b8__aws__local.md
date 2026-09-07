---
qid: ing_b2798753b8__aws__local
question: 'Explain: We’ve Always Done It This Way — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 400
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:15-05:00'
sources: []
---

**Situation / Task**  
At my previous company we had a legacy ML inference pipeline that cost ~\$1 M/yr on on‑prem GPUs and never met our SLAs for real‑time predictions. The leadership mantra was “We’ve always done it this way.” I was tasked to cut costs by 60% while keeping latency <30 ms.

**Action**  
*Customer Obsession & Ownership*: I first mapped the end‑to‑end workflow—data ingestion, preprocessing, model scoring, and result storage.  
*Dive Deep*: Using CloudWatch traces I discovered that 70 % of CPU time was spent on synchronous batch transforms.  
I redesigned the pipeline with **Amazon SageMaker Pipelines** for automated training, **Lambda + Step Functions** for event‑driven inference, and **EFS** for shared preprocessing artifacts. For scaling, I leveraged **SageMaker Neo** to compile models for ARM/Graviton instances, slashing GPU usage by 80 %.  
*Bias for Action*: I spun up a pilot in 3 days, monitored with CloudWatch metrics, and iterated on the Lambda concurrency.

**Result**  
- Cost dropped from \$1M to **\$360K** per year (64 % reduction).  
- Latency improved to **18 ms average**, meeting SLA.  
- Monthly model retraining took 2 hrs instead of 12 hrs, freeing data‑science bandwidth.

**Learning & Bar‑raiser note**  
I documented a “Frugal Architecture” playbook that now guides all new ML projects. The bar‑raiser looks for clear ownership, data‑driven impact, and a culture shift from legacy to cost‑efficient architecture—exactly what we achieved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
