---
qid: ing_5ee7d21615__star__local
question: 'Explain: Run more checks without slowing agents down'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 316
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:54-05:00'
sources: []
---

**Situation:**  
At my last role I was building a real‑time fraud detection agent that scored every transaction in milliseconds. After a spike in false positives, the compliance team asked us to add more rule checks—geolocation, device fingerprinting, and a secondary neural net model—without hurting latency.

**Task:**  
I had to integrate those additional safety nets while keeping the average inference time under 10 ms per request.

**Action:**  
First, I profiled the pipeline with PyTorch’s autograd profiler and discovered that the extra checks were bottlenecked by CPU‑bound feature extraction. I moved the heavy preprocessing into a separate async worker queue using Ray, so the main agent only received pre‑computed features. Next, I applied model distillation: I trained a lightweight 3‑layer CNN to mimic the larger fraud classifier, reducing FLOPs by 70%. Finally, I leveraged TorchScript to compile the entire inference graph and used batch processing for the secondary net, which allowed vectorized GPU execution.

**Result:**  
Latency dropped from 28 ms to 8.5 ms on average, with a 15% reduction in false positives. The agent now passes compliance audits while still scaling to 10k transactions per second. I learned that profiling early and decoupling compute‑heavy stages are key to balancing accuracy and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
