---
qid: ing_9a876f490a__eli5__local
question: 'Explain: A team wants to self-host a 13B model for ~1M requests/day. Size
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 361
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:42:36-05:00'
sources: []
---

Think of the 13‑billion‑parameter model as a huge recipe book that needs a big kitchen to read it quickly.  
*One “GPU” is like a stove*: it can only cook a certain amount of soup at once, measured in **inference speed** (how many requests it can finish per second). A typical 40‑GB GPU (e.g., an NVIDIA RTX 4090 or A6000) handles about **50–80 requests per second** for a 13B model, depending on batch size and memory tricks.

If the team needs roughly **1 million requests each day**, that’s about  
\(1{,}000{,}000 ÷ 86{,}400 \approx 11.6\) requests per second on average (ignoring peaks).  

But because traffic spikes can be many times higher, we plan for a cushion—say **3× the peak**.  
Let’s target a peak of 35 requests/second. With each GPU doing ~60 req/s, you need:

\(35 ÷ 60 \approx 0.58\) → round up to **1 GPU per “hot” shard**.

The model can be split (sharded) across GPUs, so the whole system might use **4–8 large GPUs** (e.g., RTX 4090s).  
That gives a comfortable margin for load spikes and maintenance downtime while keeping memory usage in check.  

So: about **6–8 high‑end GPUs**, arranged in a small cluster, will comfortably serve ~1 million daily requests with headroom for peaks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
