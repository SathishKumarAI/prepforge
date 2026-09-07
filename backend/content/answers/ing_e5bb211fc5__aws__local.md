---
qid: ing_e5bb211fc5__aws__local
question: 'Explain: Example — Pattern: Circuit Breaker'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 473
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:35-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with reducing model‑inference latency spikes that were bringing down our recommendation service’s SLA from **99.5 % to 97 %** during traffic bursts.

**Action**  
I implemented a *circuit breaker* around the inference endpoint, treating each model call as a “request” and the ML container health as the “resource.”  
- **Metrics collected:** 95‑th percentile latency, error rate, CPU utilisation.  
- **Thresholds:** If > 10 % errors or 200 ms latency over 30 s, the breaker trips for 60 s.  
- **Fallback strategy:** Serve a cached “last‑good” recommendation while the model reloads.  
Technically I used **AWS Lambda** with **API Gateway** to wrap the SageMaker endpoint, and stored fallback data in **DynamoDB** (eventual consistency). The breaker logic ran inside Lambda, keeping state in **ElasticCache Redis** for high‑speed read/write.

I also added a **CloudWatch Alarm** that auto‑scales the SageMaker instance count when latency falls below 100 ms, ensuring we only pay for capacity when needed.

**Result**  
Post‑deployment, SLA rose to **99.7 %**, and average inference latency dropped from 350 ms to 120 ms during peak periods—saving roughly **$12k/month** in compute costs.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered a smoother user experience by keeping service reliable.  
- **Ownership & Dive Deep:** Took full responsibility for the end‑to‑end solution, digging into latency traces to set precise thresholds.  
- **Bias for Action:** Rolled out the breaker in 3 days instead of waiting for a scheduled release.

**Bar‑raiser takeaways** – I showed ownership by owning both the technical design and cost optimisation, dove deep with real metrics, quantified impact (SLA & cost), and learned from an earlier failure where a naive retry policy actually worsened latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
