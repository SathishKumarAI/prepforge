---
qid: ing_3d64340e0c__faang__local
question: How do you autoscale a vLLM deployment? Why doesn't standard CPU-based HPA
  work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 539
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:06:34-05:00'
sources: []
---

**Clarify**  
You want to scale an inference service built on *vLLM* (the NVIDIA/Meta GPU‑accelerated LLM runtime). The goal is to keep latency low while handling bursts of requests, and you wonder why the usual CPU‑based Horizontal Pod Autoscaler (HPA) won’t suffice.

Assumptions:  
- vLLM runs inside a Kubernetes pod on GPUs.  
- Requests are short, high‑throughput token streams.  
- GPU memory is the main resource bottleneck; compute can be shared across requests via batching.

**Approach**  
1. **GPU‑aware HPA** – use *KubeVirt* or *Cluster Autoscaler* with a custom metric (e.g., `vllm_gpu_utilization`).  
2. **Batching & Queueing** – expose a request queue; scale up when queue length exceeds threshold.  
3. **Pod template with GPU limits** – set `resources.limits.nvidia.com/gpu: 1` and CPU/Memory requests accordingly.

**Depth**  
- **Metric collection:** instrument vLLM to publish `gpu_mem_used`, `batch_size_avg`.  
- **Autoscaler logic:**  
  ```yaml
  apiVersion: autoscaling/v2beta2
  kind: HorizontalPodAutoscaler
  spec:
    scaleTargetRef: {kind: Deployment, name: vllm}
    minReplicas: 1
    maxReplicas: 8
    metrics:
      - type: External
        external:
          metric:
            name: gpu_mem_utilization
          target:
            type: Utilization
            averageUtilization: 80
  ```
- **Complexity:** O(1) per pod for GPU metric; scaling decisions are O(n) over replicas.

**Edge Cases**  
- Sudden spike → queue backlog before HPA reacts. Test with bursty traffic patterns.  
- GPU oversubscription if pods share a GPU; enforce `exclusive` mode.  
- Cold‑start latency when new pods spin up – pre‑warm kernels or keep idle replicas.

**Optimize & Communicate**  
Explain that CPU‑based HPA relies on CPU/memory metrics which are irrelevant for GPU‑bound workloads; the bottleneck is memory fragmentation and queue latency, not CPU cycles. By tying scaling to GPU utilization and request queue length, we achieve tighter control over latency while minimizing idle GPU time. This trade‑off balances cost (fewer pods) with SLA compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
