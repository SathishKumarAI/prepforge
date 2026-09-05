---
qid: ing_7e79e10a50__eli5__local
question: 'Explain: Your LLM endpoint''s p99 latency doubled after a deploy. The model
  weights didn''t change. Walk me through your debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 372
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:57:23-05:00'
sources: []
---

Think of your LLM endpoint as a busy kitchen that turns orders (user prompts) into dishes (answers). The “p99 latency” is the time it takes for the slowest 1 % of orders to finish—if this doubles, some orders are taking twice as long to cook.

**Step 1: Check the oven temperature (CPU/GPU usage)** – After a new deploy, maybe the hardware was set to run hotter or cooler. Measure CPU and GPU load; if it’s higher than before, the “oven” is overheating, slowing down cooking.

**Step 2: Inspect the pantry (model weights & cache)** – The weights didn’t change, so they’re fine. Look at the caching layer that stores frequently used data. A new deploy might have reset or cleared this cache, forcing the kitchen to fetch ingredients from scratch for many orders.

**Step 3: Look at the traffic lights (request routing)** – Verify that incoming requests still hit the same number of worker nodes. If a load balancer was reconfigured and fewer workers are active, each one gets more orders, lengthening wait times.

**Step 4: Examine the recipe book (code changes)** – Even small tweaks—like adding logging or extra safety checks—can add milliseconds per order. Run a comparison test with the old and new code to see where time is spent.

By treating the system like a kitchen, you can trace whether the slowdown comes from hotter hardware, a cleared cache, fewer workers, or slower code, and then fix the specific “ingredient” that’s causing the delay.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
