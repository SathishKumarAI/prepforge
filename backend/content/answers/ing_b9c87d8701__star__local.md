---
qid: ing_b9c87d8701__star__local
question: 'Explain: Context engineering for long-horizon tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 327
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:49-05:00'
sources: []
---

**Situation** – In mid‑2023 I led the upgrade of our autonomous delivery fleet’s decision‑making system. The existing planner could only handle a few minutes of horizon, so deliveries beyond two hours often got stuck at traffic nodes or low‑battery zones.

**Task** – I needed to extend the planning horizon from 10 minutes to 4 hours while keeping latency under 200 ms per request and preserving safety guarantees for over 5,000 vehicles simultaneously.

**Action** – I introduced a hierarchical context‑engineering pipeline: first, a lightweight “world‑state summarizer” (PyTorch + ONNX) distilled raw sensor streams into a sparse semantic map (traffic density, weather, battery levels). This summary was fed to a transformer‑based long‑horizon planner that operated on 15‑minute roll‑outs. I used beam search with adaptive pruning and integrated an external knowledge graph of traffic rules to keep the model grounded. To maintain real‑time performance, I offloaded the summarizer to edge GPUs and cached common context patterns.

**Result** – The new system increased delivery throughput by 35 % (from 12k to 16k trips/day) and cut average route time by 18 %. Latency stayed below 180 ms on average. I learned that careful abstraction of context into a low‑dimensional, reusable representation is key for scaling AI planners to long horizons without sacrificing speed or safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
