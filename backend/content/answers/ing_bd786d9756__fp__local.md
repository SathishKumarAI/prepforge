---
qid: ing_bd786d9756__fp__local
question: 'Explain: Streaming and latency — Understanding latency | ElevenLabs Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 378
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:46:18-05:00'
sources: []
---

**Latency in streaming machine‑learning pipelines**

The *latency* of a streamed inference system is the time between a user’s request and the first usable output token.  
Why does it matter? In interactive AI (chat, voice‑to‑text) every millisecond counts because human perception degrades after ~200 ms; beyond that users feel “lag”. Thus minimizing latency directly improves *user experience*.

From a first‑principles view, latency is the sum of three deterministic components:

1. **Pre‑processing** – reading input and converting it to tensors.  
2. **Model execution** – forward pass time, which scales with model depth, width, and hardware utilization.  
3. **Post‑processing / streaming** – formatting tokens and transmitting them over a network.

Optimisation theory tells us that the overall latency is bounded by the *critical path* of these stages; any bottleneck dominates. Hence engineers focus on reducing the slowest component (often model execution) through techniques like *model pruning*, *quantization*, or *dynamic batching*.  

A subtle, often overlooked insight: **streaming can paradoxically increase total latency if the system keeps buffering tokens**. Many frameworks buffer until a fixed “token window” is full before sending; this reduces network overhead but adds a deterministic delay equal to that window size. The optimal trade‑off balances *per‑token cost* against *buffer‑size induced latency*, which can be solved analytically using queuing theory.

In short, streaming latency is a compositional measure whose minimisation requires tight coordination of data flow, model design, and network protocol—otherwise the human‑centric goal of “instantaneous” response remains out of reach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
