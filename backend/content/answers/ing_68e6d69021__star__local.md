---
qid: ing_68e6d69021__star__local
question: 'Explain: Autoscaling on queue depth — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 361
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:03-05:00'
sources: []
---

**Situation:**  
In my last role I was responsible for the production deployment of an internal LLM gateway that routed user requests to a fleet of inference servers. The service hit traffic spikes during product launches, causing the request queue behind each server to swell past 200 items and latency to jump from 120 ms to over 1 s.

**Task:**  
I had to design an autoscaling strategy that kept latency under 200 ms while minimizing idle compute resources and keeping cost in line with our $15k/month budget.

**Action:**  
I implemented a queue‑depth‑based scaler using Prometheus metrics. The exporter collected the number of pending requests per server pod every second. A custom controller in Go evaluated the average queue depth across the pool; if it exceeded 150 items, it triggered a Horizontal Pod Autoscaler (HPA) to add two replicas, and if it fell below 30 for five minutes, it scaled down by one replica. I also added an early‑warning webhook that paused scaling when CPU usage hit 90 % to avoid thrashing. The controller used the Kubernetes API directly, so no external scheduler was needed.

**Result:**  
After deployment, average latency dropped from 1 s to 140 ms during peak periods and we maintained a 95th‑percentile latency below 250 ms. The dynamic scaling reduced idle GPU hours by ~35%, saving roughly $3k per month. I learned that coupling queue depth with CPU thresholds gives a robust, cost‑effective autoscaling loop for LLM serving workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
