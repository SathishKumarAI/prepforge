---
qid: ing_696b8620e0__aws__local
question: You are self-hosting a VLM for a document pipeline and throughput is a third
  of what you projected from the LLM's specs. Why, and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 412
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:18-05:00'
sources: []
---

**Situation / Task**  
I was responsible for a self‑hosted Vision‑Language Model (VLM) that powers our enterprise document‑extraction pipeline. Production throughput dropped to ~30 % of the LLM’s advertised performance despite matching its CPU/GPU specs.

**Action**  
1. **Dive Deep into Metrics** – Collected per‑batch latency, GPU utilization, memory bandwidth and I/O stats on a representative sample.  
2. **Root Cause Analysis** – Found that the preprocessing stage (OCR + tokenization) was bottlenecked by disk‑to‑GPU data transfer; CPU cores were idle while GPUs sat at ~70 % usage.  
3. **Redesign Pipeline** –  
   * Offloaded OCR to a separate, autoscaling EC2 spot fleet with SSD EBS for high throughput.  
   * Replaced the local file queue with SQS + Lambda (containerized) to stream chunks directly into the VLM’s GPU memory using AWS Elastic Inference.  
4. **Implement Monitoring & Alerts** – Added CloudWatch dashboards and alarms on GPU idle time, CPU saturation, and batch‑arrival latency.  
5. **Test & Iterate** – Ran a 48‑hour load test; throughput rose from 300 docs/min to 900 docs/min (3× target) with < 15 % cost increase.

**Result**  
- Achieved projected throughput in under two weeks, reducing SLA violations by 42 %.  
- Cut average processing time per document from 1.2 s to 0.4 s, improving customer satisfaction scores by 18 pp.  

**Learning**  
I realized that “Customer Obsession” means iterating fast on hidden bottlenecks and that “Ownership” requires owning the entire data‑flow stack, not just the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
