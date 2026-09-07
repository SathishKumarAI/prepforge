---
qid: ing_db9dc93439__aws__local
question: 'Explain: Document AI: OCR pipeline vs OCR-free — Multimodal'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 472
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:11-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a project to extract structured data from thousands of invoices per day for a global retailer. The initial OCR‑pipeline (S3 → Textract → Glue → Redshift) cost $0.25 / page and delivered 88 % accuracy, but latency hit SLA (average 12 s).  

**Action**  
I redesigned the workflow to a *multimodal* approach that eliminates the heavy OCR step:

| Step | Old | New | AWS Services |
|------|-----|-----|--------------|
| Input | S3 upload | S3 + EventBridge | S3, EventBridge |
| Pre‑process | Lambda → Textract | Lambda → Bedrock (LLM) + Rekognition | Lambda, Bedrock, Rekognition |
| Data extraction | Textract OCR → Glue | Bedrock prompt “extract fields from image” + Rekognition label for layout | Bedrock, Rekognition |
| Storage | Redshift | DynamoDB + S3 for raw images | DynamoDB, S3 |

**Result**  
- Latency dropped to 2 s (6× faster).  
- Accuracy improved to 94 % (5 pp higher).  
- Cost fell from $0.25/page to $0.10/page (60 % savings).  

**Reflection (Leadership Principles)**  
*Customer Obsession*: We delivered near‑real‑time insights that let finance close books 3 hrs earlier. *Dive Deep*: I benchmarked OCR vs LLM outputs, quantified error rates per field type, and iterated until the trade‑off between compute cost and accuracy was optimal.  

**Bar‑raiser takeaway**  
I own the end‑to‑end pipeline, quantify every change, and learn from failure—when the first Bedrock model mis‑identified “invoice number” I retrained with a focused prompt, reducing that error to <0.1 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
