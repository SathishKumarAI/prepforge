---
qid: ing_a7867251bd__aws__local
question: 'Explain: Handling Evolving Fraud Patterns — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 425
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:20-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, fraud surged by **30 % YoY**, eroding customer trust and causing a $2 M loss quarterly.  
**Task** – Build an adaptive fraud‑detection system that learns new attack vectors in near real time while keeping latency < 50 ms for every transaction.  

**Action** –  
1. **Own the pipeline**: I drafted the data schema, defined feature engineering rules, and set up a nightly batch job on *Amazon EMR* to ingest 10 TB of raw logs into an *S3 Lake Formation* catalog.  
2. **Dive deep into model drift**: Leveraged *AWS SageMaker Autopilot* for baseline models, then switched to *SageMaker Pipelines* with a custom `ModelMonitor` that flags concept‑drift (p‑value < 0.01) and triggers an automated retraining on a GPU instance (`ml.p3.2xlarge`).  
3. **Bias for action & deliver results**: Deployed the best model to *Amazon SageMaker Edge Manager* on *AWS IoT Greengrass*, ensuring < 30 ms inference per transaction. I added a feedback loop via *Kinesis Data Streams* that pushes flagged anomalies back into training data, closing the loop in under 2 hours.  

**Result** – Within three months, fraud losses dropped **45 %**, and false‑positive rate fell from 7 % to 3 %. The system scaled to handle a peak of 15k TPS with 99.9 % availability at <$0.08 per inference.  

*Bar‑raiser takeaway*: I demonstrated ownership (full data lifecycle), deep technical chops (model monitoring, edge deployment), quantified impact (loss reduction, latency), and learned from early false positives by iterating feature sets—exactly what Amazon expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
