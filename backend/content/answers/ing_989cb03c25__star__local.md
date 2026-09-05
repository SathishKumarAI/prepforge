---
qid: ing_989cb03c25__star__local
question: 'Explain: Speech-shaped output — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 333
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:45-05:00'
sources: []
---

**Situation:** At my previous company we were tasked with launching a real‑time customer support chatbot that could speak like a human agent during live calls. The client’s SLA required that the bot respond within 200 ms and maintain natural prosody, even while fetching data from multiple microservices.

**Task:** I had to design and implement a speech‑shaped output pipeline that generated intelligible, emotionally appropriate voice responses on the fly, integrating text‑to‑speech (TTS) with real‑time audio synthesis and dynamic sentiment adjustment.

**Action:** I chose NVIDIA’s Riva for low‑latency inference, coupled it with Tacotron‑2 for prosody modeling and a lightweight WaveRNN vocoder. To keep latency under 200 ms, I pre‑buffered the TTS engine on the edge server, used async gRPC calls to the knowledge base, and applied a custom neural pitch‑shift module that adjusted intonation based on sentiment scores from an LSTM classifier. I also built a fallback rule‑based system for rare phrases to guarantee 100 % uptime.

**Result:** The agent achieved a 97 % user satisfaction score in beta tests, with average response latency of 180 ms and a 30 % reduction in call transfers compared to the legacy text bot. I learned that marrying deep‑learning prosody models with edge‑optimized inference is key for truly human‑like real‑time voice agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
