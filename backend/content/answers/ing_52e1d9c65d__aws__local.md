---
qid: ing_52e1d9c65d__aws__local
question: 'Explain: Related patterns — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 520
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:10-05:00'
sources: []
---

**Scenario (S)**  
A retail company needed to train a recommendation model that used customer click‑stream, purchase history, and inventory data from multiple microservices. The training job had to be reproducible, fault‑tolerant, and compliant with GDPR, yet it ran nightly on a 24‑hour window.

**Task (T)**  
Design a workflow that guarantees all steps of the ML pipeline run in order, can recover from partial failures, and keeps data lineage for audit. The pattern must also minimize cost while ensuring high availability.

**Action (A)**  

1. **Define a Saga‑style orchestration** using AWS Step Functions as the coordinator.  
2. Each saga step is an independent Lambda/Glue job:  
   * *Extract* – pulls data from S3, DynamoDB, and Kinesis into an intermediate bucket.  
   * *Transform* – runs Athena queries and cleans data in EMR.  
   * *Train* – launches a SageMaker training job with Spot Instances (auto‑scale).  
   * *Validate* – uses Lambda to run unit tests on model metrics.  
3. **Compensation**: If any step fails, the state machine triggers a rollback lambda that deletes partial S3 objects and terminates any running SageMaker endpoints.  
4. **Observability**: CloudWatch logs + X-Ray traces per step; DynamoDB stores saga status for audit trails.  
5. **Cost & Availability**: Spot Instances reduce training cost by 70 %; Step Functions’ state machine runs in a VPC with two AZs, giving 99.99 % availability.  

**Result (R)**  
The end‑to‑end pipeline now completes every night within 1 hour, up from 4 hours, and the automated rollback prevents orphaned resources, cutting idle compute by 30 %. Compliance audits show a 100 % audit trail for each training run.

---

### Leadership Principles Highlighted
- **Ownership** – I took responsibility for end‑to‑end reliability.  
- **Dive Deep** – I dissected failure modes and built compensation logic.  

### Bar‑raiser Checklist
- Quantified impact (time, cost, compliance).  
- Depth: detailed step‑level design, trade‑offs between Spot vs On‑Demand, VPC placement.  
- Learned from a prior failure where partial data left stale models; now fully compensated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
