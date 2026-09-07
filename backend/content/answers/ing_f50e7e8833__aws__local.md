---
qid: ing_f50e7e8833__aws__local
question: 'Explain: but it writes them into different availability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 589
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:30:56-05:00'
sources: []
---

**Scenario (S):**  
Our recommendation engine served millions of users daily. The model was trained in **Amazon SageMaker**, but the inference endpoint was initially launched in a single Availability Zone (AZ). During a peak traffic spike, the AZ experienced intermittent latency spikes and the endpoint hit its concurrency limit, causing 2 % of user requests to time‑out.

**Task (T):**  
I needed to redesign the deployment so that the model could be served with *high availability* while keeping cost in check, and I had to do it within a week before the next marketing campaign.

**Action (A):**  

| Step | Decision | AWS Service(s) | Rationale |
|------|----------|-----------------|-----------|
| 1 | **Enable Multi‑AZ endpoints** | SageMaker Endpoints with `MultiAvailabilityZoneConfig` | Guarantees that each AZ gets a copy of the model; traffic is automatically load‑balanced. |
| 2 | **Use Elastic Load Balancer (ELB) in front** | Application Load Balancer | Allows fine‑grained routing, health checks, and graceful draining during AZ failures. |
| 3 | **Persist model artifacts in S3 cross‑region buckets** | Amazon S3 + S3 Transfer Acceleration | Fast, durable storage that can be replicated to the secondary region for disaster recovery. |
| 4 | **Implement auto‑scaling based on CloudWatch metrics (latency, error rate)** | SageMaker Auto Scaling, CloudWatch Alarms | Dynamically adds/removes inference containers per AZ to match demand. |
| 5 | **Cost control via Spot Instances + Savings Plans** | SageMaker Managed Spot Training & Inference | Cuts compute cost by ~30 % while still providing the same performance. |

**Result (R):**  
- *Availability*: 99.97 % SLA achieved; zero time‑outs during the subsequent campaign.  
- *Latency*: Mean inference latency dropped from 350 ms to 210 ms (40 % improvement).  
- *Cost*: Monthly inference cost reduced by $12,500 (≈30 %) thanks to Spot + Savings Plans.  

**Learning:**  
I realized that deploying ML models without Multi‑AZ is a hidden risk. Future projects will start with a multi‑region strategy and incorporate health checks early. This experience reinforced the **Ownership** principle—taking end‑to‑end responsibility for reliability—and **Dive Deep**, as I dissected CloudWatch metrics to identify bottlenecks.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
