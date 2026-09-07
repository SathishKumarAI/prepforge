---
qid: ing_70495ec278__aws__local
question: 'Explain: Step 7: Response Handling — What is an API Gateway? - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 560
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:38:59-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** I was tasked with exposing a real‑time fraud‑detection ML model to the payment gateway at a fintech startup. The model lived in SageMaker and needed a secure, low‑latency endpoint for thousands of transactions per second.  
> **Task:** Build an API that would accept transaction data, forward it to the model, return predictions, and log all traffic for compliance—all while staying under $0.10/transaction.  
> **Action:** I chose **Amazon API Gateway** as the front‑door because:  
> * **Scalability & Availability:** It automatically scales from 1 req/s to >1M req/s behind the scenes and is multi‑AZ by design, ensuring zero single points of failure.  
> * **Security & Governance:** I enabled IAM auth + Lambda authorizer (JWT) for fine‑grained access control, enforced TLS, and set throttling limits (5 k req/s burst, 10 k req/s steady).  
> * **Cost Control:** With a flat $3/month fee plus $0.000025 per request, the cost stayed well below target—$7.50 for 300 M requests in a year.  
> * **Integration:** I wired API Gateway directly to SageMaker’s endpoint via Lambda proxy integration, keeping latency <120 ms (measured with CloudWatch). I also attached a DynamoDB table for audit logs through a secondary Lambda that writes asynchronously, so the user‑facing latency remained low.  
> * **Observability & Resilience:** Enabled X-Ray tracing and CloudWatch metrics; set up alerts on 5xx rates >2% to trigger automatic rollback of the model version.  
> **Result:** The API handled 15 k TPS with <95 ms average latency, achieved 99.999% availability in a year, and cut per‑transaction cost by 30% versus our legacy REST stack. Post‑deployment, we logged over 1 billion transactions without any downtime or SLA breaches.  

**Leadership Principles Highlighted:**  
* **Ownership** – I owned the entire API lifecycle from design to monitoring.  
* **Dive Deep** – I quantified latency, cost per request, and error rates; used X-Ray to drill down into bottlenecks.  

**Bar‑raiser Takeaways:** Look for clear ownership, depth of technical reasoning, measurable impact, and evidence that the candidate learned from any missteps (e.g., initial throttling misconfigurations were corrected after load testing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
