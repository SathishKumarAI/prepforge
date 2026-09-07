---
qid: ing_af3598f188__faang__local
question: 'Explain: Continuous batching — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 509
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:30:52-05:00'
sources: []
---

**Continuous Batching – LLM Gateway & Serving Platform**

| Step | What I’ll Do |
|------|--------------|
| **Clarify** | *Problem:* Build a system that ingests streaming user queries, groups them into micro‑batches for an LLM, and returns results with minimal latency. <br>*Assumptions to confirm:* 1) Query rate (e.g., 5k QPS). 2) Max acceptable end‑to‑end latency (< 200 ms). 3) Model size & GPU/TPU availability. |
| **Approach** | 1️⃣ **Ingestion layer:** Kafka or Pulsar topics per tenant, partitioned by user ID to preserve ordering.<br>2️⃣ **Batcher service:** A lightweight Go worker that pulls messages, aggregates into a *token‑budget* window (e.g., 32k tokens) or time window (5 ms).<br>3️⃣ **LLM runner:** Use a high‑throughput inference engine (TensorRT/FlashAttention) on GPU; expose as gRPC endpoint.<br>4️⃣ **Result dispatcher:** Stream back partial outputs via WebSocket, tagging each token with the original request ID. |
| **Depth** | *Batching logic:* maintain a priority queue keyed by arrival time; when either token‑budget or timeout is hit, fire off the batch. <br>*Latency trade‑off:* larger batches → higher GPU utilization (≈ 80%) but added queuing delay. Use adaptive thresholds based on observed latency percentiles.<br>*Complexity:* Batcher O(1) per message; inference cost linear in tokens; overall throughput ≈ GPU memory × batch size / token length. |
| **Edge Cases** | • Burst spikes → overflow buffer → spill to disk or reject with 429.<br>• Long‑running queries → split into sub‑requests, stitch outputs.<br>• Faulty models → circuit breaker + fallback to smaller model. |
| **Optimize & Communicate** | *Improvements:* implement a learning controller that tunes batch size in real time (reinforcement learning). <br>*Narrative:* “I’ll start by validating the throughput assumptions, then prototype the ingestion‑batcher loop, measure GPU utilization, and iterate on the adaptive batching policy.” |

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
