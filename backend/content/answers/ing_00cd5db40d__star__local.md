---
qid: ing_00cd5db40d__star__local
question: How do operators share a ranked pull-queue across two MCP clients?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 372
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:06-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a real‑time fraud detection service that required low latency and high throughput. Two microservice clusters (MCP clients) needed to pull alerts from a shared ranked queue without duplicating work or dropping priority.

**Task:**  
Design and implement a fault‑tolerant mechanism so both MCP clients could consume the same ranked pull‑queue, ensuring each alert was processed exactly once while preserving priority order.

**Action:**  
I chose Redis Streams as the backbone because of its consumer group support. I created a single stream “alerts” with fields `score` (priority) and `payload`. To rank by score, I used a sorted set “alert_ranks” that mapped each ID to its score; every new alert was added atomically via Lua script. Each MCP client ran as a consumer in the same group (“fraud_detectors”), pulling items with `XREADGROUP` using `COUNT 100` and `BLOCK -1`. The Lua script also removed processed IDs from the sorted set, guaranteeing no double‑processing. I added a retry policy: if a consumer crashed before acknowledging an alert, it would become visible after a 30‑second visibility timeout.

**Result:**  
The system handled 15 k alerts per second with <10 ms latency, and the duplicate rate dropped from 3% to <0.01%. We also reduced memory overhead by 25% compared to our previous Kafka‑based approach. I learned how consumer groups in Redis Streams can replace more heavyweight message brokers for simple, high‑throughput workloads while still preserving priority ordering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
