---
qid: ing_5b79fcf82e__star__local
question: 'Explain: At-most once — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 347
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:19-05:00'
sources: []
---

**Situation:**  
In my last role I was responsible for the real‑time fraud detection pipeline that ingested credit card transactions from a Kafka topic and scored them in a TensorFlow model deployed on Kubernetes. The downstream risk score service had to be idempotent because our payment gateway sometimes re‑sent messages after timeouts.

**Task:**  
Guarantee that each transaction was processed no more than once while still keeping latency under 200 ms, even when the Kafka consumer experienced transient failures.

**Action:**  
I switched from Kafka’s default “at least once” semantics to an *at‑most‑once* pattern by configuring `enable.auto.commit=false` and manually committing offsets only after a successful model inference and score persistence. I wrapped the inference call in a try/catch that discarded any exception, ensuring no offset was committed on failure. To avoid losing data during consumer restarts, I also enabled Kafka’s compacted topic for transaction IDs as a de‑duplication key. In Kubernetes I used readiness probes to pause the pod when GPU memory fell below 20 %, preventing partial processing.

**Result:**  
The pipeline maintained <180 ms latency and reduced duplicate fraud alerts by 98%. The risk score accuracy stayed at 92% because we eliminated false positives from re‑processing. I learned that a disciplined offset strategy, combined with lightweight de‑duplication keys, can deliver strong delivery guarantees without sacrificing real‑time performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
