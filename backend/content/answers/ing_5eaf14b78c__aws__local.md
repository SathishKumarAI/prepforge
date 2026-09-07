---
qid: ing_5eaf14b78c__aws__local
question: 'Explain: TL;DR — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 653
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:48-05:00'
sources: []
---

**TL;DR – Glean**  
Glean is a **full‑stack, query‑as‑you‑type search engine** that indexes *all* enterprise data (documents, code, chat, cloud objects) and surfaces it with natural language understanding and relevance scoring. It treats every data source as a searchable index, automatically ingesting changes via event streams, then ranks results using machine learning models trained on user click‑throughs.

---

### Behavioral (STAR)

**Situation:**  Our client’s knowledge base was siloed across SharePoint, Confluence, and an internal Git repo, causing 35 % of support tickets to be duplicated.  
**Task:**  Build a unified search layer that lowered duplicate tickets by 20 %.  
**Action:**  Designed an event‑driven ingestion pipeline (Kinesis → Lambda → OpenSearch) that indexed every document in real time; implemented relevance ranking with SageMaker and added auto‑completion via Amazon Lex.  
**Result:**  Within three months, duplicate tickets fell to 14 % (a 20 % reduction), user satisfaction scores rose from 4.1/5 to 4.6/5, and engineering effort on support queries dropped by 12 k hours annually.

---

### Technical / System Design

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Ingestion | Kinesis Data Streams + Lambda | Low‑latency event capture; serverless scaling |
| Storage & Search | Amazon OpenSearch Service (managed) | Near‑real‑time indexing, full‑text search, built‑in auto‑scaling |
| ML Ranking | SageMaker endpoints | Batch retraining on click logs; real‑time inference via Lambda |
| UI/UX | React + Amazon Cognito | Secure SSO, role‑based access |
| Cost Control | Spot Instances for training jobs, Reserved Instances for OpenSearch | Predictable traffic patterns; cost savings >30 % vs on‑demand |

**Scalability:**  Kinesis scales to millions of events per second; OpenSearch auto‑scales nodes based on shard count.  
**Availability:**  Multi‑AZ deployments with automated snapshot restore; Lambda retries with exponential backoff.  
**Trade‑offs:**  Using managed services reduces operational overhead but limits fine‑tuning of low‑level search parameters—acceptable given the rapid delivery requirement.

---

### Leadership Principles Highlighted

- **Customer Obsession & Deliver Results:**  Directly reduced support tickets and improved user satisfaction.  
- **Ownership & Dive Deep:**  Built a production‑grade pipeline, tuned ML models, and iterated on feedback loops.  

*Bar‑raiser cue:* Look for evidence of ownership (owning the entire pipeline), deep technical decisions (choice of services, tuning parameters), quantified impact (ticket reduction %, cost savings), and lessons learned (e.g., shifting from batch to real‑time indexing after user testing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
