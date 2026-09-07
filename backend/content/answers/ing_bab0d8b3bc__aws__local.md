---
qid: ing_bab0d8b3bc__aws__local
question: 'Explain: Handling Conflicting Information — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 424
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:49-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional AI team tasked with building a *conflict‑resolution engine* for our internal knowledge base (KB). The KB was fed by 12 data sources—product docs, support tickets, and third‑party APIs—and we had to ensure that when two sources disagreed the system surfaced the most trustworthy version. Our goal: reduce “conflicting answer” clicks by 70 % within six months.

**Action**  
*Ownership & Bias for Action*: I mapped the data lineage, built a lightweight graph model in **Amazon Neptune**, and implemented a *confidence scoring* algorithm that weighed source reliability (e.g., internal docs = 0.9, community forums = 0.6).  
*Dive Deep*: Using **AWS Glue** we extracted metadata, then stored it in **DynamoDB** for low‑latency lookups. For each user query we ran a *parallel inference pipeline* on **Amazon SageMaker endpoints**, comparing scores and returning the highest‑confidence answer.  
We added an audit trail in **S3** (structured JSON) so that any conflict could be traced back to its origin, enabling continuous improvement.

**Result**  
Within four months we saw a 73 % drop in conflicting answer clicks and a 15 % lift in overall user satisfaction scores (CSAT). The system handled 2.4 M queries/month with <5 ms latency per request, staying under $3K/Month on AWS services.

**Learning & Bar‑raiser check**  
I iterated the scoring logic after a false positive caused a support ticket spike—adding a *human‑in‑the‑loop* flag for low‑confidence cases. This reinforced *Customer Obsession* and demonstrated ownership: I owned the metric, dove deep into root causes, quantified impact, and turned failure into an improvement loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
