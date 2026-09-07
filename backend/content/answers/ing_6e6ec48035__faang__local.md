---
qid: ing_6e6ec48035__faang__local
question: 'Explain: Where TCP Fits — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 366
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:00:40-05:00'
sources: []
---

**Where TCP Fits – TCP vs UDP in ML Systems**

| Step | What to Cover |
|------|---------------|
| **Clarify** | *Problem:* In an ML pipeline (data ingestion, inference serving), should we use TCP or UDP for transport? <br>*Assumptions:* We need reliable data delivery, low latency, and support for large payloads; we’re not streaming real‑time video. |
| **Approach** | 1️⃣ Identify traffic pattern (request/response vs bulk). 2️⃣ Evaluate reliability, ordering, congestion control needs. 3️⃣ Map to TCP or UDP accordingly. |
| **Depth** | • **TCP**: connection‑oriented, guarantees in‑order delivery, retransmission, flow & congestion control → essential for training data shuffling, checkpointing, model uploads, and inference requests where accuracy matters. <br>• **UDP**: stateless, minimal header overhead, no retransmission → useful only for non‑critical telemetry or when loss can be tolerated (e.g., streaming metrics). |
| **Edge Cases** | • High packet loss networks → UDP fails; fallback to TCP. <br>*Large batch transfers* may hit MTU limits; use TCP’s segmenting or application‑level chunking. |
| **Optimize & Communicate** | Recommend a hybrid: **TCP for core ML traffic**, **UDP with FEC (Forward Error Correction)** for optional high‑frequency logs. Explain trade‑offs and how we monitor packet loss to switch protocols if needed. |

*Summary:* In most ML system designs, TCP is the default transport because correctness outweighs raw throughput; UDP is reserved for lossy‑tolerant telemetry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
