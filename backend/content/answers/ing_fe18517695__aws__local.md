---
qid: ing_fe18517695__aws__local
question: 'Explain: From your test set evaluation (Step 6 from Chapter 4)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 404
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:34-05:00'
sources: []
---

**Situation / Task**  
I was leading a team that built an image‑classification model for a retail catalog. After training on ~500k labeled images (Step 5), we needed to verify generalization before production—our Step 6 “test set evaluation.”  

**Action**  
1. **Data prep** – pulled a stratified 20% hold‑out set from the original pool, ensuring each category’s distribution matched the training set.  
2. **Evaluation pipeline** – deployed an AWS SageMaker endpoint (Inference Runtime) that streamed images through the model in micro‑batches; we wrapped it with Amazon CloudWatch metrics to capture latency and error rates.  
3. **Metrics** – calculated top‑1 accuracy, precision/recall per class, confusion matrix, and ROC‑AUC for multi‑label cases.  
4. **Bias check** – ran demographic slicing (brand, region) to spot skew; identified a 4% drop in recall on “summer” items.  
5. **Iterate** – retrained with augmented data for under‑represented slices, re‑evaluated, and achieved a 0.92 overall accuracy (+3 pp) while keeping latency <200 ms.

**Result**  
- Final model hit **93% top‑1 accuracy**, exceeding the SLA of 90%.  
- Confusion matrix revealed no critical misclassifications that could impact customer experience.  
- CloudWatch logs showed a 15 % reduction in inference cost by shifting to a smaller instance type after profiling.

**Learning & Bar‑raiser Insight**  
I owned the end‑to‑end evaluation, dove deep into data slicing, and quantified every improvement. The bar‑raiser will note my bias audit (Customer Obsession), cost optimization (Ownership), and rapid iteration (Bias for Action).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
