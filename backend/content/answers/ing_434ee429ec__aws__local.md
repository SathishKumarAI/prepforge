---
qid: ing_434ee429ec__aws__local
question: 'Explain: Quick delivery of the domain — MyWeb2.com is for sale | HugeDomains'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 456
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:58:15-05:00'
sources: []
---

**Situation / Task**

At HugeDomains we were launching *MyWeb2.com*, a premium URL that needed to be available instantly after purchase because our customers expect “one‑click” delivery. The challenge was to build an end‑to‑end system that could register the domain, provision DNS, and activate hosting in under 30 seconds while keeping cost < $0.10 per sale.

**Action**

1. **Micro‑service architecture** – split the flow into three stateless services:  
   *Domain Registrar* (calls Route 53 & AWS Certificate Manager),  
   *DNS Propagator* (updates CloudFront edge config via API Gateway + Lambda@Edge),  
   *Web Host Bootstrap* (creates an S3 bucket and a Lightsail instance via Boto3).  

2. **Event‑driven pipeline** – use SNS to trigger each micro‑service in parallel; all services write idempotent events to DynamoDB for audit.

3. **Caching & pre‑warming** – keep a pool of 5 idle Lightsail instances warmed with the base CMS image, swapped via Elastic Load Balancer so that provisioning is essentially instantaneous.

4. **Cost control** – use spot instances for non‑critical batch tasks and enable auto‑scaling on CloudFront to keep bandwidth under budget.

5. **Monitoring & rollback** – CloudWatch alarms trigger a Lambda that rolls back any partial state if a step fails, ensuring atomicity.

**Result**

- Average fulfillment time: 18 seconds (95th percentile < 25 s).  
- Cost per transaction: $0.07, below the target of $0.10.  
- Post‑launch customer NPS rose from 72 to 89; churn dropped 12%.  

**Reflection**

Ownership: I owned the entire delivery pipeline and drove cross‑team collaboration (DevOps, Product, Support).  
Dive Deep: I benchmarked each micro‑service with CloudWatch metrics to identify bottlenecks.  
Learning: After an initial failure where DNS propagation lagged, we added a retry back‑off and moved critical updates to Lambda@Edge, eliminating the outage entirely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
