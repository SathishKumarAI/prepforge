---
qid: ing_098f80971e__faang__local
question: 'Explain: The Pipeline, Component by Component — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 543
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:06:39-05:00'
sources: []
---

**Clarify**  
We’re asked to describe a real‑time voice agent’s processing pipeline—how raw audio is turned into an action or response, component by component. Key assumptions: single‑user session, low latency (<200 ms), cloud‑based ASR/LLM, and deterministic output.

**Approach**  
1. **Capture & Pre‑processing** – microphone input → noise‑reduction, echo cancellation, VAD.  
2. **Feature Extraction** – convert waveform to MFCCs or spectrogram frames.  
3. **Automatic Speech Recognition (ASR)** – neural acoustic model + language model → transcript + confidence scores.  
4. **Intent & Entity Detection** – NLU module parses intent, slots; may use transformer‑based classifier.  
5. **Dialogue Management** – state tracker decides next action: query, fallback, or response generation.  
6. **Response Generation** – LLM or rule‑based template fills slots → natural‑language text.  
7. **Text‑to‑Speech (TTS)** – neural vocoder synthesizes waveform; voice cloning if personalized.  
8. **Playback & Feedback Loop** – audio sent to speaker, user listens, loop restarts.

**Depth**  
- ASR latency ≈ 100 ms on edge GPU; NLU <30 ms; TTS ~50 ms.  
- Use streaming models: incremental decoding for “real‑time” feel.  
- Confidence thresholds trigger clarification queries to avoid hallucinations.  
- Dialogue state stored in a lightweight KV store (Redis) per session.

**Edge Cases**  
- Background noise → VAD false negatives → ASR failure.  
- Accents or code‑switching → low confidence → fallback to “I didn’t catch that.”  
- Network hiccups: graceful degradation to local cache or queued responses.  
- Multi‑turn ambiguity: state machine must handle partial intents.

**Optimize & Communicate**  
- Quantize models (INT8) for edge deployment, reducing latency by ~30 %.  
- Parallelize NLU and TTS on separate cores; pipeline buffering reduces overall turnaround.  
- Explain trade‑offs: higher ASR accuracy vs. increased latency; richer LLM responses vs. compute cost.  

By structuring the answer in this way—clarifying assumptions, outlining steps, detailing each component’s role, addressing edge cases, and discussing optimizations—we demonstrate clear problem‑solving, depth, and communication that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
