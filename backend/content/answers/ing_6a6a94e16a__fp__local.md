---
qid: ing_6a6a94e16a__fp__local
question: Walk me through streaming TTS. How do you chunk input text, and how do you
  size the jitter buffer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 477
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:51:01-05:00'
sources: []
---

**Why streaming TTS must be chunked**

A speech‑synthesis engine is a *real‑time* pipeline: text → linguistic analysis → acoustic model → waveform synthesis.  
If the whole utterance were processed at once, latency would grow linearly with length, breaking “talk‑like” interaction. The fundamental problem is that the acoustic model needs *context* (previous phonemes) but not an entire sentence. Therefore we break the input into **text units** that are just large enough to provide sufficient linguistic context yet small enough to keep latency bounded.

1. **Unit granularity**  
   - *Phoneme‑level*: minimal latency, but each unit needs a full forward pass through the acoustic model – expensive.  
   - *Word/phrase level*: fewer passes, smoother prosody, but risk of mis‑pronunciation at boundaries.  
   The sweet spot is **“prosodic chunks”**: spans that end on a natural pause or intonation boundary (e.g., after punctuation). This keeps the model’s hidden state continuous while avoiding awkward cuts.

2. **Jitter buffer sizing**

A jitter buffer smooths network‑induced timing variance before synthesis. Its size \(B\) is chosen from:

- **Propagation delay** \(D\): minimal round‑trip time of the text channel.
- **Network jitter** \(\sigma_j\): standard deviation of packet arrival times.
- **Processing latency** \(L_p\): expected time to synthesize a chunk.

A conservative choice:
\[
B = D + k\,\sigma_j + L_p
\]
where \(k \approx 2–3\) ensures >95 % probability that the next chunk arrives before synthesis finishes.  
If \(B\) is too small, underruns occur; if too large, latency grows unnecessarily.

**Non‑obvious insight:** The *optimal* jitter buffer is not static. Modern systems can **predict** \(\sigma_j\) from recent packet timings and adapt \(k\) on the fly, trading a few milliseconds of extra delay for a measurable drop in underruns—something many implementations ignore.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
