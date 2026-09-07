---
qid: ing_4d9d6f7363__aws__local
question: 'Explain: Automated Quality Sampling — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 456
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:20:57-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was tasked to build an *Automated Quality Sampling* system for a garment factory that produced over **10 M pieces/month**. Traditional manual checks cost $2 k/day and missed defects in 12% of batches.

**Task (T)**  
Own the end‑to‑end pipeline: capture images, run inference, flag samples, and feed back to production lines—ensuring >99% defect detection while keeping costs <20% of current QA spend.

**Action (A)**  
1. **Capture & Store** – Cameras on each line stream JPEGs to **S3** via Kinesis Video Streams; metadata lives in **DynamoDB**.  
2. **Inference** – Trained a custom CNN in **SageMaker**, deployed as an endpoint behind **AWS Lambda** (≤150 ms latency).  
3. **Orchestration** – Used **Step Functions** to route images: if confidence <90% → send to human inspector; else flag automatically.  
4. **Feedback Loop** – Results fed back into the model via **S3 event triggers** and retrained nightly, reducing false positives by 30%.  
5. **Cost & Scale** – Leveraged **Spot Instances** for training (–45%) and **SageMaker Neo** to compile models for edge inference on line‑side devices, cutting per‑image cost from $0.05 → $0.008.

**Result (R)**  
- Detected defects 99.3% of the time—up from 88%.  
- Cut QA labor by 70%, saving **$350 k annually**.  
- Reduced defect leakage to customers by **15%**, boosting customer satisfaction scores from 4.2 → 4.8/5.

**Leadership Principles Highlighted**  
*Customer Obsession*, *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
