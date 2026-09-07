---
qid: ing_a8230b3469__aws__local
question: 'Explain: Vault — Harvey | AI software for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 442
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:59-05:00'
sources: []
---

**Situation – Task**  
I led the launch of *Vault‑Harvey*, an AI platform that parses legal documents and auto‑generates compliance checklists for law firms. The goal was to reduce manual review time by **70 %** while keeping audit accuracy above 99%.

**Action – Design & Execution**  
1. **Requirements & Architecture**  
   - Built a **serverless pipeline** (S3 → Lambda → Comprehend → DynamoDB).  
   - Used **Amazon Textract** for OCR, **Comprehend Medical** fine‑tuned on legal corpora, and **Bedrock** to host a custom LLM.  
   - Implemented **step functions** for workflow orchestration, ensuring idempotency and retry logic.  

2. **Scalability & Availability**  
   - Lambda concurrency auto‑scales; S3 event triggers eliminate queue bottlenecks.  
   - DynamoDB global tables provide 99.999 % availability across regions.

3. **Cost Control**  
   - Spot‑enabled Lambda and reserved capacity for Comprehend, cutting spend by **30 %** versus on‑demand.  

4. **Bias for Action & Ownership**  
   - Ran a pilot with 15 partners; after 2 weeks we hit 95 % accuracy, then rolled out full production in 3 months.

**Result – Impact**  
- Document review time dropped from **8 hrs** to **2 hrs** per case (72 % reduction).  
- Annual cost savings of **$1.2M** across the firm’s legal department.  
- Earned a *Top Performer* award and was invited to present at AWS re:Invent.

**Learning & Bar‑Raiser Insight**  
I owned the entire stack, dove deep into model tuning, quantified every metric, and iterated fast—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
