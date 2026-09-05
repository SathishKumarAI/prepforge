---
qid: ing_d5bba86497__star__local
question: 'Explain: The Lineage: ReAct to Loop Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 322
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:36:16-05:00'
sources: []
---

**Situation**  
At a fintech startup, we were launching an AI‑driven fraud detection model that had to process 5 M transactions per day. Our initial pipeline used a batch‑oriented “react” approach: the model would run nightly, flagging suspicious patterns and then human analysts would loop back to retrain the system on new labels.

**Task**  
I was tasked with turning this reactive, one‑way loop into a continuous, low‑latency feedback cycle so that flagged transactions could be reviewed in real time and the model updated without manual intervention.

**Action**  
I re‑architected the stack: added Kafka for streaming ingestion, Spark Structured Streaming to score each transaction as it arrived, and an online learning layer using TensorFlow Serving with a small replay buffer. I implemented a lightweight “feedback API” that let analysts approve or reject flags; those decisions were automatically written back into the same Kafka topic and used to incrementally update the model weights via an asynchronous worker. To keep latency under 200 ms, I offloaded heavy feature extraction to a GPU pool and used mixed‑precision inference.

**Result**  
The new loop cut fraud detection turnaround from 24 h to 3 min, increasing true‑positive rate by 18% while reducing false positives by 12%. I learned that embedding human feedback directly into the data pipeline turns a static model into an adaptive system, dramatically improving both speed and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
