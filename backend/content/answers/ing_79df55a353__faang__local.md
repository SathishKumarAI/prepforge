---
qid: ing_79df55a353__faang__local
question: 'Explain: Capacity Estimation — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 405
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:27:03-05:00'
sources: []
---

**Capacity Estimation – A FAANG‑style answer**

| Step | What to do |
|------|------------|
| **Clarify** | “We need to estimate how many requests per second a new ML inference service can handle before latency exceeds 100 ms.”  Ask: batch size, model size (GB), hardware (GPU/CPU), desired uptime, and SLAs. |
| **Approach** | 1️⃣ Benchmark a single instance on the target HW. 2️⃣ Measure throughput & latency per request. 3️⃣ Extrapolate to multi‑node by dividing total capacity by one‑instance capacity, then apply safety margin (e.g., × 0.8 for contention). |
| **Depth** | *Throughput* = 1 / latency (if single‑threaded) or measured requests/sec.  For GPU inference, use TensorRT or ONNX runtime; record CPU/GPU utilization.  Compute *max nodes* = desired throughput ÷ per‑node throughput.  Complexity: O(1). Trade‑off: more nodes → higher cost but lower latency variance. |
| **Edge Cases** | • Model warm‑up time.  • Variable input size causing jitter.  • Sudden traffic spikes (burst capacity).  • Network bottlenecks between load balancer and workers. Test with synthetic bursts and monitor tail latency. |
| **Optimize & Communicate** | Explain that if latency target is tight, you’d consider model pruning or distillation to reduce per‑request cost.  For higher reliability, add a small buffer of idle nodes (e.g., +20 %) and use autoscaling policies tied to CPU/GPU thresholds.  Summarize: “By measuring one node, scaling linearly, and adding safety buffers, we can confidently meet the SLAs while keeping costs predictable.” |

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
