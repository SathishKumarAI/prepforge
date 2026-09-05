---
qid: ing_09930d531f__star__local
question: 'Explain: 2 System Design - Trade-Offs — System Design: Top 15 Trade-Offs
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 359
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:06-05:00'
sources: []
---

**Situation**  
I was leading the redesign of our real‑time fraud detection pipeline for a fintech client. The old batch model had 15 % false positives and took 8 seconds per transaction—too slow for live approval.

**Task**  
Build an inference service that cuts latency to under 200 ms while keeping cost below $0.02 per prediction, and maintain at least 99.5 % detection accuracy.

**Action**  
I mapped the top trade‑offs from Ashish Singh’s list: *Model size vs. latency*, *Batching vs. streaming*, *Edge vs. cloud inference*. I chose a distilled LightGBM model (≈30 MB) and deployed it in a container on a single‑node GPU cluster. To balance batching, I used micro‑batches of 32 requests with a 10 ms queue window—reducing per‑request overhead without exceeding the latency budget. For cost, I leveraged spot instances and autoscaling based on traffic spikes. I also introduced an A/B scheduler that routed 70 % of traffic to the new model and kept the legacy one as a fallback, monitoring drift with online precision/recall metrics.

**Result**  
Latency dropped from 8 s to 180 ms, cost per inference fell to $0.015, and detection accuracy improved to 99.7 %. The experiment taught me that careful profiling of model size against GPU throughput, coupled with intelligent micro‑batching, can deliver significant performance gains without breaking the budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
