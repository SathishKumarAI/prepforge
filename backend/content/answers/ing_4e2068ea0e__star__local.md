---
qid: ing_4e2068ea0e__star__local
question: 'Explain: The 2026 Stack — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 403
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:04:47-05:00'
sources: []
---

**Situation** – In early 2025 I joined a fintech startup that was launching its “Speak‑to‑Trade” feature: customers could place trades and get instant portfolio updates via a voice agent integrated into their mobile app. The launch deadline coincided with the Q2 earnings season, so latency had to be under 200 ms or we’d lose user trust.

**Task** – I was tasked with building the real‑time voice stack that would transcribe, interpret intent, generate a natural‑language response, and synthesize speech—all within that latency budget—while handling background noise from commuters and meeting GDPR’s privacy requirements.

**Action** – I architected a microservices pipeline: 1) Whisper‑lite on-device for low‑latency ASR; 2) a custom BERT‑based intent classifier hosted in an edge‑GPU cluster; 3) a policy engine that mapped intents to dynamic response templates stored in Redis; and 4) Tacotron 2 + WaveGlow for on‑device TTS, with a fallback to cloud if the device was offline. I introduced a “confidence gating” layer: responses were only spoken if ASR confidence >0.85; otherwise we asked the user to repeat. To keep GDPR compliant, all audio was encrypted in transit and processed locally unless explicitly consented.

**Result** – The prototype achieved 180 ms average RTT with 94% correct intent detection, beating our target by 20 %. Post‑launch analytics showed a 35% increase in trade volume from voice users and a 12% drop in support tickets for “voice not understood.” I learned that balancing edge processing with cloud fallback is key to meeting strict latency while preserving privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
