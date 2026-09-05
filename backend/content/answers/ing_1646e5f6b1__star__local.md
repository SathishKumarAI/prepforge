---
qid: ing_1646e5f6b1__star__local
question: 'Explain: Durable background agent — pydantic-ai \u00b7 PyPI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 324
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:13:13-05:00'
sources: []
---

**Situation:**  
When building a real‑time recommendation service for an e‑commerce platform, the data ingestion pipeline stalled during peak traffic. We were pulling user interaction logs from Kafka and feeding them into our ML model, but each message triggered a heavy inference call that blocked the consumer thread.

**Task:**  
I had to decouple the inference workload so that the Kafka consumer could keep up with 10 k messages per second while still providing predictions within 200 ms for end users.

**Action:**  
I introduced *pydantic‑ai*’s Durable Background Agent. First, I defined a Pydantic model for the request payload and response schema to guarantee type safety. Then I wrapped our inference function in `DurableBackgroundAgent`, which serializes the input, pushes it to an internal Celery queue, and returns a future ID immediately. A separate worker pool runs the heavy AI calls asynchronously. The agent also exposes a lightweight HTTP endpoint that polls for completion status, so the consumer can continue processing new messages without waiting.

**Result:**  
Kafka throughput increased from 3 k to 12 k msgs/sec, latency dropped by 70%, and we maintained a 99.8% SLA on prediction delivery. I learned how serialization with Pydantic and background agents can turn a blocking inference loop into a scalable micro‑service pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
