---
qid: ing_f14ad8010f__faang__local
question: 'Explain: Do Not Depend on Delivery Order — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 444
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:00:44-05:00'
sources: []
---

**Clarify**  
We’re asked to design a webhook‑based delivery system that *doesn’t assume* messages arrive in the order they were published. The goal is reliable, ordered‑by‑event processing on the consumer side while tolerating out‑of‑order network delivery.

Key assumptions:  
- Producers publish events at high rate.  
- Consumers can handle idempotent calls.  
- Network latency and failures cause reordering or duplication.  

**Approach**  
1. **Sequence metadata** – each event carries a monotonically increasing sequence number per stream.  
2. **Consumer buffering** – the receiver stores out‑of‑order payloads in a bounded cache keyed by seq#.  
3. **Watermark / checkpointing** – once all lower seq#s are processed, emit next watermark and purge buffer.  
4. **Idempotency & deduplication** – store processed IDs to reject duplicates.  

**Depth**  
- Store events in a key‑value store (e.g., Redis) with TTL for bounded memory.  
- Use optimistic concurrency on the consumer side: `GET` sequence, process if > last_processed.  
- Complexity: O(1) per event for enqueue; amortized O(n) to purge when watermark advances.  
- Trade‑off: larger buffers increase latency but reduce reprocessing cost.

**Edge Cases**  
- Missing events: implement a timeout after which the consumer treats the gap as lost and moves on, optionally requesting retransmission.  
- Replay attacks: enforce cryptographic signatures per payload.  
- Burst traffic: backpressure via HTTP 429 or push‑based rate limits.

**Optimize & Communicate**  
To improve, shard sequences by topic to reduce contention, and use a compact binary protocol for bandwidth. I’d explain the design as “sequence + buffer” and highlight how it guarantees eventual in‑order consumption while tolerating real‑world network quirks. This demonstrates structured thinking, clear assumptions, and depth in trade‑offs—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
