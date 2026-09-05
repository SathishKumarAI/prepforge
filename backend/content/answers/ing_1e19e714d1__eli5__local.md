---
qid: ing_1e19e714d1__eli5__local
question: 'Explain: After a routine deploy, P99 TTFT went from ~600 ms to ~4 s. Throughput,
  error rate, GPU utilization and the model version are all unchanged. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 304
total_tokens: 491
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:24:16-05:00'
sources: []
---

Imagine your AI system is a well‑trained chef in a busy kitchen. The **P99 Time To First Token (TTFT)**—the time it takes for the first bite of a dish to reach the guest—is like how long it takes the chef’s first plate to leave the prep area. After a routine redeploy, that time jumps from about 0.6 seconds to 4 seconds even though the recipe (model version), oven temperature (GPU utilization), and order volume (throughput) stay the same.

First, check **the kitchen door**: is there a new bottleneck in how the chef receives ingredients? In software terms, look for a freshly added library or middleware that delays token generation before the GPU even starts.  
Next, inspect **the prep station’s layout**: maybe the new deploy changed where buffers are stored, causing extra disk reads. Verify that all paths to the GPU memory remain direct and fast.  
Finally, examine **any logging or tracing layers** introduced during deployment; verbose logs can slow down the first token just like a busy waiter distracting the chef.

By treating each component as a kitchen element—door, prep station, or waiter—you can pinpoint why the first bite now takes longer without touching the core recipe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
