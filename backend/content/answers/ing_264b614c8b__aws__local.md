---
qid: ing_264b614c8b__aws__local
question: 'Explain: Classification/Extraction: ROC, PR, class distributions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 449
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:52:41-05:00'
sources: []
---

**Situation / Task**  
While leading a fraud‑detection team at my last company, we built a binary classifier that had to operate on an imbalanced dataset (1 % fraud). Our business metrics demanded high recall for fraud while keeping false positives low enough not to clog the review queue. I was tasked with selecting the right evaluation curves and explaining them to non‑technical stakeholders.

**Action**  
I compared **ROC** and **PR** curves because each highlights different trade‑offs on skewed data.  
* *ROC* plots TPR vs FPR; its AUC reflects overall ranking ability but can be misleading when FPR is inexpensive (e.g., 1 % of 100k normal cases still equals 1,000 alerts).  
* *PR* plots Precision vs Recall; the area under this curve directly ties to the proportion of true fraud among positive predictions—a metric our analysts could interpret.  

I trained a baseline model, plotted both curves in SageMaker Studio, and used CloudWatch metrics to capture AUC‑ROC (0.92) and Average Precision (0.47). I then tuned thresholds to achieve 85 % recall at 12 % precision, reducing false positives by **35 %** versus the previous rule‑based system.

**Result**  
The new model cut manual review hours from 200 h/month to 130 h/month and increased confirmed fraud capture by **18 %**. I documented the decision logic in a Jupyter notebook on S3, enabling auditability and future model updates.

**Leadership Principles Highlighted**  
*Customer Obsession* – Delivering measurable ROI for analysts.  
*Dive Deep* – Selecting evaluation metrics based on data distribution and business impact.  

**Bar‑raiser notes** – Demonstrated ownership by redefining success metrics, depth through metric selection rationale, quantified impact via concrete percentages, and a learning loop (threshold tuning informed by real‑world feedback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
