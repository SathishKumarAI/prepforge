---
qid: ing_fc0226a47b__fp__local
question: 'Explain: Prelaunch — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 557
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:55:32-05:00'
sources: []
---

**Pre‑Launch Scaling on AWS – the “Neo Kim” trick**

The core problem is *cold‑start latency*: when a container or function starts, its image must be pulled from ECR and memory zeroed before it can answer requests. The naïve solution—pulling the image at request time—adds 1–2 s per invocation.

**Derivation**  
Let \(T_{\text{pull}}\) be pull time and \(N\) be the number of concurrent invocations that arrive in a burst. If we spawn a new instance for each request, total latency is
\(L = T_{\text{pull}} + \underbrace{\frac{N}{C}\times T_{\text{comp}}}_{\text{processing}}\),
where \(C\) is the concurrency per container and \(T_{\text{comp}}\) is compute time.

Instead of spawning on demand, we **pre‑launch** a pool of *idle* containers. These containers stay warm, having already pulled their images. When traffic arrives, requests are routed to an idle instance in O(1). The latency reduces to
\(L' = T_{\text{comp}}\),
and the system behaves as if it had infinite concurrency—bounded only by the pre‑launched pool size.

**Why it must work**  
This is a classic *resource provisioning* problem. By moving the expensive pull operation offline, we convert an **I/O‑bound** cost into a **CPU‑bound** one that can be parallelised across many warm instances. The trade‑off is memory usage: each idle container consumes RAM until it’s evicted.

**Deeper principle**  
It’s a concrete instance of *cost amortisation* in distributed systems: expensive, infrequent operations (image pull) are paid once and reused. This echoes the “cache” idea—pulling an image into local storage (RAM/SSD) is like caching a database page; subsequent accesses become cheap.

**Non‑obvious insight**  
Most people tune *concurrency* (C) but forget that pre‑launching can be more efficient than simply raising C. If \(T_{\text{pull}} \gg T_{\text{comp}}\), the marginal benefit of adding one more concurrent slot is negligible; instead, launch an extra warm container and you gain a full second of latency reduction for every burst. This turns the cost model from “pay per request” to “pay once, use many times,” dramatically improving ROI on bursty workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
