---
qid: ing_9c9e8ba4c7__star__local
question: How does the receiver unsubscribe from a live video?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 370
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:45:14-05:00'
sources: []
---

**Situation:**  
At my previous company we ran a live‑streaming platform that served millions of viewers per day. One week before launch, our metrics team flagged a sudden spike in the “unsubscribe” rate during a high‑traffic event—up from 0.5 % to nearly 4 %. We suspected a bug in the real‑time analytics pipeline but couldn’t pinpoint it.

**Task:**  
I was tasked with building an end‑to‑end system that could detect when viewers unsubscribed in real time, trigger an immediate rollback of any state changes, and surface alerts for ops—all within three hours so we wouldn’t lose a scheduled conference.

**Action:**  
I designed a lightweight ML model using TensorFlow Lite that classified user actions (subscribe/unsubscribe) from raw event streams. The events were fed through Kafka topics into Apache Flink for low‑latency processing; the model ran in a Docker container on Kubernetes, scoring each event in under 5 ms. I added a fallback rule engine to catch edge cases where latency spikes. Once an unsubscribe was detected, the system sent a compensating command via gRPC back to the streaming server and pushed a Slack alert with a replay URL for manual review.

**Result:**  
The new pipeline processed over 1 million events per minute with <10 ms latency, reducing false positives by 90 %. The spike in unsubscribe rate was corrected within two hours, restoring user trust. I learned how to blend lightweight ML inference with stream processing to meet strict real‑time constraints while keeping the system maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
