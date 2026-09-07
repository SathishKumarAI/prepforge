---
qid: ing_cd07108d08__faang__local
question: 'What are users saying? — RabbitMQ: One broker to queue them all | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 481
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:36:51-05:00'
sources: []
---

**Clarify**  
We’re asked: *“What are users saying?”* given that all user‑generated text is routed through a single **RabbitMQ broker** into one or more queues.  
Assumptions to confirm:  

1. Every message contains a user ID, timestamp and the raw text payload.  
2. We have read‑only access to the broker; we can consume but not modify routing logic.  
3. The goal is real‑time sentiment/keyword extraction for dashboards.

**Approach**  
1. **Consume** from the designated queue using a consumer pool (prefetch=10).  
2. **Preprocess**: normalize Unicode, strip URLs, emojis → tokens.  
3. **Feature extraction**: TF‑IDF + pre‑trained transformer embeddings (e.g., DistilBERT) for each message.  
4. **Inference**: run a lightweight fine‑tuned classifier to produce sentiment scores and key phrases.  
5. **Aggregate & store** in a time‑series DB (InfluxDB/Timescale) keyed by user ID.

**Depth**  
- *Complexity*: O(N log N) per batch for TF‑IDF, but embeddings are O(1) after caching tokenizers.  
- *Throughput*: A single consumer can handle ~5k msgs/s; scaling horizontally is linear.  
- *Fault tolerance*: Use RabbitMQ’s ack mechanism—requeue on failure; dead‑letter queue for malformed payloads.

**Edge Cases**  
- Empty or non‑text messages → drop with warning.  
- Messages exceeding size limits → split and re‑enqueue.  
- Language detection failures → fallback to English model.

**Optimize & Communicate**  
- Replace TF‑IDF with a sentence‑embedding model (e.g., SentenceTransformers) for better semantic capture, reducing dimensionality.  
- Batch inference to amortize GPU cost.  
- Expose a metrics endpoint so stakeholders see latency and error rates in real time.  

This pipeline gives end‑to‑end visibility into user sentiment while respecting RabbitMQ’s single‑broker architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
