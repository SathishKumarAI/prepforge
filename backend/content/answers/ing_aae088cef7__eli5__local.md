---
qid: ing_aae088cef7__eli5__local
question: Why does continuous batching outperform static batching for LLM serving?
  What are the tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 259
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:54-05:00'
sources: []
---

Imagine your computer is a kitchen that prepares orders (text requests).  
With **static batching** you decide ahead of time to make a fixed‑size batch—say 8 sandwiches at once—no matter how many customers arrive. If only 2 people show up, the kitchen still waits for 6 more before cooking, wasting time and memory.  

With **continuous batching** (a “rolling” or “dynamic” batch) the kitchen keeps adding new orders to a queue until it has enough to fill a pot, then cooks immediately. It never sits idle waiting for a pre‑set number, so overall wait times drop.

*Tradeoffs:*  
- **Static batching** is simple and can keep GPU usage very steady, but it hurts latency when traffic is low or bursty.  
- **Continuous batching** gives lower average latency and better resource use across varying loads, but it adds a tiny bit of complexity: you must decide when to trigger the batch (time vs size) and handle slightly larger code paths.

In short, continuous batching behaves like an adaptive kitchen that starts cooking as soon as enough orders arrive, delivering faster responses while still keeping the GPU busy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
