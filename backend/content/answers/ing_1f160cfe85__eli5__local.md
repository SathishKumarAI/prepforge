---
qid: ing_1f160cfe85__eli5__local
question: What does FlashAttention actually optimize? It doesn't reduce FLOPs - so
  why is it faster?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 229
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:25:33-05:00'
sources: []
---

FlashAttention speeds up attention by changing the **way memory is used**, not by doing fewer calculations.  
Think of a chef who has to stir many pots at once. If the chef keeps every pot on a separate counter (the usual way), they keep walking back and forth, wasting time with their feet moving around. FlashAttention gives the chef a long, narrow “stir‑tray” that holds several pots side by side. Now the chef can reach all of them in one sweep, using the same arm movement for many pots at once.  

In technical terms, FlashAttention streams through the query‑key‑value tensors and performs softmax, weighted sums, and output writes **in a single, cache‑friendly pass**. It keeps data in fast registers or shared memory long enough to reuse it, so the CPU/GPU spends less time waiting for slow global memory. That extra efficiency makes the algorithm noticeably faster even though the number of floating‑point operations (FLOPs) stays the same.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
