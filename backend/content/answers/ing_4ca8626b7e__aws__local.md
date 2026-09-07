---
qid: ing_4ca8626b7e__aws__local
question: 'Explain: Context Assembly — Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 396
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:18:19-05:00'
sources: []
---

**Context Assembly – A Code‑Assistant Service (AWS)**  
*Leadership Principles: Customer Obsession & Ownership*

**Situation** – I led a team that built an internal “Code Assistant” for our DevOps platform. Developers complained that AI suggestions were context‑poor, leading to >30 % rework on generated snippets.

**Task** – Deliver a real‑time code suggestion engine that stitches together relevant repository history, open PRs, and user intent in <200 ms while keeping costs under $2k/month.

**Action**  
1. **Data‑flow design**:  
   * Pull code context from CodeCommit & CloudWatch Logs using EventBridge events.  
   * Store tokenized snippets in an encrypted DynamoDB table (global secondary index on file path).  
   * Invoke a SageMaker Endpoint (LLM) with the assembled prompt via API Gateway + Lambda, adding user‑role metadata for fine‑tuning.

2. **Scalability & Availability** – Use Lambda’s provisioned concurrency (5 k req/s), auto‑scaling with CloudWatch alarms; deploy in two AZs to meet 99.95 % SLA.  

3. **Cost control** – Cache frequent prompts in ElastiCache Redis; batch inference on the SageMaker endpoint, reducing GPU hours by 45 %.  

4. **Feedback loop** – Store acceptance rates in Kinesis Data Streams → Glue ETL → Redshift for quarterly KPI review.

**Result** – Adoption rose from 12 % to 78 % within two months; developer rework dropped 32 %; monthly spend stayed at $1,750. Learned that “context is king” and that a lightweight cache layer can drastically cut inference costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
