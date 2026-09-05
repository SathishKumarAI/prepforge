---
qid: ing_523098e204__star__local
question: 'Explain: Q: A client has 500 insurance claim PDFs per day that must be
  entered into a legacy web portal with no API. Design a system using computer-use
  agents.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 311
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:37-05:00'
sources: []
---

**Situation** – Our client processed ~500 insurance claim PDFs daily and had to manually upload each one into an outdated web portal that offered no API, which was taking up 70% of the claims team’s time.

**Task** – I needed to automate the end‑to‑end ingestion pipeline: extract claim data from PDFs, format it correctly, and navigate the legacy UI reliably so that the portal accepted the uploads without human intervention.

**Action** – I built a computer‑use agent stack with Selenium for browser automation, combined with OCR (Tesseract) and PDF parsing (PyPDF2). The agent ran on an AWS Fargate container triggered by an S3 upload event. It queued PDFs, extracted key fields (policy number, claim amount), filled the web form using dynamic XPath selectors, handled captcha‑free login via saved session cookies, and submitted each claim. I added a retry loop with exponential backoff for flaky network calls and logged every step to CloudWatch for auditability.

**Result** – The new system reduced manual entry time from 8 hours/day to under 30 minutes, cutting labor costs by ~60%. Accuracy hit 99.9% after two weeks of monitoring, and the team repurposed the freed capacity to focus on claim adjudication quality. I learned how to combine OCR, web‑automation, and serverless orchestration for legacy‑system integration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
