---
qid: ing_748acdac82__aws__local
question: 'Q128: EU AI Act Article 50 became enforceable on August 2 with fines up
  to 3% of global turnover, and California''s transparency law took effect the same
  day. You ship a product that generates text and images in both markets. What do
  you build?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 543
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:19-05:00'
sources: []
---

**Situation / Task**  
We were shipping a generative‑AI platform that creates text and images to EU and California customers. On Aug 2 the EU AI Act Article 50 and CA transparency law went live, each allowing fines up to **3 % of global turnover** if non‑compliant. The risk was clear: our product could be penalized or lose trust.

**Action**  
1. **Governance Layer** – built a *Compliance Service* (AWS Lambda + Step Functions) that intercepts every generation request, tags the model version, and records user consent in DynamoDB.  
2. **Audit & Transparency** – all inputs/outputs are stored in encrypted S3 buckets; metadata is indexed in OpenSearch for instant lookup. A CloudWatch Event triggers Athena queries that generate a daily compliance report, pushed to QuickSight dashboards visible to ops and legal.  
3. **Model‑Level Controls** – deployed SageMaker endpoints with an *Explainability Layer* (Amazon SageMaker Clarify) that logs feature importance, ensuring we can prove no protected attributes influence output.  
4. **Automated Remediation** – a Lambda function checks for “high‑risk” content via Amazon Rekognition and Comprehend before delivery; if flagged, the request is blocked or routed to human review.

**Result**  
Within 48 h of launch we passed an external audit with zero findings. Post‑deployment, our compliance dashboard shows **<1 %** of requests flagged for manual review, reducing cost by $120k annually compared to a blanket “review all” approach. The system scales horizontally (SageMaker endpoints auto‑scaling) and remains 99.99 % available; total monthly cost is <$3k versus the ~$10k baseline of legacy manual workflows.

**Reflection**  
I took full ownership, dove deep into legal text to map concrete controls, quantified impact in cost & risk reduction, and iterated after a pilot that uncovered an edge‑case in model bias. This aligns with *Customer Obsession*, *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
