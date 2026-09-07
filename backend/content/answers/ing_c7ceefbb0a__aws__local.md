---
qid: ing_c7ceefbb0a__aws__local
question: 'Explain: Parallel Extractors vs Single-Pass — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 564
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:03-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that needed to process 1 M invoices per day for an e‑commerce partner. The goal was to reduce the time from ingestion to actionable data by 70 % while keeping error rates below 0.5 %.  

**Action (Design)**  
I evaluated two pipelines:  

| Approach | Key AWS services | Scalability | Cost | Trade‑offs |
|----------|------------------|-------------|------|------------|
| **Parallel Extractors** | S3 → Lambda (parallel), Textract, Step Functions, DynamoDB, Athena | Auto‑scales with SQS; handles burst traffic | Higher Lambda invocations & data transfer but cheaper per record when throughput > 50k/hr | Requires idempotency logic and higher operational overhead |
| **Single‑Pass** | S3 → Glue ETL job (single Spark cluster), Textract, Redshift | One cluster limits concurrency; need to resize for peaks | Lower compute cost at moderate volumes; higher per‑record cost when scaling | Latency increases as queue grows; harder to recover partial failures |

I chose **Parallel Extractors** because the volume demanded near‑real‑time results. I built a Step Functions state machine that invoked a Lambda in parallel per S3 event, routed Textract responses to DynamoDB for idempotent deduplication, and used Athena for ad‑hoc analytics.  

**Result**  
Processing time dropped from 12 min to **2 min** (84 % reduction). Throughput increased from 50k/hr to 300k/hr without additional cost—our per‑invoice cost fell by **$0.02**. Error rate stayed at 0.3 %.  

**Learning & Ownership**  
I documented failure modes, added CloudWatch alerts for idempotency gaps, and created a run‑book that reduced recovery time from 15 min to < 2 min. This experience reinforced *Ownership* (owning the entire data pipeline) and *Dive Deep* (profiling Lambda invocations to optimize cost).  

**Bar‑raiser cues**  
- Quantified impact: 84 % speedup, $0.02 saved per invoice.  
- Depth: Detailed trade‑off table, Step Functions design.  
- Learning: Post‑mortem on idempotency failures and run‑book creation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
