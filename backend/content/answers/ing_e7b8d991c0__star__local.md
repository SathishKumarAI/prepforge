---
qid: ing_e7b8d991c0__star__local
question: 'Explain: Top 6 Load Balancing Algorithms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 383
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:00-05:00'
sources: []
---

**Situation**  
At my last role I was leading a team that deployed a recommendation engine across a Kubernetes cluster. Our traffic spiked during holiday sales and the inference latency started creeping above 150 ms on half the nodes, hurting revenue.

**Task**  
I had to re‑engineer the request routing so every GPU pod received an even share of requests without adding extra infra cost.

**Action**  
First I mapped out the six most effective load‑balancing patterns for ML workloads: (1) Round Robin – simple round‑robin scheduling in Envoy; (2) Least Connections – dynamic connection count tracking via Prometheus metrics; (3) IP Hash – deterministic user mapping to keep session affinity; (4) Weighted Round Robin – using pod resource requests as weights; (5) Randomized – injecting jitter to avoid hotspots; and (6) Consistent Hashing – implemented with a Rendezvous hash in Go for minimal re‑routing on scale‑up. I built an A/B test harness that swapped between algorithms every 15 min, collected latency, CPU, GPU utilization, and error rates.

**Result**  
Weighted Round Robin reduced average inference latency from 150 ms to 85 ms (a 43% improvement) while keeping GPU usage within 70–80% across all pods. The test also revealed that IP Hash helped keep user session consistency, cutting cache misses by 12%. I documented the trade‑offs and created a decision matrix so future teams could pick the right algorithm for their traffic pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
