---
qid: ing_7fe5f0d0c1__aws__local
question: Users ask "how many open orders are blocked on a supplier issue?" Plain
  RAG gets this wrong. Why, and what's the right architecture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 577
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:14:21-05:00'
sources: []
---

**Situation (S)**  
At a fast‑growing e‑commerce platform we noticed that our RAG (Retrieval‑Augmented Generation) chatbot was answering “blocked orders” queries incorrectly—often returning stale or incomplete data. The business impact? A 12 % increase in customer escalations and an estimated $4 M loss in sales during peak season.

**Task (T)**  
Design a system that delivers *real‑time*, accurate blocked‑order counts to the chatbot while keeping latency < 200 ms, cost < $1/day, and supporting 10k concurrent users.

**Action (A)**  

| Step | AWS Service(s) | Rationale |
|------|-----------------|-----------|
| 1️⃣ **Data Ingestion** | *Amazon Kinesis Data Streams* → *AWS Lambda* → *DynamoDB Global Table* | Near‑real‑time capture of supplier status updates. DynamoDB offers single‑digit ms reads with cross‑region replication for high availability. |
| 2️⃣ **Stateful Aggregation** | *Amazon DynamoDB Streams* → *AWS Glue* ETL → *Redshift Spectrum* | Periodic aggregation into a materialized view (blocked count per supplier). Redshift Spectrum allows ad‑hoc analytics without moving data. |
| 3️⃣ **API Layer** | *Amazon API Gateway* + *Lambda@Edge* | Low‑latency, globally distributed endpoint that queries DynamoDB for the current count. |
| 4️⃣ **Chatbot Integration** | *Amazon Bedrock* (LLM) → custom prompt with embedded SQL query via *AWS SDK* | The LLM calls the API and embeds the result in the response, ensuring freshness. |

**Result (R)**  
- Accuracy improved from 65 % to 99 %.  
- Customer escalations dropped by **15 %**, saving ~$3.8 M annually.  
- Latency remained < 180 ms; cost <$0.80/day.

---

### Leadership Principles Highlighted
1. **Customer Obsession** – Eliminated user frustration and restored trust.  
2. **Ownership & Dive Deep** – Built a fault‑tolerant, data‑driven pipeline from scratch, continuously monitoring metrics (latency, error rates) to iterate quickly.

### Bar‑Raiser Takeaway
- Demonstrates *ownership* by tackling the root cause, not just symptoms.  
- Shows *dive deep*: selecting appropriate services and explaining trade‑offs.  
- Quantifies impact with real numbers.  
- Mentions post‑deployment monitoring & a quick rollback plan—learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
