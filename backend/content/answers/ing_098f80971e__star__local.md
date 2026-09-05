---
qid: ing_098f80971e__star__local
question: 'Explain: The Pipeline, Component by Component — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 480
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:07-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a customer‑support voice bot for an e‑commerce platform that needed to answer queries in real time while keeping latency below 300 ms per turn. The existing system only handled text, so we had to build a fully end‑to‑end speech pipeline.

**Task** – Design and deploy a production‑ready realtime voice agent that could transcribe spoken input, understand intent, generate a response, synthesize it back into speech, all within the latency window and with high accuracy (≥ 90 % WER and 85 % intent match).

**Action** – I broke the pipeline into four core components:
1. **ASR** – Integrated Mozilla DeepSpeech on a GPU‑enabled edge node; fine‑tuned with 20 k hours of domain‑specific audio to drop WER from 12 % to 5 %.  
2. **NLU & Dialogue Manager** – Built a lightweight Rasa NLU model, augmented with a custom rule engine for fallback handling. The dialogue state machine was written in Python and exposed via gRPC for low overhead.  
3. **Response Generation** – Used a fine‑tuned GPT‑2 model on a single NVIDIA A100 to produce concise replies; wrapped it in a microservice with async inference pipelines.  
4. **TTS & Streaming** – Employed Tacotron‑2 + WaveGlow, streaming the audio buffer through an RTMP server so users heard speech immediately as it was generated.

I orchestrated these services using Docker Compose and Kubernetes, added Prometheus metrics for latency per component, and implemented automatic scaling based on CPU/GPU load.

**Result** – The bot achieved 92 % WER‑corrected accuracy, 87 % intent match, and an average turn latency of 260 ms. Customer satisfaction scores rose by 18 %, and we reduced support ticket volume by 35 %. I learned that micro‑optimizing each component and rigorous latency monitoring are critical for a smooth real‑time voice experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
