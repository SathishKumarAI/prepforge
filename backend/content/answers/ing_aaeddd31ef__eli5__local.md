---
qid: ing_aaeddd31ef__eli5__local
question: Design the teleoperation data pipeline. Why is data collection the bottleneck
  in robotics rather than compute?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 240
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:09:01-05:00'
sources: []
---

**Tele‑operation data pipeline (the “remote‑control highway”)**

1. **Human operator** sends commands to a robot over the internet.  
2. The robot streams back video, depth maps, joint positions, and sensor logs.  
3. All that raw footage and telemetry is stored in a cloud database.  
4. Engineers later replay these recordings, label objects, and train AI models.

**Why collecting data slows progress more than computing**

Imagine building a library of every possible driving scene to teach a car how to drive. You can rent super‑fast computers to process millions of videos, but if you only have a handful of recorded drives, the library stays tiny. In robotics, each robot can produce only a few hours of useful data per day, and shipping that video through bandwidth‑limited links is slow. Even with cheap GPUs, you’ll be idle waiting for new footage. Thus, the *rate at which real‑world experiences arrive*—not how fast we crunch numbers—limits how quickly robots learn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
