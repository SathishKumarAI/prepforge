---
qid: ing_c7e0ce23be__aws__local
question: Evals are nondeterministic - temperature, sampling, flaky agents. How do
  you get trustworthy numbers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 452
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:13-05:00'
sources: []
---

**Situation** – While leading the “Eval‑Stability” sprint for our LLM‑powered recommendation engine, we discovered that temperature‑controlled sampling produced wildly different BLEU scores across nightly runs, making it impossible to compare model versions.

**Task** – Build a repeatable evaluation pipeline that delivers trustworthy metrics (≤ 0.5 % variance) while staying under $2k/month.

**Action**  
1. **Deterministic seeds & checkpoints** – We wrapped the inference code in a SageMaker **Inference Endpoint** that always loads the same model checkpoint and applies a fixed random seed per sample set.  
2. **Statistical confidence** – Each evaluation job (SageMaker Processing) runs 10 × parallel inference streams, aggregates results into S3, and a Lambda triggers a **SciPy‑based bootstrap** to compute 95 % CI for each metric.  
3. **Infrastructure** – Step Functions orchestrate the pipeline: start → preprocess → invoke endpoint ×10 → aggregate → publish to CloudWatch dashboards.  
4. **Cost & scalability** – Using Spot instances (SageMaker Processing) cuts GPU costs by 60%; the stateless design scales horizontally, keeping latency < 2 s per batch.

**Result** – Variance dropped from 7 % to 0.3 %, giving us confidence intervals that were 4× tighter than before. We reduced evaluation time from 45 min to 12 min and cut monthly spend by 35 %.  

*Leadership Principles:* **Ownership** (I drove the end‑to‑end pipeline), **Dive Deep** (analyzed seed effects, bootstrap statistics), **Deliver Results** (quantified impact on metric stability). The bar‑raiser will note my focus on reproducibility, cost efficiency, and data‑driven validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
