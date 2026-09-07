---
qid: ing_63889bc205__aws__local
question: 'Explain: Disaster recovery relies on having a solid plan to get critical
  applications and infrastructure up and running after an outage—ideally within minutes.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 481
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:10-05:00'
sources: []
---

**Situation / Task**  
In my previous role at a fintech startup we had a single‑region deployment for our fraud‑detection ML pipeline that processed ~4 M transactions per day. A sudden power outage in the region caused a 15‑minute downtime, costing us $120k in lost revenue and eroding customer trust.

**Action**  
I spearheaded an end‑to‑end disaster‑recovery (DR) strategy focused on *Customer Obsession* and *Ownership*.  
1. **Architectural shift:** Moved the pipeline to a dual‑region, active‑passive architecture using Amazon SageMaker endpoints replicated via *SageMaker Multi‑Model Endpoints* in us-east-1 and eu-west-1.  
2. **Data replication:** Leveraged *Amazon Kinesis Data Streams* with cross‑region replication (Kinesis Replication API) to stream real‑time transaction data to the standby region, ensuring zero data loss.  
3. **Automated failover:** Implemented Route 53 health checks + *AWS Global Accelerator* for low‑latency traffic routing and an automated Lambda orchestrator that flips DNS records within 30 seconds upon detecting endpoint unavailability.  
4. **Testing & monitoring:** Established a quarterly DR drill cadence, using *CloudWatch Alarms* to validate failover latency (<60 s) and *AWS Config* to enforce compliance.

**Result**  
Post‑implementation, we achieved an *SLA of 99.95% uptime* for the fraud model, reducing potential outage cost from $120k/month to <$2k/month. During a live test last quarter, failover completed in **42 seconds**, and no customer complaints were logged.

---

### What a bar‑raiser looks for  
- **Ownership:** Took full responsibility for designing, deploying, and testing the DR plan.  
- **Dive Deep:** Detailed understanding of SageMaker replication limits, Kinesis cross‑region latency, and Route 53 health‑check thresholds.  
- **Quantified Impact:** Demonstrated cost savings and uptime improvement with concrete metrics.  
- **Learning from Failure:** Iteratively refined the architecture after the initial outage, turning a single failure into a robust, automated recovery pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
