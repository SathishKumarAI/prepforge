---
qid: ing_347dd9d91d__star__local
question: 'Explain: Um, one thing to note is that — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 329
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:21-05:00'
sources: []
---

**Situation**  
When I joined the recommendation engine team in late 2023, our click‑through rate (CTR) had slipped from 12% to 9% after a recent feature rollout. The new model was trained on a larger dataset but was taking 4× longer to serve predictions, pushing latency beyond the 150 ms SLA.

**Task**  
I needed to redesign the inference pipeline so that it met the latency budget while preserving the 3‑point lift in CTR we had seen during offline validation.

**Action**  
First, I profiled the TensorFlow Serving stack and discovered that the bottleneck was CPU‑bound GPU scheduling. I switched to a hybrid approach: kept the heavy transformer model on GPU for batch inference during off‑peak hours, and built a distilled lightweight version in ONNX to run on CPUs at request time. I introduced an adaptive batching layer that aggregated up to 64 requests before forwarding them to GPU, cutting kernel launch overhead. Finally, I added a cache of the top‑10k most popular items per user segment using Redis, which eliminated 70% of cold‑start lookups.

**Result**  
Latency dropped from 650 ms to 110 ms, meeting our SLA, and the live CTR improved back to 11.8%, exceeding the original target by 0.8%. I learned that balancing model fidelity with system constraints often requires hybrid serving strategies and careful caching; profiling is the first step before any optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
