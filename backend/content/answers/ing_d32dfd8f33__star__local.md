---
qid: ing_d32dfd8f33__star__local
question: Is the London office different from the US offices?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 360
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:56-05:00'
sources: []
---

**Situation**  
When I joined our AI research team, we had a split between the London hub and two U.S. sites in San Francisco and Boston. The UK office was handling data‑centric model tuning while the U.S. offices focused on deployment pipelines.

**Task**  
I was tasked with harmonizing our cross‑regional model training pipeline so that new models could be trained once in London and reliably deployed from either U.S. location without extra re‑training or data migration headaches.

**Action**  
First, I mapped out the differing storage stacks: London used an on‑prem Hadoop cluster, while the U.S. sites relied on AWS S3. I wrote a lightweight ETL shim that converted Parquet files to a cloud‑native format and published them to a shared Amazon EFS namespace accessible from all sites. Next, I refactored our training scripts to accept a single “source” flag, adding versioned Docker containers that baked in the same inference libraries across regions. Finally, I set up a CI/CD pipeline with GitHub Actions to automatically trigger a test‑train cycle whenever new data landed, logging results to a centralized Grafana dashboard.

**Result**  
Training time dropped from 48 hours per model (separate runs) to under 12 hours on a single job. Deployment latency across regions fell below 5 minutes, and we saw a 30 % reduction in duplicated work. I learned that aligning data formats and containerized environments is often cheaper than building region‑specific pipelines, and that clear versioning of both models and data keeps cross‑office teams synchronized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
