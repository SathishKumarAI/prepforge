---
qid: ing_da357703cc__star__local
question: 'Explain: Batch API usage — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 351
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:44:32-05:00'
sources: []
---

**Situation:**  
When my team launched a new client portal, we had to process over 50 000 invoices per month for audit compliance. The existing OCR service was real‑time only and couldn’t handle the volume without throttling.

**Task:**  
I needed to build a scalable batch pipeline that ingested PDFs, extracted structured data (vendor, amount, date), validated it against our schema, and fed the results into the ERP system—all within a 12‑hour window so we could deliver daily reconciliations.

**Action:**  
I chose Azure Cognitive Services’ Document Intelligence Batch API. First, I set up an Azure Storage queue to receive file references, then wrote an Azure Function that triggered on each message, calling the batch endpoint with `mode=async`. The function stored job IDs in Cosmos DB and scheduled a second function to poll for completion every 30 seconds. Once finished, I parsed the JSON results, mapped fields using a custom schema validator written in Python (pydantic), and pushed the cleaned data to our Kafka topic for downstream services. To keep costs down, I enabled auto‑scaling on the Function app and used Azure Cost Management to monitor spend.

**Result:**  
The pipeline processed 52 000 invoices in 9 hours per batch, a 30% reduction in turnaround time versus the legacy system. Accuracy improved from 85 % to 97 % after adding post‑processing rule checks. I learned how to orchestrate serverless components for large‑scale document AI while balancing performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
