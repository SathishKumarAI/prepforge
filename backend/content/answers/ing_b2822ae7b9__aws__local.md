---
qid: ing_b2822ae7b9__aws__local
question: 'Explain: Fallback and Reliability — Ai Gateways And Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 438
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:16-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built an AI‑powered recommendation service for a global e‑commerce platform. The business required **99.9 % uptime** while routing traffic to multiple model variants (A/B, drift‑aware, and fallback) without manual intervention.

**Action – Design**  
1. **Model Gateways:** Deployed each model as an AWS Lambda function behind Amazon API Gateway with *Lambda@Edge* for low‑latency edge inference.  
2. **Routing Logic:** Implemented a **traffic‑shifting rule set** in API Gateway that evaluated health checks (CloudWatch metrics) and latency thresholds; if a primary model’s success rate dropped below 95 % or average latency exceeded 200 ms, traffic was automatically redirected to the fallback model.  
3. **Fallback & Reliability:** Configured *AWS Step Functions* to orchestrate a “canary” test before switching. If the fallback also failed, the system fell back to a pre‑trained static model stored in Amazon S3, served via CloudFront for instant response.  
4. **Observability & Scaling:** Leveraged CloudWatch Alarms, X-Ray tracing, and AWS Cost Explorer dashboards to monitor performance and cost per inference (≈$0.00005/req). Auto‑scaling Lambda concurrency was capped at 10 k rps, keeping costs < $200/day.

**Result**  
- Reduced model outage time by **87 %** compared with the legacy monolith.  
- Maintained an average latency of **140 ms** while handling 30 k concurrent users during peak holidays.  
- Cut inference cost by **22 %** through efficient traffic routing and edge caching.

**Reflection (Bar‑raiser focus)**  
I owned end‑to‑end reliability, dove deep into Lambda cold‑start mitigation, quantified impact via SLAs, and learned that automated health checks prevent human error in high‑scale AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
