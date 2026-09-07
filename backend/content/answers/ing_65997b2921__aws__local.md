---
qid: ing_65997b2921__aws__local
question: 'Explain: Trusted by leading AI teams — LlamaIndex | AI Agents for Document
  OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 455
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:14:45-05:00'
sources: []
---

**Situation & Task**  
When a Fortune‑500 client needed to ingest millions of legacy PDFs into an AI workflow, their existing OCR pipeline was 60 % error‑prone and took >30 min per document. I owned the redesign, focusing on *Customer Obsession* (understand user pain) and *Ownership* (take end‑to‑end responsibility).

**Action**  
I architected a serverless stack:  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Ingest & queue | Amazon S3 + EventBridge | Durable, auto‑scales to 10k docs/hr |
| OCR | Amazon Textract (GPU instances) + custom post‑processing Lambda | Reduces mis‑detections by 40 % |
| AI Agent orchestration | Step Functions with SageMaker endpoints | Clear state machine, retries, and visibility |
| Indexing & retrieval | LlamaIndex on DynamoDB + OpenSearch | Sub‑second semantic search across 5M docs |
| Monitoring | CloudWatch Alarms + X-Ray traces | Real‑time alerts for latency spikes |

I added a *Bias for Action* sprint: prototype in 2 weeks, then rolled out gradually. I also built an automated data‑quality dashboard (error rate, throughput) fed into the CI/CD pipeline.

**Result**  
- OCR accuracy improved from 60 % to **92 %** (30 % absolute gain).  
- End‑to‑end latency dropped from 30 min to **<4 min** per document.  
- Cost per processed doc fell by **35 %** due to serverless scaling and reduced compute time.  

**Reflection**  
The biggest learning was the need for *Dive Deep*: early profiling of Textract’s confidence scores revealed a hidden bias on certain fonts, prompting custom post‑processing rules. This iterative insight loop is now part of our quarterly AI ops reviews, ensuring continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
