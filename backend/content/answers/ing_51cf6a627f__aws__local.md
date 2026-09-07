---
qid: ing_51cf6a627f__aws__local
question: 'Explain: Step 4: Rate Limiting — What is an API Gateway? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 668
total_tokens: 911
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:59-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a cross‑functional team that built an e‑commerce recommendation engine, we discovered that the downstream microservice “UserProfile” was being hammered by a burst of traffic during flash sales. The service crashed, and customers saw 500 errors—directly hurting revenue.

**Action (A)**  
I took full ownership:  

1. **Identify the root cause** – I dug into CloudWatch logs, discovered that the API Gateway fronting UserProfile had no throttling rules, so the backend was overwhelmed.  
2. **Design a solution** – I introduced **Amazon API Gateway** as an entry point with *global and per‑method* rate limits (e.g., 200 requests/second). I also enabled *usage plans* tied to API keys for key customers, ensuring fair usage.  
3. **Implement & test** – Deployed the new gateway in a blue/green fashion, ran load tests with Artillery, and observed that latency dropped from 1.2 s to <200 ms while error rates fell below 0.01%.  
4. **Operationalize** – Added CloudWatch alarms on throttled requests, automated rollback via CodePipeline, and documented the process in our engineering handbook.

**Result (R)**  
Within two weeks post‑deployment:  

- **Throughput** increased by 350 % without new infrastructure.  
- **Error rate** fell from 4.5 % to <0.01%.  
- **Revenue impact**: estimated $120k in avoided lost sales during the next flash sale.

---

### AWS Services & Trade‑offs

| Service | Purpose | Scalability | Availability | Cost |
|---------|---------|-------------|--------------|------|
| **Amazon API Gateway** | Edge caching, throttling, auth | Auto‑scales to millions of calls/sec | 99.95% SLA | Pay per request + data transfer |
| **AWS WAF** | Additional bot protection | Scales with Gateway | 99.9% SLA | $0.60/1M requests + rule set |
| **CloudWatch Alarms** | Monitoring throttles | N/A | N/A | Minimal |

*Trade‑offs:*  
- Using API Gateway adds a small latency (~50 ms) but provides built‑in resilience and easy scaling vs. running our own Nginx reverse proxy.  
- Throttling may reject legitimate traffic; we mitigated by fine‑tuning per‑customer usage plans.

---

### Leadership Principles Reflected

- **Ownership** – I owned the incident, drove the end‑to‑end fix, and updated runbooks for future resilience.  
- **Dive Deep** – Detailed log analysis revealed the missing throttling rule; metrics guided our design choices.  
- **Bias for Action** – Implemented a blue/green rollout in under 3 days instead of waiting for a full code freeze.  

This experience reinforced that *rate limiting is not just a safety net—it’s a revenue‑protecting, scalable service layer.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
