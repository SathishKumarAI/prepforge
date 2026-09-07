---
qid: ing_bd78b3ede1__aws__local
question: 'Q: How do you handle a 500-page PDF with Vision LLMs efficiently?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 448
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:53-05:00'
sources: []
---

**Situation**  
I was tasked to extract structured insights from a 500‑page regulatory PDF for an enterprise client that needed daily compliance reports.

**Task**  
Deliver a solution that processes the document in under 2 minutes, keeps costs < $0.10 per report, and scales to thousands of PDFs nightly.

**Action**  

1. **Ownership & Dive Deep** – I broke the PDF into chunks (≈ 5 kB) using *Amazon Textract*’s `AnalyzeDocument` API, which returns bounding boxes for text, tables, and forms in a single pass.
2. **Bias for Action & Invent & Simplify** – Instead of feeding raw OCR to a Vision LLM, I built a lightweight pre‑processor:
   - Use AWS Lambda (Python) to stream chunks into an *Amazon SageMaker* endpoint running the *Vision‑LLM* model.
   - Each chunk is classified (text vs. table) and passed only to the relevant inference path; tables go through a custom transformer that normalizes rows/columns before LLM input.
3. **Scalability & Cost** –  
   - Lambda concurrency set to 1000, auto‑scaling based on queue depth in *Amazon SQS*.
   - SageMaker endpoints use spot instances (p3.xlarge) and autoscaling policies; total cost ≈ $0.08/report.
4. **Availability** – The entire pipeline is built on *AWS Step Functions*, ensuring retry logic, dead‑letter queues, and monitoring via CloudWatch.

**Result**  
Processing time dropped from 15 min to < 90 s per PDF (≈ 17× faster). Monthly cost savings of $12k were realized. I documented the failure mode where OCR missed a table header; we added a confidence threshold that automatically retriggers Textract for low‑confidence blocks, reducing error rate from 4% to 0.5%.  

*Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
