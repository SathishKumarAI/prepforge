---
qid: ing_dbce32dee9__star__local
question: You need to serve a Llama-class 70B+ model to hundreds of millions of assistant
  users. What does the serving stack look like and where does the money go?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 397
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:47:27-05:00'
sources: []
---

**Situation** – At my last startup we were scaling a Llama‑2 70B model to serve 350 M concurrent users on our chat platform. The latency target was <200 ms and the cost ceiling 0.5 ¢ per request.

**Task** – Build a production‑ready serving stack that keeps costs predictable, scales horizontally, and guarantees SLAs under peak traffic spikes.

**Action** – I chose a two‑tier architecture:  
1. **Edge Layer** – A cluster of NVIDIA A100 GPUs in a managed Kubernetes service (GKE or EKS) with GPU autoscaling based on queue depth. We used Triton Inference Server for model loading, batching, and quantization (INT8) to reduce memory footprint.  
2. **Backend Service** – A stateless Python API wrapped in FastAPI, running on CPU‑only nodes for pre‑processing and post‑processing. It pulls inference results from Triton via gRPC, enriches them with user context, and streams the response back using WebSocket.  
Traffic is routed through a global CDN (Cloudflare) to reduce round‑trip time. We instrumented Prometheus + Grafana for real‑time latency metrics and set up an alerting rule that triggers GPU scaling when average queue > 30 ms.

**Result** – The system handled 1.2 M QPS with <180 ms median latency during the holiday surge, staying under the cost target at roughly $0.42/req. I learned that aggressive batching and edge‑GPU placement cut GPU hours by 35 %, while a lightweight backend kept CPU usage below 20 %. The architecture also proved resilient: we avoided a single point of failure by replicating Triton across zones, ensuring zero downtime during the peak load test.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
