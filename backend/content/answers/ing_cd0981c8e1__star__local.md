---
qid: ing_cd0981c8e1__star__local
question: 'Explain: By Capability Level (April 2026 Reality)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 365
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:53-05:00'
sources: []
---

**Situation:**  
In early 2025 I led a product team at a fintech startup that needed to launch an AI‑powered compliance monitoring tool before the new EU MiFID II regulations kicked in. The deadline was tight, and we had to demonstrate that our system could handle real‑time transaction screening with zero false positives.

**Task:**  
I had to prove that our solution met three capability levels: (1) *Data ingestion* – ingesting 10 GB of streaming data per minute; (2) *Model inference* – delivering predictions in under 50 ms; and (3) *Explainability* – providing human‑readable rationale for each flagged transaction.

**Action:**  
I built a microservice architecture on Kubernetes, using Apache Kafka for ingestion, TensorRT‑optimized BERT models for inference, and integrated LIME for post‑hoc explanations. I set up an automated CI/CD pipeline that ran synthetic load tests against the target latency, iterating on batch size and GPU allocation until we hit the 50 ms goal. For explainability, I created a UI widget that highlighted key tokens and risk scores directly in the transaction view.

**Result:**  
We achieved sub‑50 ms inference at peak throughput, with an F1 score of 0.97 on our test set, and zero false positives over a one‑month pilot. The product launched on schedule, saving the firm €2 M in potential regulatory fines. I learned that aligning technical architecture tightly with regulatory capability levels is key to delivering compliant AI solutions under pressure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
