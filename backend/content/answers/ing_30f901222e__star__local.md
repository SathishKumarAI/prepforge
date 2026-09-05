---
qid: ing_30f901222e__star__local
question: 'Design a hybrid architecture: some requests on-device, some to the cloud.
  How does the router decide?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 376
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:06:31-05:00'
sources: []
---

**Situation** – At my last startup we were building a smart home assistant that had to respond to voice commands while staying within the $5/month bandwidth limit for our users in rural areas. The latency requirement was under 200 ms for most interactions, but we also needed accurate intent classification for complex queries.

**Task** – I had to design a hybrid inference pipeline: lightweight on‑device models for quick, routine requests, and cloud‑based heavy models for anything that required deeper context or updates. The router needed to decide in real time which path to take without compromising user experience or cost.

**Action** – First, I profiled the typical request set and identified three classes: (1) “turn on lights,” (2) “play music,” and (3) “weather forecast.” I built a small decision tree on the device using TensorFlow Lite that scored each utterance against an intent confidence threshold. If the confidence > 0.85, the command was handled locally; otherwise it was queued to the cloud. For the queue I added a lightweight priority flag and used gRPC with compression to keep bandwidth low. I also implemented a feedback loop: after a cloud inference, the device updated its local model via incremental fine‑tuning on user corrections.

**Result** – The hybrid router reduced cloud traffic by 70 % and kept average latency at 120 ms for 85 % of requests. We cut data costs from $12/month to $6/month per user while maintaining a 99.5 % accuracy rate. I learned that simple, intent‑based thresholds combined with continuous local model updates can deliver both cost efficiency and low latency in hybrid AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
