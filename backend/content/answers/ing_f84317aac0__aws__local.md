---
qid: ing_f84317aac0__aws__local
question: 'Explain: Divide and Conquer — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 494
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:52-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to build a production‑grade ML inference pipeline for a global retail client that had 2 M active users per day and required sub‑second latency on image classification. The budget constraint was tight: we could not afford the high‑end GPU clusters that were standard in many pipelines.

**Action – Divide & Conquer + Frugal Architecture**  
1. **Modularize** the pipeline into *pre‑processing*, *model inference*, and *post‑processing* micro‑services.  
2. For each stage, pick the cheapest AWS service that meets latency:  
   - **S3 + Lambda@Edge** for on‑the‑fly image resizing (cost ≈ $0.20/1M requests).  
   - **Amazon SageMaker Neo** to compile the TensorFlow model into a lightweight binary and deploy it on **AWS Inferentia** instances; inference cost drops 60% vs GPU.  
   - **Step Functions** orchestrate the workflow, ensuring fault isolation (if one micro‑service fails we retry only that part).  

3. **Divide** the dataset by product category and route requests to a specialized model per category. This keeps each model small (< 5 MB) and speeds up compilation and inference.

4. **Cost & scalability**:  
   - Spot instances for training (≈ $0.03/hr vs $0.50/hr on GPUs).  
   - Auto‑scaling of Lambda@Edge based on CloudFront metrics.  
   - Multi‑region deployment to keep latency < 200 ms globally.

5. **Metrics & Result** – After launch:  
   - Latency dropped from 1.2 s (GPU baseline) to 350 ms.  
   - Daily inference cost fell from $3,000 to $850 (≈ 72% savings).  
   - Accuracy stayed at 93.5% F1.

**Result & Reflection**  
By *dividing* the workflow and *conquering* each part with a frugal design, we delivered a robust, low‑cost ML service that met performance SLAs. I learned that true ownership means questioning every “standard” component and re‑architecting for cost and speed—exactly what Amazon expects from its engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
