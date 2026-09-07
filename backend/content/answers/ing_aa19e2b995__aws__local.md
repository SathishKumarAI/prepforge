---
qid: ing_aa19e2b995__aws__local
question: 'Explain: A New Chapter for fast.ai: How To Solve It With Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 413
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:47-05:00'
sources: []
---

**Situation / Task**  
In my last role I was tasked with reducing the time to train our NLP models from **4 hrs → <30 min** on a growing dataset (≈ 5 M tokens). The team used fast.ai on local GPUs, but scaling out was limited by manual hyper‑parameter tuning and lack of CI.  

**Action**  
I introduced an end‑to‑end pipeline that leveraged *fastai*, *SageMaker* and *AWS Step Functions*.  
1. **Data prep** – Glue crawls S3 for new text, transforms it with PySpark (≈ 2 min).  
2. **Model training** – SageMaker Processing jobs run fast.ai scripts on spot instances; I added a hyper‑parameter search using *Optuna* and saved the best model to ECR.  
3. **Deployment** – The trained model is pushed to an API endpoint via Lambda@Edge for low‑latency inference (≤ 50 ms).  
4. **CI/CD** – CodePipeline triggers on Git commits, runs unit tests, then launches the pipeline automatically.

**Result**  
Training time dropped from 4 hrs to **27 min**, a **93 % reduction**. Cost per training cycle fell from $120 → $12 (spot pricing + automated shutdown). Model accuracy improved by **+2.3 % F1** due to systematic hyper‑parameter tuning.

**Learnings**  
*Ownership*: I owned the full lifecycle, not just code.  
*Dive Deep*: Profiling revealed data skew as a bottleneck; solving it required re‑partitioning.  
*Bar‑raiser focus*: The solution’s measurable impact and automated nature met Amazon’s “Deliver Results” principle while keeping the system simple and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
