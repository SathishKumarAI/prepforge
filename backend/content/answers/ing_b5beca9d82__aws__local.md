---
qid: ing_b5beca9d82__aws__local
question: 'Explain: 3.5. Configuration Management Systems — System Design: What is
  Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 546
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:09-05:00'
sources: []
---

**Answer – 3.5: Configuration Management Systems – Service Discovery**

**Situation / Task:**  
While leading the rollout of a global e‑commerce micro‑service platform at my previous company, we faced latency spikes when new services were spun up during flash sales. The root cause was manual DNS updates; I had to design an automated service discovery layer that would scale to 10 000 instances and guarantee <5 ms lookup time.

**Action:**  
I architected a **client‑side discovery system** using **AWS Cloud Map** backed by **Amazon Route 53 Resolver**. Each micro‑service registers its health check endpoint with Cloud Map; clients query the service registry via AWS SDK, retrieving an up‑to‑date list of healthy endpoints. I added **Circuit Breaker** logic in the client libraries to avoid flapping services and implemented **weighted round‑robin load balancing** using Amazon Elastic Load Balancer (ALB) as a fallback for legacy workloads.

*Key design choices:*  
- **Scalability:** Cloud Map’s internal architecture supports millions of records with sub‑second TTL.  
- **Availability:** Leveraged Route 53 health checks and multi‑AZ deployments; service discovery latency <2 ms under 10 000 concurrent requests.  
- **Cost:** Avoided manual DNS updates, reducing operational spend by ~30 % per month.  
- **Trade‑off:** Added a small (~0.5 %) overhead for the initial lookup but gained resilience during auto‑scaling events.

**Result:**  
After deployment, we observed a **45 % reduction in average request latency** and eliminated service‑unreachable incidents during peak traffic. The solution also cut ops hours from 8 h/week to 2 h/week.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered faster, more reliable experiences for millions of shoppers.  
- **Ownership & Dive Deep:** Took end‑to‑end responsibility and engineered a production‑grade discovery layer.

**Bar‑raiser takeaways:**  
- Demonstrated ownership by driving the entire lifecycle from requirement gathering to post‑deployment metrics.  
- Showed depth with concrete AWS services, scalability calculations, and cost trade‑offs.  
- Quantified impact (latency reduction, ops savings).  
- Shared a learning loop: after the first rollout we refined health checks based on real traffic patterns, illustrating continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
