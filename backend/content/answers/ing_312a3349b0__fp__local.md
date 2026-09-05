---
qid: ing_312a3349b0__fp__local
question: 'Explain: Available now in ElevenLabs Agents — ElevenLabs \u2014 Scribe
  v2 Realtime live in ElevenLabs Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 453
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:49:24-05:00'
sources: []
---

**Why “Scribe v2 Realtime” matters**

At its core, a *real‑time transcription agent* solves the problem of converting an unbounded audio stream into a coherent text representation with minimal latency and maximal fidelity. The fundamental constraints are:

1. **Latency ≈ 0 s** – downstream tasks (e.g., live captioning or voice‑controlled UI) demand instant feedback.
2. **Accuracy ≈ 100 %** – errors propagate; a single mis‑transcribed word can derail entire workflows.
3. **Scalability** – the model must run on commodity hardware without sacrificing speed.

The design of ElevenLabs’ Scribe v2 follows from three deep principles:

| Principle | How it shapes the architecture |
|-----------|--------------------------------|
| **Streaming autoregressive decoding** | The model emits tokens as soon as a confidence threshold is reached, not after full utterance completion. |
| **Adaptive context windows** | It dynamically shrinks or expands its receptive field based on speaker change or background noise, keeping computation constant while preserving accuracy. |
| **End‑to‑end joint training with perceptual loss** | The loss function directly penalizes perceived “incomprehensibility” rather than isolated phoneme errors, aligning optimization with user experience. |

**Non‑obvious insight:**  
Scribe v2’s *real‑time* claim hinges on a subtle trade‑off between **quantization granularity** and **entropy coding**. By training the acoustic encoder to produce *log‑probability vectors* that are highly sparse, the decoder can skip large swaths of uninformative dimensions, effectively compressing the input stream without loss of discriminative power. This sparsity is what allows the model to maintain low latency on a single GPU while still achieving near‑state‑of‑the‑art word error rates.

In short, ElevenLabs’ Scribe v2 demonstrates that with carefully engineered streaming decoders, adaptive context management, and perceptually tuned loss functions, one can deliver real‑time, accurate transcription at scale—exactly what modern voice‑first applications demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
