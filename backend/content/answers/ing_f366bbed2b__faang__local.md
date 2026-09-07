---
qid: ing_f366bbed2b__faang__local
question: 'Explain: Speech synthesis — Conversational AI latency: What is it and why
  it matters?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 532
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:05:18-05:00'
sources: []
---

**Clarify**  
We’re asked what *conversational‑AI latency* means for speech synthesis, and why low latency matters. I’ll assume we’re talking about the end‑to‑end delay from when a user speaks to when they hear synthesized speech (TTS) back in an interactive system.

**Approach**  
1. Define latency components (audio capture → ASR → intent → TTS → audio output).  
2. Explain how each component contributes time, especially network round‑trips for cloud models.  
3. Discuss why a few hundred milliseconds feels “natural” versus seconds of delay feeling robotic.

**Depth**  
Latency is the total time from utterance start to audible reply. In real‑time dialogue it’s typically broken into:  
- **Capture & buffering (≈20 ms)** – microphone latency and initial audio chunking.  
- **ASR inference (≈200–300 ms)** – local or cloud transcription; model size, network hop count drive this.  
- **Dialogue management (≈50 ms)** – intent extraction, response generation.  
- **TTS synthesis (≈150–250 ms)** – waveform generation (e.g., Tacotron + WaveNet) or pre‑rendered voicebanks.  
- **Audio playback (≈20 ms)** – DAC and speaker latency.

A delay >500 ms breaks conversational flow, causing users to “talk over” the system or feel it’s not listening. For tasks like customer support or virtual assistants, even 100–200 ms improvements can increase perceived responsiveness and satisfaction.

**Edge Cases**  
- **High‑latency networks** (mobile edge) push ASR/TTS to local inference.  
- **Large vocabularies / long utterances** inflate ASR time.  
- **Batching multiple requests** in cloud pipelines increases queue delay.  
Testing should include varied network RTTs, CPU loads, and user‑reported “talk‑over” events.

**Optimize & Communicate**  
- Move critical models (ASR/TTS) to edge devices or use lightweight distillates.  
- Pipeline streaming: start TTS as soon as partial transcription arrives.  
- Use adaptive buffering based on measured RTT.  
Explain trade‑offs between model fidelity and speed, and quantify impact on user engagement metrics. This structured reasoning shows clear problem framing, technical depth, and a roadmap for measurable improvement—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
