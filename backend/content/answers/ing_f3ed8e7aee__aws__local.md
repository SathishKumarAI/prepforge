---
qid: ing_f3ed8e7aee__aws__local
question: 'Explain: Business impact analysis (BIA) — What is Disaster Recovery? |
  Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 468
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:27:39-05:00'
sources: []
---

**Answer – Amazon Way**

*Leadership Principles:* **Customer Obsession & Ownership**  
I always start by asking: *How will the customer’s business survive a disruption?* That drives my BIA and Disaster Recovery (DR) design.

---

### Situation
While launching a new ML‑powered recommendation engine for an e‑commerce client, I led a **Business Impact Analysis (BIA)** to quantify downtime costs. We mapped each service (model training, inference API, data pipeline) to revenue loss per hour: *Inference API – $12k/hr, Training – $4k/hr.*

### Task
The goal was to design a DR strategy that kept the inference API up **<30 s** after a regional outage and minimized total cost.

### Action
1. **Identify critical workloads:** I marked the inference API as “Mission‑Critical.”  
2. **Select AWS services:**  
   * **Amazon SageMaker Endpoint (multi‑AZ) + Elastic Load Balancer** for high availability.  
   * **AWS Global Accelerator** to route traffic to a standby region.  
   * **Amazon RDS Aurora Serverless v2** in the DR region with cross‑region read replicas, so model metadata is instantly available.  
3. **Failover automation:** A CloudWatch alarm triggers an EventBridge rule that updates Route 53 health checks and spins up the standby endpoint on the first minute of outage (90 % reduction in recovery time).  
4. **Cost trade‑off:** Running a standby region costs ~30 % more, but reduces downtime from 8 h to <0.5 h, saving ~$96k per incident versus $960k potential loss.

### Result
After implementation, the client’s mean time to recover dropped from **8 hrs** to **<1 min**, and annual DR cost stayed below **$180k**—a 60 % reduction in risk exposure.  

*What a bar‑raiser looks for:* clear ownership of the BIA, deep dive into service trade‑offs, quantified ROI, and a learning loop (post‑mortem analysis to refine thresholds).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
