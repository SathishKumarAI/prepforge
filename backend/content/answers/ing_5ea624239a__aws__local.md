---
qid: ing_5ea624239a__aws__local
question: 'Explain: Handling Low-Quality Scans — Ocr And Layout'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 439
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:39-05:00'
sources: []
---

**Situation / Task**  
While launching an enterprise document‑automation platform for a Fortune 500 client, we discovered that the OCR accuracy on low‑resolution scans dropped to **58 %**, causing downstream processing delays and manual reviews costing ~3 h per document.

**Action (Design & Implementation)**  
*Owned* the end‑to‑end pipeline:  

1. **Pre‑processing** – built a serverless Lambda chain that applies OpenCV edge‑enhancement, deskewing, and adaptive binarization using **Amazon Rekognition Custom Labels** for quality scoring.  
2. **OCR Layer** – switched from Amazon Textract’s standard OCR to the **Document Text Detection API** with `FeatureTypes=["TABLES","FORMS"]` and added a custom confidence threshold filter (≥ 90 %).  
3. **Layout Extraction** – leveraged **Amazon SageMaker Ground Truth** for a lightweight layout model that tags blocks, paragraphs, and tables; deployed via an **ECR‑based ECS Fargate** cluster to scale horizontally.  
4. **Feedback Loop** – stored failed scans in S3 with metadata; used Amazon Athena queries on the bucket to surface patterns (e.g., DPI < 200, skew > 5°).  

*Bias for Action* drove a 48‑hour sprint; *Dive Deep* ensured we logged every metric.

**Result**  
- OCR accuracy rose from **58 % → 92 %**.  
- Manual review time per document fell from **3 h to 15 min**, saving ~2,200 hrs annually (~$1.4M).  
- Cost of the new pipeline was < 30 % of the legacy on‑prem OCR stack, with auto‑scaling keeping peak latency under **250 ms**.

**Learnings & Bar‑raiser Signals**  
I *took ownership* of the whole flow, quantified impact through clear metrics, and iterated based on data—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
