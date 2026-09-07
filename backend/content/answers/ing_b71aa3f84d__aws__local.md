---
qid: ing_b71aa3f84d__aws__local
question: 'Explain: Planning a disaster recovery strategy — What is Disaster Recovery?
  | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 542
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:56-05:00'
sources: []
---

**Disaster Recovery (DR) – a quick‑start playbook**

> **Leadership Principles:** *Customer Obsession* & *Ownership*

**S – Situation**  
I was tasked to build a DR strategy for a new ML inference service that processes 2 M requests/day, delivering predictions in <200 ms. A single outage could cost $3 k/day and erode customer trust.

**T – Task**  
Define what “Disaster Recovery” means for this service, quantify recovery objectives (RPO = 30 s, RTO = 5 min), and map a cost‑effective AWS solution that keeps the model online during any regional failure.

**A – Action**  
1. **Architectural Dive Deep:**  
   * Deploy the inference endpoint in two AZs using **Amazon SageMaker Endpoint (Multi‑Model)** for zero‑downtime failover.  
   * Persist the trained model in **S3 Cross‑Region Replication** to a secondary region.  
   * Use **AWS Lambda + Step Functions** to orchestrate a “fail‑over” workflow: on CloudWatch alarm, copy the latest model from S3, trigger SageMaker’s `CreateEndpoint` in the standby region.  
2. **Scalability & Availability:**  
   * Auto‑scaling via **SageMaker's Endpoint Autoscaling** keeps throughput above 95th percentile under load spikes.  
   * Enable **Multi‑Region Data Sync** to keep model weights fresh (RPO = 30 s).  
3. **Cost & Trade‑offs:**  
   * Running a standby endpoint in another region costs ~15% of primary; acceptable given the $3 k/day loss avoided.  
   * Using Lambda/Step Functions keeps operational overhead low and gives auditability.

**R – Result**  
- Achieved 99.9% uptime during a simulated AZ outage, RTO <4 min, RPO <20 s.  
- Reduced potential revenue loss from $3 k/day to <$200/month in DR testing cost.  
- Learned that keeping the standby endpoint warm (pre‑loaded model) cuts failover time by 30%, so we now keep it always ready.

**Bar‑raiser takeaways:** ownership of end‑to‑end reliability, deep dive into AWS services, quantified impact on customer experience and cost, and iterative learning from DR drills.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
