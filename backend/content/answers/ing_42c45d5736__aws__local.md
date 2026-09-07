---
qid: ing_42c45d5736__aws__local
question: 'Explain: Extract — LlamaIndex | AI Agents for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 439
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:50-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team to build an end‑to‑end “Document‑to‑Action” platform for a Fortune 500 insurer that needed to process >1 M PDFs per month, extract structured data, and trigger policy‑adjustment workflows. The goal was to reduce manual review time from 4 hrs per document to under 30 min while maintaining <0.5 % error.

**Action (Technical)**  
I architected a serverless pipeline using **Amazon Textract** for OCR → **LlamaIndex** (a vector‑store wrapper) to index extracted text, and **AWS Step Functions** orchestrated AI agents that query the index via OpenAI embeddings. The agents decide which downstream microservices (S3, DynamoDB, SNS) need to run. I introduced **Amazon Kinesis Data Streams** for real‑time ingestion and used **Lambda@Edge** to cache results at edge locations, cutting latency by 70 %.  

I applied **Design Thinking**: defined user personas, wrote acceptance tests in CDK, and set up CloudWatch dashboards for SLA metrics (latency, error rate). For cost, I leveraged **On‑Demand Spot Instances** for heavy inference jobs, saving ~35 % versus baseline EC2 usage.

**Result**  
The platform processed 1.3 M documents/month with a 98.6 % accuracy and cut manual review time by 85 %, freeing 250 FTEs annually (~$12 M).  

**Leadership Principles**  
- **Customer Obsession**: Built feedback loops to continuously improve extraction quality.  
- **Ownership**: Took full responsibility for end‑to‑end latency, cost, and compliance, iterating on the design until SLA met.  

**Bar‑raiser Takeaway**  
I demonstrated deep dive into OCR performance, quantified impact with concrete metrics, and learned from a failed early prototype that mis‑estimated text layout complexity—prompting a shift to LlamaIndex for richer contextual indexing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
