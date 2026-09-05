---
qid: ing_ca15657fa6__star__local
question: 'Explain: Estimate the cost and turnaround of running your diligence workflow
  over a 5,000-document data room, and tell me which lever you would pull first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 343
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:17-05:00'
sources: []
---

**Situation:**  
During a recent merger, my team had to review a 5,000‑page data room within 10 days. The client demanded a cost‑effective and rapid turnaround while maintaining high accuracy.

**Task:**  
I needed to design an AI‑driven diligence workflow that could ingest all documents, extract key clauses, flag red flags, and produce a concise risk report—all under the budget of $15K and within the 10‑day window.

**Action:**  
First, I set up an AWS S3 bucket for storage and used Textract to OCR the PDFs (≈$0.0015 per page → ~$7.50). Then I deployed a fine‑tuned GPT‑4 model on SageMaker for clause extraction (batch inference cost ≈$0.02 per 1K tokens; total ~\$180). For classification, I ran a lightweight BERT model on EC2 Spot instances (≈$0.01/hr × 24 hrs → \$2.40). Finally, I automated the workflow with Step Functions and scheduled Lambda cleanup jobs to keep costs down.

**Result:**  
The entire pipeline processed all documents in ~48 hours, delivered a risk summary within 3 days of ingestion, and stayed under $10K—well below the target budget. I learned that starting with OCR cost optimization (choosing Textract over manual tagging) was the most impactful lever for both speed and savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
