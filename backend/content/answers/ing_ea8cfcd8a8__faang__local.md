---
qid: ing_ea8cfcd8a8__faang__local
question: 'Explain: Design a production voice agent. Pipeline vs speech-to-speech,
  the latency budget, and interruption handling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 519
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:45:15-05:00'
sources: []
---

**Clarify**  
We’re building a real‑time voice assistant that takes user speech → intent → response → spoken reply. Key assumptions:  

* Single‑user, low‑latency (< 400 ms end‑to‑end).  
* Continuous streaming audio; must support mid‑utterance interruption (e.g., “stop” or new command).  
* Deployment on edge devices + cloud backend for heavy NLP.

**Approach**  

1. **Pipeline (speech → text → intent → response → text) + TTS**  
   * ASR: streaming Whisper/DeepSpeech → partial transcripts.  
   * NLU: lightweight intent classifier on device, fallback to server.  
   * Response generation: rule‑based or GPT‑style API.  
   * TTS: fast neural vocoder (Tacotron2 + WaveGlow) on edge.

2. **Speech‑to‑speech end‑to‑end**  
   * Voice‑clone model that maps raw audio → semantic vector → synthesized voice.  
   * Lower compute but higher latency; suitable for high‑bandwidth environments.

**Latency budget**  

| Stage | Target (ms) |
|-------|-------------|
| Capture + packet loss | 20 |
| ASR partial decode | 80 |
| NLU inference | 30 |
| Backend generation | 120 |
| TTS synthesis | 60 |
| Network round‑trip | 50 |

Total ≈ 360 ms, leaving margin for buffering.

**Interruption handling**  

* **Streaming cancel token**: client sends “stop” → server aborts current NLU/response.  
* **ASR hot‑word detection**: triggers immediate context switch.  
* **Voice activity detection (VAD)**: resets state on silence > 1 s.

**Edge Cases & Testing**  

* Network jitter → graceful degradation to local cache.  
* Background noise → robust VAD thresholds.  
* Rapid consecutive commands → queue with priority.

**Optimize & Communicate**  

* Profile each module, use TensorRT for inference acceleration.  
* Employ quantization (INT8) for ASR/NLU on ARM.  
* Explain trade‑offs: pipeline offers modularity and easier debugging; end‑to‑end reduces latency but harder to maintain.  
* Present metrics (latency percentiles, error rates) in dashboards for continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
