---
qid: ing_ea8cfcd8a8__fp__local
question: 'Explain: Design a production voice agent. Pipeline vs speech-to-speech,
  the latency budget, and interruption handling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 521
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:17:42-05:00'
sources: []
---

**Designing a Production Voice Agent**

The core problem is *real‑time, intelligible dialogue* over noisy channels. We must convert user speech → intent → response → synthesized voice with sub‑second latency, while allowing the user to interrupt at any moment.  

1. **Pipeline vs. Speech‑to‑Speech (S2S)**  
   - *Pipeline*: ASR → NLU → Dialogue Manager → TTS. Each stage is independent, enabling fine‑grained optimization and failure recovery. Latency accumulates as \(L = L_{\text{ASR}} + L_{\text{NLU}} + L_{\text{DM}} + L_{\text{TTS}}\).  
   - *S2S*: End‑to‑end neural transducer maps audio to audio, eliminating intermediate symbols but forcing the model to learn a joint representation. Latency is dominated by the encoder‑decoder runtime; however, it can be lower if the network is lightweight and quantized.

2. **Latency Budget**  
   Human perception tolerates ~200 ms for “immediate” response, 400–600 ms for conversational flow. Allocate:  
   - ASR: 150 ms (online streaming).  
   - NLU/DM: 100 ms (rule‑based or lightweight transformer).  
   - TTS: 120 ms (vocoder with pre‑buffered phoneme stream).  
   Total ≈ 370 ms, comfortably within the budget.

3. **Interruption Handling**  
   Treat speech as a *stream of events*. The ASR streams partial hypotheses; the dialogue manager listens for a *turn‑end* flag (e.g., silence + energy drop) but remains ready to abort TTS mid‑utterance if new audio arrives. Implement a *priority queue*: user input > system output. When an interruption is detected, flush TTS buffer, pause current synthesis, and resume ASR immediately.

**Non‑obvious insight:** The bottleneck is often not the raw computational cost but the *buffering strategy*. By overlapping decoding (ASR) with pre‑synthesizing phonemes (TTS), we hide latency: as soon as a word hypothesis arrives, its phoneme representation can be queued for synthesis while the next segment is being recognized. This pipelined buffering turns sequential stages into parallel pipelines, reducing perceived lag without extra compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
