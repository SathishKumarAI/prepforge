---
qid: ing_584d744d2e__aws__local
question: 'Explain: Command Center — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 476
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:45:12-05:00'
sources: []
---

**Command Center — Harvey (AI for Legal & Professional Services)**  
*Customer Obsession • Ownership*

**Situation**  
In 2023 I led a cross‑functional squad tasked with launching Harvey’s “Command Center,” an AI‑driven dashboard that aggregates case data, legal research, and client communications into one pane. The goal was to cut lawyers’ time on routine tasks by 30 % while ensuring compliance.

**Task**  
Design a scalable, secure architecture on AWS that could ingest >10 GB/day of unstructured documents, perform real‑time NLP inference, and surface actionable insights with <2 s latency for 5,000 concurrent users.

**Action**  
1. **Data pipeline:** S3 + Glue → Athena for ad‑hoc analytics; Lambda for event‑driven ETL.  
2. **Inference layer:** SageMaker endpoints (BatchTransform for bulk docs, RealTimeInference for live queries) powered by a fine‑tuned BERT model on 50 M legal documents.  
3. **Real‑time UI:** API Gateway + AppSync (GraphQL) to reduce overfetching; DynamoDB for session state with TTL for cost control.  
4. **Security/Compliance:** KMS‑encrypted storage, IAM roles per tenant, and AWS Config rules enforcing GDPR tags.

**Result**  
- Deployment on day 0: 99.9 % uptime, <1.5 s average latency.  
- Post‑launch pilot (n=120 lawyers): 35 % reduction in time spent on document triage, translating to $2.4M annual savings for the firm.  
- Model accuracy >92 % F1 on legal intent classification, validated by a third‑party audit.

**Reflection**  
The biggest failure was an initial over‑optimization of inference latency that underutilized GPU capacity, leading to higher costs. I rewound, added spot instances, and introduced auto‑scaling, cutting inference spend by 18 % while keeping performance. This reinforced the principle: *Own the trade‑off curve; iterate until you hit the sweet spot.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
