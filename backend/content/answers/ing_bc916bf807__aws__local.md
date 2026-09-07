---
qid: ing_bc916bf807__aws__local
question: 'Explain: The Interview Question — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 431
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:59-05:00'
sources: []
---

**Situation (S)**  
In 2023 I led a cross‑functional team that built an internal AI‑driven Knowledge Management (KM) platform for the global support org, handling ~30 000 tickets/day. The existing siloed wiki was 70 % outdated and slowed agent resolution by 18 %.  

**Task (T)**  
Design a scalable, searchable knowledge base that automatically surfaces relevant docs during live chats, reduces ticket time by ≥25 %, and supports multi‑language content.

**Action (A)**  
- **Ownership & Customer Obsession**: I mapped user journeys, ran 200+ usability tests, and set a KPI of <2 min search latency.  
- **Dive Deep & Invent & Simplify**: Leveraged **Amazon Kendra** for semantic search + **AWS Lambda** to auto‑tag new articles; used **S3** for storage and **DynamoDB** for metadata.  
- Implemented an **EventBridge** pipeline that ingests support tickets, triggers a SageMaker inference job (BERT model) to suggest related docs in real time.  
- Added a **Cost‑Optimized Tier**: On-demand Lambda for peak hours, scheduled batch jobs on Spot instances during off‑peak.

**Result (R)**  
- Search latency dropped from 5 s to <1 s.  
- First‑contact resolution rose from 62 % to 84 % (+22 pp).  
- Ticket volume decreased by 28 %, saving $350k/yr in support costs.  

**Learning**  
The initial model over‑recommended outdated docs; we introduced a feedback loop that reduced false positives by 60 %. I now advocate continuous model retraining and real‑time monitoring as standard practice.  

*Key Leadership Principles*: **Customer Obsession, Ownership, Dive Deep, Invent & Simplify, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
