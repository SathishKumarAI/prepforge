---
qid: ing_989cb03c25__faang__local
question: 'Explain: Speech-shaped output — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 514
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:39:29-05:00'
sources: []
---

**Clarify**  
We need a system that can take spoken input and produce a natural‑sounding voice response in real time—essentially a “speech‑shaped output” for a realtime voice agent (think Alexa, Google Assistant). Key assumptions: low latency (<200 ms end‑to‑end), high intelligibility across accents, robust to background noise, and support for multiple languages.

**Approach**  
1. **Front‑end**: Voice activity detection → acoustic feature extraction (MFCC/Log‑Mel) → streaming ASR model (e.g., DeepSpeech or Whisper‑tiny).  
2. **Back‑end**: NLP inference to generate text reply.  
3. **TTS**: Use a neural TTS engine (Tacotron‑2 + HiFi‑GAN or FastSpeech 2 + VITS) with streaming synthesis; employ a voice‑clone model for personalization.  
4. **Latency budget**: Pipeline in parallel where possible, use GPU inference and batch small frames.

**Depth**  
- ASR runs on 10 ms windows, accumulates until NLU confidence is high (≈0.7).  
- TTS uses “streaming” decoder that emits mel‑spectrogram frames every 50 ms; HiFi‑GAN converts to waveform in <30 ms per frame.  
- End‑to‑end latency ≈ 150–180 ms, meeting real‑time constraints.  
- Model sizes: ASR (≈50 M params), TTS generator (≈70 M), vocoder (≈30 M). Complexity O(1) per time step; memory ~200 MB.

**Edge Cases**  
- Accents or heavy background noise → fallback to robust acoustic model or ask for clarification.  
- Long responses → chunking strategy with “buffered” synthesis to avoid buffer underrun.  
- Network hiccups → local caching of recent utterances, graceful degradation.

**Optimize & Communicate**  
- Quantize models (INT8) to reduce latency and energy on edge devices.  
- Use knowledge distillation from larger teacher models for higher accuracy at smaller size.  
- Profile each stage; report latency breakdown in dashboards so the team can pinpoint bottlenecks.  

This plan balances low latency, high quality, and scalability—exactly what a FAANG interview expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
