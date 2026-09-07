---
qid: ing_d61c34010b__aws__local
question: 'Explain: Multi-tenant enterprise architecture — Glean Interview Guide (2026):
  Process, Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 537
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:26-05:00'
sources: []
---

**Situation** – At my previous role I led the migration of a legacy recommendation engine into a fully‑managed, multi‑tenant SaaS platform for 120+ enterprise customers. The goal was to increase uptime from **92 % to >99.9 %**, cut operational cost by **35 %**, and enable per‑customer model tuning without cross‑tenant leakage.

**Task** – Design an end‑to‑end ML pipeline that is isolated, auditable, and cost‑effective while delivering real‑time inference at <200 ms latency for each tenant.

**Action** –  
1. **Data ingestion & isolation**: Use **Amazon Kinesis Data Streams** per tenant, backed by **S3 EventBridge** triggers to create a *per‑tenant data lake* in S3 with object tagging (TenantID).  
2. **Feature store**: Deploy **Amazon SageMaker Feature Store** with encryption‑at‑rest and IAM policies scoped to TenantIDs, ensuring no cross‑data access.  
3. **Model training & versioning**: Run **SageMaker Training Jobs** in isolated VPC endpoints; store model artifacts in S3 buckets with tenant prefixes, and register them in the SageMaker Model Registry.  
4. **Inference**: Use **SageMaker Endpoint Configs** with *Multi‑Model Endpoints* (MMD) per tenant, leveraging **AWS Lambda@Edge** for request routing based on a custom header (`X-Tenant-ID`). This keeps inference cost down by sharing GPU resources across tenants while preserving isolation.  
5. **Observability & compliance**: Integrate **Amazon CloudWatch Metrics**, **X-Ray tracing**, and **GuardDuty** with tenant‑scoped dashboards; audit logs are stored in an immutable **S3 Glacier Deep Archive** bucket.

**Result** – After 12 months, uptime rose to **99.95 %**, latency dropped from 350 ms to 180 ms, and operating cost fell by **37 %**. Tenant churn decreased by **22 %** due to faster feature rollouts.  

> **Leadership Principles highlighted:** *Customer Obsession* (tailored per‑tenant performance), *Ownership* (end‑to‑end responsibility for data privacy), *Dive Deep* (granular cost & latency analysis), and *Bias for Action* (rapid deployment of the MMD strategy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
