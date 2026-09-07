---
qid: vq_725eae1914__aws__local
question: What are the disadvantages of reducing dimensionality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 376
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:57:38-05:00'
sources: []
---

**Situation & Task**  
While building a recommendation engine for a global e‑commerce platform, my team explored dimensionality reduction (PCA/Autoencoders) to speed up inference on millions of users per day.

**Action**  
I led a cross‑functional sprint:  
- **Requirements:** 1 ms latency, <10 % loss in AUC, cost ≤$5k/month.  
- **Design:** Compared PCA (S3 for model artifacts, SageMaker endpoint) vs. an end‑to‑end Autoencoder on EC2 spot instances. I introduced a feature‑importance audit using SHAP to quantify what was lost.  
- **AWS Services:** S3 for data lake, SageMaker for training, Lambda for preprocessing, CloudWatch for latency metrics.

**Result**  
PCA cut inference time from 18 ms to 4 ms (86% faster) but dropped AUC by 4.7 points, translating to a $1.2M annual revenue loss in conversion. The Autoencoder retained 0.9 AUC with 12 ms latency and cost $3.8k/month—meeting all SLAs.

**Reflection**  
*Customer Obsession:* I quantified how dimensionality reduction hurt user experience (conversion).  
*Dive Deep & Ownership:* By auditing feature importance, we identified that removing rare item embeddings caused the drop.  
*Learned:* Always validate business metrics before deploying ML optimizations; a 10‑fold speedup can backfire if it erodes value.

This approach balances performance with tangible impact—key for any Amazon data‑driven product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
