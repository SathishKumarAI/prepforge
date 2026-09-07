---
qid: ing_83a8fd9bfd__aws__local
question: Define SLOs for a customer support agent. Every span returns 200 and latency
  is fine. What do you actually alert on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 522
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:45-05:00'
sources: []
---

**Scenario (S):**  
I was tasked to define SLOs for a new AI‑powered chat agent that powers 4 M daily tickets in our e‑commerce support stack.

**Task (T):**  
Create meaningful alerts while ensuring the system remains highly available and cost‑effective. The only “hard” requirement is a 200 OK response; latency must stay acceptable, but we have no explicit threshold.

**Action (A):**  

1. **Dive Deep into metrics:**  
   * `response_time` – median & 95th percentile per region.  
   * `error_rate` – HTTP 5xx + internal failures.  
   * `throughput` – requests/sec per endpoint.  
   * `model_latency` – time spent in the inference container (AWS Lambda / ECS).  

2. **Define SLOs & Alerts** (using AWS CloudWatch & SNS):  
   * **Availability SLO:** 99.95 % uptime over a month → alert if error_rate > 0.05 % for 5 min.  
   * **Latency SLO:** 95th percentile < 400 ms → alert if > 500 ms for 10 min (exponential back‑off).  
   * **Model Health SLO:** inference success rate ≥ 99.9 % → alert on sudden drops (Drift detection via Amazon SageMaker Model Monitor).  

3. **Bias for Action & Ownership:** Set up auto‑scaling for the Lambda pool and a “canary” deployment to catch latency spikes before they hit users.

4. **Cost Trade‑off:** Use Spot Instances for inference containers, backed by on‑demand capacity; alerts trigger scale‑down if cost per request > $0.02.

**Result (R):**  
Implemented the SLOs in 3 days; post‑deployment, we saw a 30 % reduction in support tickets and a 15 % drop in average response time while keeping monthly cloud spend under budget.  

**Bar‑raiser cues:**  
* Ownership – I owned metrics, alerts, and cost controls.  
* Dive Deep – I dissected latency by component.  
* Quantified impact – measurable ticket & cost reductions.  
* Learning from failure – after a spike, we refined the 95th percentile threshold, showing iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
