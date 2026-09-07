---
qid: ing_4bbb1517f4__aws__local
question: 'Why Treat a PDF as an Image? — Zero-Shot Local Document Parsing with Gemma
  4: Treating PDFs as Images'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 411
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:16:11-05:00'
sources: []
---

**Situation & Task**

At my previous role I led a feature to extract structured data from enterprise PDF invoices without manual labeling. The client demanded zero‑shot accuracy on thousands of formats while keeping latency < 200 ms per document.

**Action (Dive Deep + Ownership)**  

1. **Treat PDFs as images** – I reasoned that every PDF page is essentially raster content; the visual layout contains all semantic cues.  
2. Designed a two‑stage pipeline:  
   * **S3 → Lambda** to render each page into PNG using **Amazon SageMaker Neo** for inference‑ready models.  
   * **Lambda → Amazon Bedrock** with **Gemma 4** (prompted “extract tables & fields”) – no fine‑tuning needed.  
3. Leveraged **AWS Step Functions** to orchestrate parallel rendering and inference, guaranteeing *eventual consistency* across pages.  
4. Implemented **CloudWatch metrics**: `ParseTime`, `SuccessRate`. Adjusted Lambda concurrency (max 200) after observing a 30 % hit‑rate drop at peak load.

**Result (Deliver Results + Bias for Action)**  

- Achieved **92 % extraction accuracy** on unseen PDF styles vs. the baseline OCR+regex pipeline’s **78 %**.  
- Reduced total processing time from **4 s to 0.18 s per page**, cutting compute cost by **~70 %** (from $0.20 to $0.06 per doc).  
- The zero‑shot approach eliminated the need for a costly annotation loop, saving the client **$120k annually**.

**Reflection (Learn from Failure)**  

Early trials misidentified rotated pages; adding a pre‑processing rotation detector resolved this without extra model training, underscoring that *simple image‑centric assumptions* can outweigh complex NLP pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
