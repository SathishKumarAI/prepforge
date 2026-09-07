---
qid: ing_ce7b868814__faang__local
question: 'Explain: Scalability and Performance — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 553
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:40:37-05:00'
sources: []
---

**Scalability & Performance – A FAANG‑style system design cheat sheet**

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Clarify** | • Restate the goal: “We want a ML inference service that can serve 10 k requests/sec with <50 ms latency.”<br>• Ask about data size, model size, read/write patterns, SLAs, cost limits. | Removes ambiguity and surfaces constraints early. |
| **Approach** | 1. **Model serving layer** – load‑balanced stateless workers (e.g., TensorFlow Serving).<br>2. **Caching** – LRU or Bloom filter for frequent inputs.<br>3. **Autoscaling** – horizontal pod autoscaler + pre‑warm strategy.<br>4. **Distributed storage** – object store for training data, in‑memory DB for feature lookup.<br>5. **Observability** – latency histograms, error budgets. | Gives interviewers a roadmap; shows you think end‑to‑end. |
| **Depth** | • Use *model sharding* or *quantization* to reduce memory footprint.<br>• Deploy on GPUs/TPUs with batch inference (e.g., batch size 32) to amortize kernel launch overhead.<br>• Apply *async I/O* for feature pulls; keep CPU busy while GPU waits.<br>• Complexity: O(N log N) for cache eviction, O(1) per request after warm‑up. | Demonstrates concrete engineering choices and their trade‑offs. |
| **Edge Cases** | • Sudden traffic spike → trigger cold start? Use *pre‑warm* replicas.<br>• Model drift → A/B testing with canary rollout.<br>• Data skew → shard by key to avoid hotspot. | Shows robustness mindset. |
| **Optimize & Communicate** | • Profile: identify CPU vs GPU bottlenecks, use *tf.profiler*.<br>• Optimize memory: use mixed‑precision; share weights across replicas.<br>• Communicate clearly: “If we double traffic, we’ll need 2× GPUs; cost will rise by ~30%.” | Keeps the interview focused on impact and trade‑offs. |

**TL;DR:** Clarify goals → outline serving + caching + autoscaling → dive into model optimizations (quantization, batching) → anticipate edge cases → quantify trade‑offs. That narrative hits FAANG’s SIGNAL criteria: structured reasoning, depth, and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
