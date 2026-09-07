---
qid: ing_2c1dd3051d__faang__local
question: GPU cold starts take minutes. How do you autoscale an inference fleet anyway?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 425
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:25:41-05:00'
sources: []
---

**Clarify**  
We need a strategy for scaling a GPU‑based inference service that suffers from long cold‑start times (several minutes). Assume we have a stateless API endpoint, a fixed cost budget, and SLAs on latency (<200 ms) and 99th‑percentile throughput. We can spin up new GPUs via Kubernetes/Spot instances or managed services like SageMaker.

**Approach**  
1. **Pre‑warm pool** – keep a small number of “ready” GPUs running continuously.  
2. **Predictive scaling** – forecast traffic using a time‑series model (e.g., Prophet) and pre‑spin GPUs before the spike.  
3. **Serverless fallback** – for low‑volume bursts, route to a CPU pool or a lightweight container that can spin up in seconds.  
4. **Graceful de‑commissioning** – idle GPUs stay warm for a timeout (e.g., 10 min) then terminate.

**Depth**  
- Use Kubernetes `ClusterAutoscaler` with custom metrics (`cpu`, `memory`, `latency`).  
- Store the GPU model in a fast cache (S3 + CloudFront or EFS).  
- Each GPU instance runs a lightweight HTTP server that keeps the model loaded; no per‑request loading.  
- Complexity: O(1) for routing, O(n log n) for scaling decisions based on forecast.

**Edge Cases**  
- Sudden flash crowds not predicted → fallback to CPU pool or increase pre‑warm count.  
- GPU failure → health checks trigger immediate replacement.  
- Budget spikes → enforce max‑pool cap and alert.

**Optimize & Communicate**  
Iterate the forecast window (e.g., 5 min vs 15 min) and adjust warm‑up timeout based on observed churn. Explain to interviewers that this balances cost, latency, and reliability while keeping cold starts hidden behind a predictive layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
