---
qid: vq_101f90b0ba__aws__local
question: Should strongly linked variables be removed before doing PCA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 481
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:05-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we care about the model’s predictive quality for end users; *Dive Deep* – we scrutinize statistical assumptions before engineering.  
> 
> **Situation & Task** – I led a fraud‑prediction project at a fintech startup. Our data scientist team noticed that “transaction amount” and “average daily spend” were highly correlated (r = 0.94). We planned to apply PCA for dimensionality reduction before feeding features into an XGBoost model on SageMaker.  
> 
> **Action** – I first plotted the covariance matrix and ran a Variance Inflation Factor (VIF) test; both confirmed severe multicollinearity. Rather than blindly dropping one variable, I performed a *sensitivity analysis*:  
> 1. Built three pipelines: (a) keep both variables, (b) drop “transaction amount,” (c) drop “average daily spend.”  
> 2. Trained each on the same 80/20 split, evaluated AUC‑ROC and lift at top 10% fraud rate.  
> 3. Ran the experiments in parallel on an EMR cluster using PySpark, leveraging Spark MLlib’s PCA implementation for speed.  
> 
> **Result** – Pipeline (b) (dropping “transaction amount”) achieved a +1.8% AUC and lifted the top‑10 % fraud detection rate by 3.5%, while reducing feature count from 12 to 11. The cost savings on SageMaker training time were ~15 %. We adopted pipeline (b) for production, saving ~2 k EC2 hours/month.  
> 
> **Reflection** – Removing correlated variables *before* PCA can prevent the algorithm from redistributing variance among redundant components, preserving interpretability and reducing over‑fitting risk. If multicollinearity is ignored, PCA may produce nearly identical principal components that inflate computational cost without performance gain. In future projects I’ll formalize this VIF + sensitivity step as a standard pre‑PCA check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
