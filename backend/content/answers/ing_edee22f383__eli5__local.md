---
qid: ing_edee22f383__eli5__local
question: Walk me through continuous batching in an LLM inference server. Why does
  it beat static batching?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 257
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:52:04-05:00'
sources: []
---

Think of a fast‑food drive‑through that serves one order at a time versus a kitchen that keeps a rolling line of orders in the back.

**Static batching** is like the fast‑food counter: you wait until a fixed number of cars (say ten) are lined up, then open the grill and cook all those burgers together. If only three cars arrive, you still wait for seven more before cooking—wasting time.

**Continuous batching** keeps the kitchen *always* ready. As soon as a new order arrives, it joins the existing batch in progress; when the grill finishes one round of burgers, the next round starts immediately with whatever orders are waiting. The line never pauses, so even a single late car doesn’t stall everyone else.

In an LLM inference server, continuous batching does this same thing for text requests: each incoming prompt is added to the current group of tokens being processed. When the model finishes that group, it immediately starts on the next set, always filling the GPU’s capacity. The result? Lower average latency and higher throughput than static batching, which can idle resources while waiting for a full batch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
