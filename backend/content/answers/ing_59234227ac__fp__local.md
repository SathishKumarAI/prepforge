---
qid: ing_59234227ac__fp__local
question: 'Explain: The Two Architectures — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 496
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:13:57-05:00'
sources: []
---

**The Two Architectures for Realtime Voice Agents**

At the heart of a voice agent is *low‑latency, continuous inference*: the system must transcribe spoken input as it arrives and generate audible output before the user can finish speaking. This imposes two fundamental constraints:

1. **Streaming inference** – every frame of audio must be processed immediately to keep end‑to‑end latency below a few hundred milliseconds.
2. **Joint optimization** – the acoustic, language, and synthesis modules must cooperate so that errors in one do not cascade.

These constraints give rise to two canonical architectures:

| Architecture | Flow | Key Idea |
|--------------|------|----------|
| **Modular Pipeline** | Acoustic model → Language model (often RNN/Transformer) → Text‑to‑Speech (TTS) decoder | Each stage is trained separately; latency is bounded by the slowest component. The language model can be *external*, allowing plug‑in of advanced NLU modules. |
| **End‑to‑End Transformer** | Audio → Token embeddings → Self‑attention → Text + TTS tokens | A single network learns alignment and synthesis jointly, reducing hand‑crafted interfaces and enabling *dual‑head* decoding (text + speech) that shares representations. |

The deeper principle is *information bottleneck*: the pipeline must compress raw audio into a compact latent representation that preserves linguistic content while discarding speaker idiosyncrasies. In the modular approach this compression happens at the acoustic encoder; in the end‑to‑end model it occurs implicitly through attention weights, which act as soft alignments.

**Non‑obvious insight:**  
In streaming scenarios, *chunked self‑attention* (processing fixed‑size audio windows with a small causal padding) can achieve near‑real‑time performance while still allowing the model to learn long‑range dependencies. This technique bridges the gap between true end‑to‑end models and practical latency constraints, often outperforming both pure modular pipelines and naïve streaming Transformers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
