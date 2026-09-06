---
qid: ing_c6152d5da1__fp__local
question: 'Explain: Critical frontend decision: Streaming — ChatGPT System Design
  - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 403
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:02:57-05:00'
sources: []
---

### Why “Streaming” is the linchpin of a production‑grade ChatGPT

At its core, a language model must turn an *input prompt* into a *sequence of tokens*.  
If every request forces a full roundtrip through GPU, CPU, network and storage, latency grows linearly with output length. In practice, users expect sub‑second responses even for multi‑sentence answers; the system can’t afford to wait until the entire answer is ready before it begins to deliver.

**Streaming solves this by decoupling generation time from delivery time:**

1. **Token‑by‑token pipeline** – After the model emits a token, it immediately streams it downstream (WebSocket, SSE).  
2. **Back‑pressure control** – The frontend can throttle consumption; the backend need only keep the last few hidden states in memory, not the whole output history.  
3. **Cost optimisation** – Compute is paid for *actual* tokens produced, not for a fixed maximum length.

From an information‑theoretic angle, streaming turns the *output entropy rate* into a continuous flow: each emitted token reduces uncertainty about future tokens only marginally, so the system can “predict ahead” with minimal buffer. Geometrically, it treats generation as a walk on the model’s latent manifold; by exposing intermediate steps we avoid storing high‑dimensional hidden states.

**Non‑obvious insight:**  
Streaming transforms *latency* into an *interactive experience*. The first token appears in ~50 ms; subsequent tokens arrive every 10–20 ms. This perceptual smoothing masks the underlying GPU burstiness, making the model feel instantaneous even though each token still requires a full transformer pass. Thus, streaming is not just a performance hack—it fundamentally reshapes user perception of AI speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
