---
qid: ing_75c74f2562__fp__local
question: 'Explain: What contributes to time-to-first-audio — Understanding latency
  | ElevenLabs Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 453
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:15:25-05:00'
sources: []
---

### Time‑to‑First‑Audio in Text‑to‑Speech (TT‑S) Pipelines

At its core, **time‑to‑first‑audio** is the delay from receiving a text request to delivering the first audible sample. It is the *inference latency* of a TTS system and arises from three intertwined stages:

| Stage | What Happens | Why it Matters |
|-------|--------------|----------------|
| 1️⃣ **Pre‑processing** | Tokenisation, linguistic feature extraction, prosody prediction | Each operation (e.g., BERT embeddings, Viterbi alignment) is a small but non‑negligible matrix multiply or dynamic programming step. |
| 2️⃣ **Neural synthesis** | Feed‑forward transformer decoder + neural vocoder (e.g., WaveRNN, HiFi‑GAN) | The decoder must produce the first few mel‑frames before the vocoder can generate raw audio. Parallelism is limited by causal dependencies in autoregressive models or by the receptive field of non‑causal GANs. |
| 3️⃣ **Post‑processing** | Sample rate conversion, buffering for streaming | Even a trivial resampler introduces a fixed kernel window that cannot be overlapped with synthesis. |

The *deeper principle* is **sequential bottlenecking**: every sample depends on all preceding samples (or a short history). Thus the first audible chunk must wait until the model finishes its minimal forward pass, which scales roughly linearly with the number of decoder layers and the hidden dimensionality.

#### Non‑obvious Insight
Most people attribute latency solely to GPU speed. In reality, **model architecture choice dominates**: a 12‑layer transformer with 512‑dim hidden units can be *twice as fast* as a 6‑layer model if it uses *causal convolutional attention* (which removes the need for full self‑attention) and *quantised weights*. Hence, engineering lower latency is less about hardware and more about designing **sequentially friendly** architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
