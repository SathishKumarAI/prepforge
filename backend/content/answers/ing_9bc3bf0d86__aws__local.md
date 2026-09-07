---
qid: ing_9bc3bf0d86__aws__local
question: Design a document-extraction system. When do you use an OCR pipeline versus
  sending pages to a VLM?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 461
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:09-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of our enterprise‑grade document‑extraction platform for a Fortune 500 client who needed to process ~5 M pages/month while keeping latency under 200 ms per page and costs below $0.02/page.

**Action**  
1. **Requirement dive** – I mapped use cases: (a) structured forms with known fields, (b) unstructured PDFs, (c) handwritten notes.  
2. **Pipeline decision logic** –  
   * **OCR + rule‑based extraction** for structured forms (≈ 80 % of traffic). We used Amazon Textract OCR + DynamoDB for field mapping; cost ≈ $0.005/page, latency 30 ms.  
   * **Vision Language Model (VLM)** for unstructured/handwritten pages (≈ 20 %). We deployed a fine‑tuned AWS SageMaker endpoint on g4dn.xlarge instances, scaling via Lambda‑based auto‑scaling; cost ≈ $0.015/page, latency 150 ms.  
3. **Cost & availability** – Implemented Spot‑Fleet for VLM inference (70 % savings), and CloudFront edge caching for OCR outputs to reduce repeated calls.  

**Result**  
- Reduced overall processing cost by **35 %** while maintaining a **99.9 % SLA**.  
- Cut average latency from 350 ms to 140 ms, enabling real‑time dashboards.  
- Achieved 97 % accuracy on field extraction versus 89 % baseline.

**Reflection (Bar‑raiser)**  
I owned the trade‑off analysis and iterated with data: monitored CPU/GPUtil usage, cost per inference, and error rates. After a spike in OCR failures on low‑contrast PDFs, I added a pre‑processing step (adaptive thresholding) that lowered errors by 12 %. This demonstrates **Ownership**, **Dive Deep**, and **Bias for Action**—the pillars Amazon values most in engineering excellence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
