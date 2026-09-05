---
qid: ing_e1a744ba43__eli5__local
question: 'Explain: Object Storage & CDN — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 201
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:33:04-05:00'
sources: []
---

Imagine Instagram as a giant photo‑gallery that anyone can visit from anywhere.  
**Object Storage** is the warehouse where every picture (or “object”) lives. Think of it like a cloud closet: you put an image in, give it a unique name, and the system remembers exactly where to find it later. It’s cheap, scales automatically, and can serve millions of files without needing a specific folder layout.

**CDN (Content Delivery Network)** is the network of friendly post‑man hubs spread across the world. When someone opens Instagram in Tokyo, the CDN pulls the image from the nearest warehouse hub instead of the far‑away main server. This keeps loading fast and reduces traffic back to the original storage.

So, object storage holds all the media; the CDN delivers it quickly to users no matter where they are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
