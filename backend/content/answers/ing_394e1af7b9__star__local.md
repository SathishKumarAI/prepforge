---
qid: ing_394e1af7b9__star__local
question: 'Explain: How it Works: — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 378
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:29-05:00'
sources: []
---

**Situation:**  
At my previous startup we were deploying a real‑time recommendation model as a microservice on Kubernetes. The request rate spiked to ~15k QPS during launch, and our single pod was saturating CPU at 85 % while latency hit 250 ms.

**Task:**  
I had to design a load‑balancing strategy that kept CPU <70 % per pod and reduced average latency below 120 ms without adding costly infrastructure.

**Action:**  
I implemented a lightweight “least‑connections” balancer in Go, integrated with Envoy’s Lua filter. The code sampled the active request count from each pod’s `/healthz` endpoint and routed new traffic to the pod with the fewest connections:

```go
func selectPod(pods []Pod) Pod {
    min := math.MaxInt32
    var best Pod
    for _, p := range pods {
        if c := p.ActiveConnections(); c < min {
            min, best = c, p
        }
    }
    return best
}
```

I also added a hysteresis window (10 % buffer) to avoid rapid flapping. The balancer ran every 200 ms and updated Envoy’s cluster weights via its control plane API.

**Result:**  
CPU dropped to an average of 55 %, latency fell to 95 ms, and we handled the spike with only two additional pods instead of scaling to eight. I learned that a simple, stateful balancer can outperform generic round‑robin when traffic patterns are bursty, and that exposing pod metrics via lightweight endpoints enables near‑real‑time routing decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
