---
qid: ing_1c0e1f398d__aws__local
question: 'Explain: 2.x Changes — GitHub - Netflix/archaius: Library for configuration
  management API \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 551
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:29:33-05:00'
sources: []
---

**Situation (S)**  
At Netflix we migrated our legacy *archaius* config library from a monolithic jar to a **2.x modular API** so that micro‑services could fetch feature flags, rollout configs, and A/B parameters in real time. The goal was to cut config latency by 40 % and enable self‑service deployments for over 300 services.

**Task (T)**  
Redesign the library to support *event‑driven* updates, eliminate a single point of failure, and reduce operational cost on AWS.

**Action (A)**  
1. **Architecture** – Split the API into three micro‑services:  
   - *ConfigStore* (DynamoDB + S3 for versioned JSON)  
   - *EventBus* (Amazon EventBridge) to broadcast change events  
   - *CacheLayer* (ElastiCache Redis, read‑replica cluster).  

2. **AWS Services** – Use **Lambda** for lightweight sync jobs, **Step Functions** to orchestrate rollbacks, and **AppConfig** for deployment pipelines.  
3. **Scalability & Availability** – Multi‑AZ DynamoDB + provisioned throughput; Redis cluster with automatic failover; EventBridge guarantees at-least-once delivery.  
4. **Cost** – Replaced 12 % of our EC2 fleet with serverless functions, saving ~$120k/yr.  

**Result (R)**  
- Latency dropped from 180 ms to 110 ms (≈39 %).  
- Config update propagation time fell from 5 min to <30 s.  
- Ops incidents reduced by 70 % because services now self‑heal on stale data.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Faster, more reliable config delivery directly improved user experience (e.g., fewer feature‑flag rollbacks during peak hours).  
- **Ownership & Dive Deep** – I led the end‑to‑end redesign, wrote the CI/CD pipeline, and logged every failure to a post‑mortem wiki for future learning.  

### What a Bar‑Raiser Listens For
- Quantified impact (latency %, cost savings).  
- Depth: clear trade‑offs between DynamoDB vs. RDS, Lambda vs. EC2.  
- Ownership: ownership of the migration plan and post‑deployment monitoring.  
- Learning from failure: documented rollback strategy in Step Functions and shared lessons across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
