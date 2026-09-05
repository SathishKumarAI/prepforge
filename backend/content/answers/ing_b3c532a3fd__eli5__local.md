---
qid: ing_b3c532a3fd__eli5__local
question: 'Q: Walk me through the latency budget of a voice agent. Where do the milliseconds
  go, and what is the single biggest lever?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 299
total_tokens: 473
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:00-05:00'
sources: []
---

Think of a voice agent as a relay runner who must finish the race in under two seconds (≈2000 ms).  
1️⃣ **Wake‑word spotting** – 150 ms: the microphone’s tiny brain quickly scans for “Hey Siri”.  
2️⃣ **Audio capture & packetization** – 50 ms: your voice is split into packets and sent over the network.  
3️⃣ **Network round‑trip** – 200–400 ms: packets travel to a cloud server and back, like a message sent by mail.  
4️⃣ **Speech‑to‑text (STT)** – 300 ms: the server turns sound waves into words.  
5️⃣ **Intent & dialog logic** – 100 ms: the agent figures out what you want.  
6️⃣ **Text‑to‑speech (TTS) synthesis** – 400 ms: it builds a natural‑sounding voice.  
7️⃣ **Playback** – 50 ms: the audio is sent to your speaker.

The largest lever is usually the **network round‑trip**. A faster, lower‑latency connection or edge computing can shave hundreds of milliseconds off the whole race, making the assistant feel more instant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
