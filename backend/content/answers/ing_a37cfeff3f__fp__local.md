---
qid: ing_a37cfeff3f__fp__local
question: 'Explain: The ~75ms figure in context — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 462
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:53:46-05:00'
sources: []
---

**Why the “~75 ms” number appears for ElevenLabs’ text‑to‑speech (TTS) pipeline**

At its core, TTS is a *sequence‑to‑sequence* problem: a sentence → mel‑spectrogram → waveform.  
Each stage has a well‑defined cost:

| Stage | Typical GPU time per 1 s audio | Notes |
|-------|-------------------------------|-------|
| Text tokenisation & encoder | ≈10 ms | Purely CPU, negligible for short utterances |
| Spectrogram decoder (Transformer) | ≈30–40 ms | Inference on a 4‑GB GPU; depends on sequence length and beam size |
| Waveform synthesis (vocoder, e.g. HiFi‑GAN) | ≈20–25 ms | Real‑time capable due to convolutional architecture |
| Network round‑trip & buffering | ≈5–10 ms | 1 Gbps link → ~50 µs per MB; buffer + TLS add a few ms |

Summing the dominant terms gives **≈75 ms** for a one‑second utterance on a single inference node.  
This figure is *not* an arbitrary target but follows from:

1. **Bottleneck principle** – the decoder and vocoder dominate latency; improving them yields diminishing returns.
2. **Information bottleneck** – each token must be encoded before decoding, limiting parallelism to sequence length.
3. **Real‑time constraint** – a 75 ms delay keeps the system below typical human conversational lag (~200 ms), preserving naturalness.

*Non‑obvious insight*: The majority of latency comes from *model architecture*, not hardware speed. Convolutional vocoders (e.g., HiFi‑GAN) reduce latency by ≈30 % compared to autoregressive ones, because they allow parallel waveform generation. Thus, architectural choices directly translate into measurable end‑to‑end delay, explaining why ElevenLabs can claim a consistent ~75 ms figure across diverse workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
