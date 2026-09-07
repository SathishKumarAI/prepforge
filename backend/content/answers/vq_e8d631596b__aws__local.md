---
qid: vq_e8d631596b__aws__local
question: Why does part of a row sometimes get shifted to the next page, but not all
  of it?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 605
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:20:35-05:00'
sources: []
---

**Situation & Task**  
While leading a *Print‑as‑a‑Service* project for our e‑commerce platform, we noticed that in generated PDF invoices some rows were split across pages—only the first few cells stayed on the current page while the rest spilled onto the next. The requirement was to keep each logical record intact (no mid‑row splits) and to maintain a 99.9 % on‑time delivery SLA for invoice generation.

**Action**  
I took full ownership, diving deep into the PDF rendering pipeline:

1. **Requirements Clarification** – Each row represents an order line; if any part of the row is rendered after the page boundary, the entire row must be moved to the next page.
2. **Design & Services**  
   * **AWS Lambda** (Python) orchestrates the job and calls Amazon Textract for OCR‑based layout analysis.  
   * **Amazon S3** stores raw invoice data and the final PDF.  
   * **Amazon Step Functions** coordinates the “render‑then‑validate” workflow, enabling retry logic.  
   * The rendering engine (WeasyPrint) is wrapped in a container on **AWS Fargate** to scale horizontally; each task processes 1 kB of data in < 200 ms.
3. **Page‑break Logic** – Implemented an algorithm that pre‑computes the pixel height of each row using the font metrics from WeasyPrint, then checks if `current_y + row_height > page_height`. If true, a new page is started before rendering the entire row.  
4. **Cost & Availability Trade‑offs** – Fargate tasks cost $0.04/hr per vCPU; by batching 100 invoices per task we keep spend <$2 /day while keeping latency < 3 s for 99.5 % of jobs.

**Result**  
- Eliminated mid‑row splits in **100 %** of generated PDFs.  
- Reduced manual support tickets by **68 %** (from 120/month to 39).  
- Maintained the 99.9 % SLA with an average throughput of 1,200 invoices/day at a cost of $3.50/day.

**Reflection**  
I learned that *Bias for Action* and *Dive Deep* are critical when a seemingly minor UI glitch hides a systemic design flaw. Future iterations will expose row metrics via CloudWatch dashboards to catch regressions early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
