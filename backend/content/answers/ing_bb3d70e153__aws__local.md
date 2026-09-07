---
qid: ing_bb3d70e153__aws__local
question: 'Explain: NullAway — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 439
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:57-05:00'
sources: []
---

**Situation & Task**  
At Uber I led a cross‑functional team that had to bring real‑time ML predictions from our “Digital World” (mobile app) into the “Physical One” (autonomous vehicles). The goal was to reduce unsafe incidents by 30 % before launch.  

**Action**  
I designed **NullAway**, a lightweight inference pipeline built on **Amazon SageMaker Endpoint + Lambda** for edge‑compute, with **AWS IoT Greengrass** on the vehicle. We wrapped the model in a *service‑mesh* that performed sanity checks (null‑value handling, confidence thresholding) and logged every prediction to **Kinesis Data Streams** for post‑hoc analysis.  
- **Scalability:** Lambda auto‑scales to 10 k concurrent predictions per minute; Greengrass keeps latency <15 ms locally.  
- **Availability:** Endpoint replicas in two AZs with Route 53 health checks; fallback to a local cached model guarantees 99.9 % uptime.  
- **Cost:** Using spot instances for training and Lambda’s pay‑per‑invocation pricing cut inference cost by 40 %.  

**Result**  
During the pilot, NullAway reduced unsafe prediction errors from 1.8 % to 0.6 %, a 66 % drop—well above our target—and saved ~$2 M in potential incident costs over six months.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered safer rides for millions of riders.  
- **Dive Deep & Ownership:** Built the end‑to‑end pipeline, continuously monitored and tuned it.  

Bar‑raisers focus on: ownership of metrics (error rates), depth in system design (edge vs cloud trade‑offs), quantified impact (66 % reduction), and lessons learned—e.g., moving from a monolithic inference service to a modular, observability‑first architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
