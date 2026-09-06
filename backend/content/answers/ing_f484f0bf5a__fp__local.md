---
qid: ing_f484f0bf5a__fp__local
question: 'Explain: Build a multilingual voice assistant — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 438
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:39:21-05:00'
sources: []
---

**Why a multilingual assistant needs *joint* modeling**

A voice assistant must turn audio → text (ASR), infer intent → action (NLU), and generate speech (TTS). If each language were trained in isolation, the model would need a separate encoder–decoder stack per locale, inflating parameters and data requirements.  
The fundamental problem is *information reuse*: the acoustic signal shares phonetic patterns across languages; the semantic space of intents is language‑agnostic; the output voice can be synthesized once for all inputs. Thus we formulate a single network with:

1. **Shared acoustic encoder** – learns phoneme‑level embeddings invariant to script or accent.
2. **Language‑specific adapters** – lightweight modules that map shared features to language‑dependent vocabularies.
3. **Unified intent classifier** – operates on the fused representation, ensuring consistent downstream actions.

This architecture is an instance of *parameter‑efficient transfer learning*: a small set of tunable weights per new language allows rapid adaptation while keeping the core model fixed.

**Sarvam API: a contract for this pipeline**

- `POST /asr` → raw audio → JSON `{ “text”: …, “lang”: … }`
- `POST /nlp` → text + lang → intent/action
- `POST /tts` → action output → synthesized waveform

Each endpoint exposes the *same semantic interface*; the server internally routes to the appropriate adapter. The docs provide schema definitions and example payloads, enabling clients to discover available languages without hard‑coding.

**Non‑obvious insight**

The bottleneck is **adapter size**, not overall model capacity. Because adapters sit between shared encoder outputs and language vocabularies, their dimensionality can be *orders of magnitude smaller* than the full hidden state while still capturing idiosyncratic phonotactics. This allows adding dozens of languages with minimal compute, a principle that extends to any multimodal system where most signal is common but output spaces diverge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
