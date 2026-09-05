---
qid: ing_73e78a9496__eli5__local
question: 'Explain: Introducing EMMA — Introducing Waymo''s Research on an End-to-End
  Multimodal Model for Autonomous Driving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 253
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:40:26-05:00'
sources: []
---

Imagine a chef who can taste, smell, see, and feel the food while cooking. Each sense gives clues—flavor notes, aromas, colors, textures—that together decide if a dish is ready. EMMA (End‑to‑End Multimodal Model for Autonomous Driving) works like that chef, but for cars.

**Multimodal** means it listens to many “senses” at once: cameras (vision), LiDAR (distance sensing), radar (speed of objects), and even maps or traffic data.  
**End‑to‑end** means all these inputs go straight into one giant neural network that learns to output driving actions—steer, accelerate, brake—without hand‑crafted rules.

Waymo trained EMMA on millions of hours of real‑world drives so the model learns to combine visual clues (like a pedestrian’s gait), distance readings (how far a bike is) and map information (a construction zone ahead). The result? A single system that can “understand” the road scene as richly as a human driver, making split‑second decisions in complex traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
