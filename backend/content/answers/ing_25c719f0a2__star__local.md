---
qid: ing_25c719f0a2__star__local
question: 'Explain: Two different latency numbers — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 309
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:19-05:00'
sources: []
---

**Situation:**  
While integrating ElevenLabs’ text‑to‑speech API into our mobile app, the QA team flagged a discrepancy: the “API latency” reported by the dashboard was 180 ms, yet end users experienced around 350 ms for speech playback.

**Task:**  
I had to identify why two latency metrics differed and reduce overall user wait time below 200 ms without compromising audio quality.

**Action:**  
First, I dissected ElevenLabs’ documentation: “latency” refers to the round‑trip request/response time measured at the server, whereas “total latency” includes client‑side buffering and decoding. I captured packet traces on the device, confirming that 170 ms was network + API processing, while an additional ~180 ms stemmed from our app’s audio decoder (libsox) and a 100 ms pre‑buffer for smooth playback. I replaced the decoder with a lighter FFmpeg pipeline, tuned the buffer size to 50 ms, and added async pre‑fetching of subsequent utterances.

**Result:**  
The measured total latency dropped to 190 ms, meeting our SLA. User complaints fell by 70 %. I learned that understanding vendor metrics versus end‑to‑end user experience is critical, and that small client‑side optimizations can outweigh server‑side gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
