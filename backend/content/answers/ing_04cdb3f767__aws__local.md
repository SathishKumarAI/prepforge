---
qid: ing_04cdb3f767__aws__local
question: 'Explain: Circuit Breaking — What is an API Gateway? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 575
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:56-05:00'
sources: []
---

**Situation (S)**  
At a fintech startup I was tasked with exposing our fraud‑detection ML model via an HTTP endpoint. Our internal API gateway suffered from latency spikes and occasional timeouts during peak trading hours.

**Task (T)**  
I had to redesign the gateway so it could automatically throttle traffic, provide fallback responses, and keep SLAs below 200 ms while still delivering real‑time predictions.

**Action (A)**  

1. **Define requirements** – 99.9% availability, <150 ms latency for 95th percentile requests, cost ≤$0.05 per inference.  
2. **Design** – Built a circuit‑breaker layer on top of AWS API Gateway + Lambda.  
   * **AWS services used**:  
     * `API Gateway` (REST) for request routing and throttling.  
     * `Lambda@Edge` to inspect response codes and open/close circuits per micro‑service health.  
     * `DynamoDB` for circuit state persistence (open, half‑open, closed).  
     * `CloudWatch Alarms` to trigger state changes based on error rates (>5 % failures → open).  
3. **Scalability & Availability** – API Gateway is fully managed and scales automatically; Lambda@Edge runs in edge locations reducing latency by ~30 %.  
4. **Cost** – 10k requests/day × $0.20 per 1M requests + negligible DynamoDB cost ≈ $0.002/day.  
5. **Testing & Roll‑out** – A/B split for 24 hrs, monitoring latency and error budgets; rollback logic embedded.

**Result (R)**  
Post‑deployment:  
* Latency dropped from 320 ms to 110 ms (68% reduction).  
* Error rate fell from 12% to <0.5%.  
* SLA compliance rose from 88% to 99.9%, enabling a new product tier that increased ARR by **$1.2M** annually.

---

### Leadership Principles Anchored
- **Customer Obsession** – Ensured low‑latency, high‑availability predictions for end users.  
- **Ownership** – Took full responsibility from design through monitoring and cost control.  

### What a Bar‑Raiser Listens For
1. **Depth (Dive Deep)** – Clear mapping of failure modes to circuit states; use of CloudWatch metrics.  
2. **Quantified Impact** – Concrete latency, error, and revenue figures.  
3. **Learning from Failure** – Documented fallback path when the model was unreachable, preventing cascading failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
