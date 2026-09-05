---
qid: ing_3d64340e0c__think__local
question: How do you autoscale a vLLM deployment? Why doesn't standard CPU-based HPA
  work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 530
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:49:50-05:00'
sources: []
---

**1. Clarify the question & state assumptions**

- *What is “autoscaling” here?*  We need to scale the number of worker instances (or containers) that run a vLLM model serving endpoint.
- *Which environment?* Assume Kubernetes‑based deployment, but the logic applies to any orchestrator.
- *Why ask about CPU‑HPA?* The user wonders why a standard Horizontal Pod Autoscaler based on CPU usage fails for vLLM workloads.

**2. Mental model / framework**

- **vLLM characteristics**: Heavy GPU/CPU memory usage per request, bursty inference patterns, low latency goals.
- **Autoscaling drivers**: Request rate (QPS), queue length, latency SLA, resource utilization.
- **Kubernetes HPA limitations**: CPU and memory metrics only; no insight into inference queue or GPU load.

**3. Step‑by‑step reasoning**

1. Identify the *scaling metric* that reflects model load—e.g., request queue depth, average latency, or GPU/CPU time per batch.
2. Expose this metric from vLLM (via Prometheus endpoint) or compute it in a sidecar.
3. Configure a **Custom Metrics Autoscaler** (VPA+HPA combo or KEDA) that watches the chosen metric.
4. Set scaling thresholds to trigger when queue length exceeds a target or latency goes above SLA.
5. Deploy replicas behind a load balancer/Ingress; ensure session affinity if needed.
6. Test with bursty traffic to validate that pods scale up/down smoothly.

**4. Common traps to avoid**

- Relying solely on CPU %: vLLM often sits idle on CPU while waiting for GPU or network, so CPU stays low even under heavy load.
- Scaling too aggressively: Adding pods without enough GPU resources can lead to oversubscription and degraded performance.
- Ignoring queue latency: Autoscaling based only on throughput may miss spikes that cause latency violations.

**5. Sanity‑check & verbalize**

- Verify metrics: `kubectl get --raw /metrics | grep vllm` → see queue length or inference time.
- Simulate traffic, watch HPA events (`kubectl describe hpa`) to confirm scaling triggers on the chosen metric.
- Communicate that CPU‑based HPA fails because it doesn’t capture the *queue* or *GPU* load unique to inference workloads. Use a custom autoscaler tied to queue depth/latency instead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
