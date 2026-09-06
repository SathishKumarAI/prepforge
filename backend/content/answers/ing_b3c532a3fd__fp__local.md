---
qid: ing_b3c532a3fd__fp__local
question: 'Q: Walk me through the latency budget of a voice agent. Where do the milliseconds
  go, and what is the single biggest lever?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 584
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:19-05:00'
sources: []
---

**Latency budget of a voice agent – from physics to policy**

1. **Acoustic capture & pre‑processing (≈ 5–10 ms)**  
   The microphone digitises the waveform; a short‑frame FFT or filterbank extracts features. The size of the frame defines the *sampling latency*: 20 ms frames give lower latency but noisier cues.

2. **Packetisation & transport (≈ 30–70 ms)**  
   Features are packed into RTP/UDP packets. Propagation delay in Wi‑Fi or cellular links dominates; jitter buffers add a deliberate wait (often 50 ms) to smooth out bursty traffic, trading latency for continuity.

3. **Inference engine (≈ 40–80 ms)**  
   The neural model consumes the feature stream and outputs an intent/state. This is where *optimization* matters: smaller FLOPs or a more efficient architecture reduces time linearly; pruning, quantisation, or knowledge‑distillation can shave tens of milliseconds.

4. **Response generation & TTS (≈ 30–60 ms)**  
   The dialogue policy builds a natural‑language utterance; the text‑to‑speech synthesiser converts it to audio. Modern neural TTS (FastSpeech/Glow‑TTS) can produce 10 ms per second of speech, but decoding still consumes ~40 ms.

5. **Audio playback & driver latency (≈ 5–15 ms)**  
   The OS buffers the PCM stream before sending it to the DAC; drivers add a small fixed delay.

**Total end‑to‑end ≈ 150–250 ms**, comfortably below the 400 ms perceptual threshold for “real‑time” interaction.  

### Single biggest lever
The *inference engine* is the primary bottleneck: model size and inference speed scale almost linearly with latency, whereas other stages are bounded by physical limits (speed of light, OS scheduling). A well‑optimised network‑efficient architecture can drop latency by 30–50 ms, a margin often decisive in user experience.

### Non‑obvious insight
Most developers focus on model compression alone. The *jitter buffer size* is the hidden lever: slightly increasing it (e.g., from 20 ms to 40 ms) can halve packet loss at the cost of only ~10 % additional latency, yielding a smoother, more robust conversation that users perceive as faster overall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
