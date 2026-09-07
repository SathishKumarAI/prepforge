---
qid: ing_c2c67a11d4__faang__local
question: 'Explain: Worker utilization load shedder — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 480
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:13:52-05:00'
sources: []
---

**Clarify**  
We’re asked how to keep an ML‑powered API healthy under heavy traffic: *worker utilization* (CPU/GPU load), *load shedding*, and *rate limiting*.  
Assumptions:  
1) Back‑end workers are stateless or sharded.  
2) Clients expect a 429/503 when overloaded, not silent failures.  
3) Latency targets are strict (e.g., <200 ms).  

**Approach**  
1. **Observability** – instrument per‑worker CPU, GPU, queue depth, request latency.  
2. **Dynamic throttling** – expose a token bucket per worker; refill rate tied to real‑time utilization.  
3. **Load shedding** – when queue depth > threshold or CPU > 85 %, reject new requests (429) before workers saturate.  
4. **Auto‑scaling** – spin up/down worker pods based on average utilization and queue length.  

**Depth**  
- *Rate limiter*: token bucket with burst capacity = max concurrent inferences; refill rate = `max_qps * utilization_factor`.  
- *Load shedder*: threshold logic:  
  ```python
  if queue_depth > MAX_DEPTH or cpu_util > CPU_LIMIT:
      return HTTP_429
  ```
- Complexity: O(1) per request for limiter checks. Auto‑scaling cost is amortized across bursts.  

**Edge Cases**  
- Sudden flash crowds → queue depth spikes before scaling; mitigate with a short‑term “warm‑up” pool.  
- Mis‑estimated utilization thresholds → oscillation; add hysteresis.  
- Clients retrying aggressively → implement exponential backoff policy on 429.  

**Optimize & Communicate**  
- Tune `CPU_LIMIT` and `MAX_DEPTH` via A/B tests, measuring SLA hit rate vs cost.  
- Use a feedback loop: if average latency > target for > N seconds, auto‑scale up earlier.  
- Document the algorithm in README and expose metrics (`worker_cpu`, `queue_depth`) to ops dashboards.  

This strategy balances throughput, latency, and cost while giving clear signals (429/503) when the system is overloaded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
