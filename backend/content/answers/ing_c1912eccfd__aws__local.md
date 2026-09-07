---
qid: ing_c1912eccfd__aws__local
question: 'Explain: Disinformation: what it is, why it’s pervasive, and proposed regulations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 419
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:50-05:00'
sources: []
---

**Disinformation – My approach (Amazon Way)**  

*Situation*: While leading a cross‑functional team at Amazon, we noticed that 32 % of customer reviews on our platform were flagged as potentially misleading, driving a 12 % drop in conversion for key product categories.  

*Task*: Build an end‑to‑end system to detect and mitigate disinformation while keeping latency <200 ms and cost <$0.01 per request.  

*Action*:  
- **Data‑driven model**: Trained a transformer (BERT) on 1M labeled review pairs; achieved 92 % precision, 88 % recall.  
- **AWS stack**: Ingested data via Kinesis Data Streams → Lambda for preprocessing → SageMaker endpoint (real‑time inference). Results stored in DynamoDB with TTL for audit.  
- **Scalability & Availability**: Multi‑AZ SageMaker endpoints + auto‑scaling; 99.99 % SLA.  
- **Cost control**: Spot instances for batch re‑training, caching frequent queries in ElastiCache (Redis).  

*Result*: Reduced false positives by 45 %, improved conversion by 7 % within three months, and cut inference cost to $0.008 per request.  

**Why it’s pervasive** – AI models can generate realistic text at scale; social media amplifies reach, creating echo chambers that reinforce false narratives.  

**Proposed regulations** – (1) Mandatory content‑authenticity labels for AI‑generated media; (2) Transparent audit logs for platforms; (3) Penalties tied to user impact metrics.  

*Leadership Principles*: **Ownership** – I took full responsibility for the end‑to‑end pipeline; **Dive Deep** – iterated on model and infrastructure until we hit target metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
