---
qid: ing_3d3dbb04ce__eli5__local
question: Why is decode latency dominated by memory bandwidth rather than compute,
  and what does that imply for how you optimise a serving system?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 223
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:12:51-05:00'
sources: []
---

Think of decoding a sentence as a chef preparing a dish. The *compute* is the chopping and stirring—quick steps that the chef can do almost instantly. The *memory bandwidth* is the kitchen’s pantry: how fast ingredients (the model’s weights) can be pulled out and fed to the chef. In most AI models, each compute step needs a huge amount of weight data. If the pantry can only supply a few ingredients per second, the chef sits idle waiting—this bottleneck dominates *decode latency*.  

So when you build a serving system, focus on speeding up that pantry: use faster memory (e.g., high‑bandwidth GPUs or specialized accelerators), keep weights in cache, and stream data efficiently. Optimizing compute alone (faster CPUs) won’t help much unless the memory feed keeps pace. This mindset turns a slow “chef” into a swift, well‑supplied one that delivers answers quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
