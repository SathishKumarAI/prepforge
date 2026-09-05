---
qid: ing_f3f6a2db76__star__local
question: 'Explain: What A2A Actually Is — Agent to Agent Protocol - by Eric Roby
  and Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 315
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:36-05:00'
sources: []
---

**Situation**  
During a sprint for our real‑time fraud detection system, the data pipeline was hitting latency bottlenecks because every new transaction had to pass through a central orchestration service that queued and forwarded messages to multiple micro‑services.

**Task**  
I needed to redesign the communication pattern so that each service could directly request and receive the predictions it required without routing everything back to the orchestrator, while still preserving auditability and fault tolerance.

**Action**  
I introduced the Agent‑to‑Agent (A2A) protocol from Eric Roby’s “A2A: What A2A Actually Is.” Instead of a central broker, each micro‑service became an *agent* that could publish and subscribe to specific topics on a lightweight message bus (Apache Pulsar). Agents negotiated session IDs and negotiated authentication tokens using JWTs, then streamed feature vectors directly to the ML inference agent. I implemented back‑pressure handling with Pulsar’s flow control and used protobuf schemas for versioned payloads so that any new model version could be rolled out without breaking downstream agents.

**Result**  
Latency dropped from an average of 320 ms to 90 ms, a 72% improvement, and the system now scales linearly as we add more inference endpoints. I learned how agent‑centric design decouples services, reduces single points of failure, and keeps the architecture flexible for future ML model iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
