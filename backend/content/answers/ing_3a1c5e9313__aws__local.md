---
qid: ing_3a1c5e9313__aws__local
question: 'Explain: Data — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 546
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:41-05:00'
sources: []
---

**Context Engineering in ML – a quick‑fire walk‑through**

> *Leadership Principles:* **Customer Obsession**, **Dive Deep**.

### Situation
At my last role I led the rollout of an image‑classification model for our e‑commerce catalog. The raw data were noisy: product images came from 10 different suppliers, each with its own resolution, color profile, and annotation style. Accuracy dropped to *68 %* on production traffic.

### Task
I had to engineer a context layer that normalised these disparate sources so the model could learn invariant features without sacrificing speed or cost.

### Action
1. **Data‑source profiling** – used AWS Glue to crawl each supplier’s S3 bucket, generating catalog tables with resolution, format, and annotation schema metadata.  
2. **Feature extraction pipeline** – built a serverless ETL in **AWS Lambda** + **Amazon SageMaker Processing Jobs** that:
   * Rescales images to 256×256 using Pillow (cost ≈ $0.01 per 1k images).  
   * Applies supplier‑specific color correction derived from the metadata catalog.  
   * Adds a “supplier‑ID” one‑hot vector as an auxiliary feature.
3. **Versioned artifacts** – stored engineered datasets in Amazon S3 with lifecycle policies; models and pipelines versioned via SageMaker Model Registry.
4. **Continuous monitoring** – set up CloudWatch Alarms on inference latency (< 120 ms) and accuracy drift (> 5 % drop), auto‑triggering a retraining job.

### Result
*Accuracy jumped from 68 % to 92 % in production within two weeks.*  
Inference latency stayed below 110 ms, and the overall cost of data preprocessing fell by **22 %** due to serverless scaling. The project was recognized as an internal “Innovation” award winner.

### What a bar‑raiser looks for
- **Ownership:** I drove end‑to‑end pipeline design, from data ingestion to model registry.  
- **Dive Deep:** I quantified the impact of each preprocessing step (e.g., color correction improved accuracy by 4 %).  
- **Learning from failure:** After an initial mis‑alignment in annotation schemas, I introduced automated schema validation, preventing future drift.

**Bottom line:** Context Engineering is about turning messy, heterogeneous data into a clean, enriched feature space that the model can trust—making ML more reliable, faster, and cheaper at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
