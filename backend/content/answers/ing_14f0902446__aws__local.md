---
qid: ing_14f0902446__aws__local
question: 'Explain: The Business Problem — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 520
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:12:22-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
At a global retailer, the “McP Knowledge Agent” was an internal FAQ chatbot that answered product‑related queries for millions of customers each month. 70 % of agents were still answering simple questions manually, causing slow response times and high operational costs.

**Task**  
I led a cross‑functional squad to redesign the agent so it could handle 90 % of FAQs autonomously, reduce average resolution time from 3 min to <30 s, and cut live‑agent hours by 40 %.

**Action (Dive Deep & Bias for Action)**  

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| Data ingestion | **Amazon S3 + Glue** | Store historical chat logs, automatically crawl and catalog them. |
| NLP model training | **Amazon SageMaker** | Train a BERT‑based intent classifier on 1M labeled exchanges; use Spot Training to cut cost 60 %. |
| Real‑time inference | **AWS Lambda + API Gateway** | Stateless functions scale to 10k QPS, keep latency <100 ms. |
| Knowledge base | **Amazon DynamoDB Global Tables** | Low‑latency read/write across regions; auto‑replication for high availability. |
| Monitoring & Feedback | **CloudWatch + SageMaker Model Monitor** | Detect drift and retrain every 24 h automatically. |

We built a *fallback* rule engine (AWS Step Functions) that routed ambiguous queries to live agents, ensuring no loss of customer satisfaction.

**Result (Deliver Results)**  
- Autonomy increased from 30 % to **92 %** of interactions.  
- Average response time dropped from **3 min → 0.5 min** (70 % reduction).  
- Live‑agent hours fell by **38 %**, saving ~$1.2M annually.  
- Customer satisfaction score rose from 78 to **86** on the post‑interaction survey.

**Learning & Bar‑raiser Insight**  
I iterated the model based on drift alerts, learning that a single‑layer fine‑tuning underperformed; adding a domain‑specific adapter layer improved accuracy by 4 %. The bar‑raiser will hear my ownership of the full pipeline, deep dive into data quality and model bias, and quantified impact—all while showing continuous learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
