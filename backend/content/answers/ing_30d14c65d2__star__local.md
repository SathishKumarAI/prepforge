---
qid: ing_30d14c65d2__star__local
question: 'Explain: Terminologies — Latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 330
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:06:09-05:00'
sources: []
---

**Situation**  
At a fintech startup, we built an anomaly‑detection model that ran on every transaction in real time. The engineering team was pushing the model to production, but our end users were reporting slowness—latency of 250 ms per inference caused delays in the payment flow.

**Task**  
I had to reduce the inference latency below 100 ms while keeping detection accuracy above 95 % and ensuring the solution could scale to millions of transactions per day.

**Action**  
First, I profiled the pipeline with PyTorch’s `torch.profiler` to identify hotspots: a heavy feature‑engineering step and a 3‑layer LSTM that was too deep. I replaced the LSTM with a lightweight GRU and pruned the network using `torch.nn.utils.prune.l1_unstructured`, cutting parameters by 40 %. Then I quantized the model to int8 with ONNX Runtime, which further reduced runtime. Finally, I deployed the inference service behind an edge‑cache layer (Redis) so that repeated transactions hit a local cache instead of hitting the model each time.

**Result**  
Latency dropped from 250 ms to 75 ms on average, meeting our SLA. The accuracy stayed at 96 %, and the system now supports 3× more concurrent users with the same hardware. I learned that profiling, architectural simplification, and quantization are often more effective than brute‑force scaling for latency reduction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
