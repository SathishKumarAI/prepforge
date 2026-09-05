---
qid: ing_94a2cae751__star__local
question: 'Explain: Um and this is actually faster. you — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 318
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:08-05:00'
sources: []
---

**Situation**  
When I joined the Search Ads team at Google, we were deploying a new click‑through rate (CTR) model that had to predict relevance for millions of ad impressions per second. The existing inference pipeline was bottlenecked by CPU‑bound matrix multiplications in Python, causing latency spikes during peak traffic.

**Task**  
I needed to redesign the prediction service so it could handle 5 × the load with sub‑10 ms latency while keeping model accuracy unchanged.

**Action**  
First, I profiled the code and identified that NumPy’s BLAS calls were not utilizing GPU. I rewrote the critical layers in TensorFlow Lite and offloaded inference to a dedicated TPU pod via gRPC. To avoid cold starts, I implemented a pre‑warm cache of serialized tensors and used async batching with a priority queue. I also introduced a lightweight A/B test harness that monitored latency and precision in real time, automatically rolling back if the new pipeline exceeded a 1 % drop in F1 score.

**Result**  
The new system processed 10 M impressions per second with an average latency of 7 ms, reducing server costs by 30 %. Accuracy stayed within 0.3 % of the baseline. I learned that micro‑optimizations in data movement and careful use of hardware accelerators can yield dramatic throughput gains without sacrificing model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
