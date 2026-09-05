---
qid: ing_908bf80abf__star__local
question: 'Explain: Latency — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 369
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:49-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation engine for an e‑commerce platform. The product team demanded that predictions be returned within 150 ms to avoid losing customers at checkout, but our initial prototype hit ~350 ms because the inference service was running on a single GPU VM and the client had to wait for round‑trip latency over the public internet.

**Task:**  
I needed to redesign the architecture so that end‑to‑end latency dropped below 150 ms while keeping cost per request under $0.02 and maintaining accuracy (F1 > 0.82).

**Action:**  
I moved from a monolithic client‑server model to a multi‑tier edge‑caching system. First, I deployed the inference model on an NVIDIA A100 in a private VPC with egress to a Cloud CDN that cached the most common request patterns. Next, I introduced a lightweight “model proxy” written in Go that ran as a sidecar container next to the client service; it used gRPC over HTTP/2 to keep connections persistent and reduced handshake overhead. Finally, I instrumented latency counters with Prometheus and set up an autoscaling policy based on 95th‑percentile response time.

**Result:**  
Latency dropped from 350 ms to 110 ms on average, with the 99th percentile at 170 ms. Cost per inference fell by 25%, and we saw a 12% increase in conversion rate during peak traffic. I learned that edge caching combined with persistent gRPC connections can dramatically reduce client‑server latency without sacrificing model fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
