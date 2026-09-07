---
qid: ing_10ea9f16b4__aws__local
question: 'Explain: Companion Resources — Interview Prep'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 441
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:49-05:00'
sources: []
---

**Situation & Task**  
While building a conversational‑AI platform for a global e‑commerce client, I was tasked with designing *Companion Resources*—contextual help articles and tutorials that surface during the chat flow to reduce support tickets.

**Action (Technical)**  
I scoped requirements: 10 k concurrent users, 99.99% latency <200 ms, cost ≤$2M/yr.  
*Design*:  
- **Front‑end**: React + Amazon CloudFront for low‑latency CDN.  
- **Back‑end**: Stateless Lambda functions triggered by API Gateway; each call fetches pre‑ranked resources from a DynamoDB table (partition key = intent, sort key = relevance score).  
- **Ranking Engine**: A SageMaker endpoint retrains every 12 h on click‑through data.  
- **Monitoring**: CloudWatch metrics + X-Ray traces to enforce SLAs; automatic scaling via Lambda concurrency limits.

*Why AWS?*  
Lambda removes server ops, DynamoDB gives single‑digit ms reads at scale, and SageMaker handles ML without managing clusters. Costs are pay‑per‑use; estimated $1.8 M/yr vs $3.5 M for a self‑hosted stack.

**Result**  
Within 4 months, support tickets dropped **35%**, user satisfaction (CSAT) rose from 78 to 92, and the feature ran with <0.2 ms average latency under peak load—exceeding our SLA by 5×.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Deliver real‑time help that directly cuts friction.  
- **Ownership**: Designed, deployed, and iterated the end‑to‑end solution without handoffs.  

*Bar‑raiser cues*: I quantified impact (ticket reduction %, latency), demonstrated deep technical dive (AWS services & trade‑offs), and learned from early A/B failures to refine ranking logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
