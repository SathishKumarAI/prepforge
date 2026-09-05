---
qid: ing_f47c9c1dad__star__local
question: 'Explain: When to Use : — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 329
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:37:21-05:00'
sources: []
---

**Situation** – In my last role as a machine‑learning engineer, our recommendation engine served millions of users daily. The inference cluster was hitting a 95th‑percentile latency of 300 ms during peak traffic, while the SLA demanded <150 ms.  

**Task** – I had to redistribute requests across GPU nodes so that latency stayed under SLA without over‑provisioning resources or incurring high costs.  

**Action** – I evaluated round‑robin, least‑conn, and weighted‑response‑time algorithms using `nginx` as a front‑end load balancer. I instrumented each node with Prometheus metrics (`latency_seconds`, `cpu_utilization`) and wrote a Python script to adjust weights in real time:  

```python
def update_weights():
    for host in hosts:
        latency = query_prom(host, 'latency_seconds')
        weight = max(1, 5 - latency)   # lower latency → higher weight
        nginx_api.set_weight(host, weight)
```

The script ran every minute, and I visualized the changes with Grafana dashboards.  

**Result** – After deploying weighted‑response‑time balancing, peak‑latency dropped to 110 ms (a 63 % improvement) and GPU utilization balanced at ~70 %. I learned that dynamic weighting based on real metrics outperforms static schemes, especially when workloads are bursty and latency-sensitive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
