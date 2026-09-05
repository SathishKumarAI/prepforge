---
qid: ing_3d64340e0c__fp__local
question: How do you autoscale a vLLM deployment? Why doesn't standard CPU-based HPA
  work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 449
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:00-05:00'
sources: []
---

**Why the usual Horizontal Pod Autoscaler (HPA) is blind to a vLLM deployment**

A vLLM inference server spends almost all its time in *kernel‑space* GPU memory traffic and kernel launches, not in CPU‑bound arithmetic. The Kubernetes HPA observes metrics such as `cpu_utilization` or `memory_rss`. In a vLLM pod those numbers are usually < 10 % even when the GPU is saturated, because the driver’s DMA engine hides the real load from the OS scheduler. Thus the HPA never reacts to an influx of requests.

**Autoscaling from first principles**

1. **Identify the bottleneck** – for vLLM the limiting resource is *GPU compute* (kernel launch latency) and *memory bandwidth*.  
2. **Define a measurable proxy** – the queue length of pending inference requests (`vllm_queue_length`) or the GPU kernel launch rate (`gpusched`). These metrics correlate linearly with throughput until saturation.  
3. **Map to a control law** – use a PID‑style rule:  
   \[
   \text{desired\_pods} = \left\lceil
   \frac{\lambda_{\text{req}}}{\mu_{\text{pod}}\,(1-\epsilon)}
   \right\rceil,
   \]
   where `λ_req` is the observed request rate, `μ_pod` the measured per‑GPU throughput, and `ε` a safety margin.  
4. **Implement via custom HPA** – expose the proxy metric to Prometheus, write a controller that queries it, and scales replicas accordingly.

**Non‑obvious insight**

The GPU’s *context switch* overhead dominates when request bursts exceed the kernel launch queue size; scaling up pods before the queue length hits a threshold prevents catastrophic latency spikes. Thus, an autoscaler that watches `queue_length` rather than CPU usage can preemptively add pods, keeping inference time predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
