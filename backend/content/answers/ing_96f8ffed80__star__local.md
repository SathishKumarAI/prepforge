---
qid: ing_96f8ffed80__star__local
question: 'Explain: Ultra-low latency Speech to Text for real-time agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:55-05:00'
sources: []
---

**Situation**  
At a fintech startup we built a live customer‑support chatbot that needed instant voice transcription so agents could read and respond within 300 ms of the user speaking. The existing cloud STT service lagged at ~1.2 s, breaking the conversational flow.

**Task**  
Reduce end‑to‑end latency to below 250 ms while keeping accuracy above 92 % on our domain vocabulary (payments, fraud alerts).

**Action**  
I prototyped an edge inference pipeline using a lightweight QuartzNet model converted to TensorFlow Lite. I deployed it inside the agent’s browser via WebAssembly and used WebRTC for low‑latency audio capture with a 10 ms packet size. To keep CPU usage minimal, I added a Voice Activity Detection (VAD) module that only wakes the recognizer during speech, cutting idle cycles by 70 %. For robustness on noisy calls, I trained a small noise‑adaptation layer on 30 hours of call recordings and integrated a confidence‑based post‑filter to flag uncertain words for human review.

**Result**  
Latency dropped from 1.2 s to 180 ms on average, with accuracy at 94 % (WER 6%). Agent satisfaction scores rose by 15 %, and we saw a 20 % reduction in call‑time for high‑priority tickets. I learned how careful model quantization, real‑time audio handling, and selective inference can turn a cloud‑bound STT into a truly responsive system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
