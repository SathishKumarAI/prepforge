---
qid: ing_085c7d422c__star__local
question: 'Explain: How It Works : — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 398
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:46-05:00'
sources: []
---

**Situation** – While leading the migration of our AI inference service from a single GPU node to a Kubernetes‑managed cluster, we noticed that request latency spiked during peak traffic, even though we had added more replicas. The SLA required 99% of predictions under 200 ms.

**Task** – I needed to implement an intelligent load‑balancing layer that could route inference requests to the least‑busy GPU pod while respecting per‑model weight constraints and minimizing cold starts.

**Action** – I built a lightweight sidecar in Go that exposed a `/predict` endpoint. Inside, it maintained a rolling average of each pod’s CPU/GPU utilisation (pulled from Prometheus) and used a weighted round‑robin algorithm:

```go
type Pod struct{ addr string; weight int; load float64 }
func selectPod(pods []Pod) string {
    var total float64
    for _, p := range pods { total += p.weight / (1 + p.load) }
    r := rand.Float64() * total
    acc := 0.0
    for _, p := range pods {
        acc += p.weight / (1 + p.load)
        if r <= acc { return p.addr }
    }
}
```

The sidecar also cached the model locally to avoid repeated downloads, and used a semaphore to limit concurrent in‑flight requests per pod.

**Result** – After deployment, average latency dropped from 350 ms to 120 ms under load, and 99.5% of requests stayed below 200 ms. The system automatically rebalanced when a GPU overheated, preventing service degradation. I learned that combining telemetry‑driven metrics with a simple weighted algorithm can deliver robust scaling without complex orchestrator hooks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
