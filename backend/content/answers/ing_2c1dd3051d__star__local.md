---
qid: ing_2c1dd3051d__star__local
question: GPU cold starts take minutes. How do you autoscale an inference fleet anyway?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 385
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:20-05:00'
sources: []
---

**Situation** – In a production ML service for real‑time recommendation, we had a fleet of NVIDIA A100 GPUs behind Kubernetes. Each GPU took ~3 minutes to warm up due to model deserialization and CUDA context init, so the first request after scaling out hit a 200‑second latency spike, breaking our SLAs.

**Task** – I needed an autoscaling strategy that kept GPU utilization high while eliminating cold‑start delays for users, without overspending on idle hardware.

**Action** – I implemented a two‑tier approach. First, I introduced “warm pools”: small persistent VMs (t4g.medium) running a lightweight inference engine that pre‑loads the TensorRT engine and keeps the CUDA context alive. When the autoscaler saw traffic exceeding 70 % on the warm pool, it spun up an A100 pod and immediately copied the ready model from the warm node via shared EFS, reducing start time to <10 s. Second, I added a “pre‑warm hook” in the HPA that triggers a dummy inference when a new GPU pod is scheduled, ensuring the first real request hits a warmed context. I also used Prometheus metrics (GPU memory usage, queue length) to fine‑tune thresholds.

**Result** – Cold‑start latency dropped from 200 s to <12 s for 95% of requests. GPU utilization rose from 45 % to 75%, and cost per inference fell by 18 %. I learned that combining a warm pool with proactive pre‑warming gives the best trade‑off between speed, resource efficiency, and operational simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
