---
qid: ing_1ede860bbf__star__local
question: About 10% of your training labels are wrong. What happens, and what do you
  do about it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 328
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:31:11-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a medical image classifier for detecting early-stage diabetic retinopathy. The dataset was scraped from several hospital archives and annotated by junior technicians. During an internal audit I found that roughly 10 % of the labels were incorrect—patients marked as healthy when they had subtle lesions, or vice versa.

**Task:**  
I needed to quantify how much this noise was hurting performance, clean the data without blowing up costs, and get the model back into production with a reliable accuracy metric.

**Action:**  
First, I ran a small cross‑validation experiment using a robust loss function (label smoothing) to gauge sensitivity. Then I implemented an active learning loop: the current model flagged the most uncertain samples; we had them re‑reviewed by a senior ophthalmologist on a review board. For scalability, I wrote a lightweight annotation tool that highlighted image patches where the model disagreed with the label, reducing human effort by 35 %. Finally, I retrained the network using a weighted loss that down‑weighted low‑confidence predictions and logged every change in the data pipeline for reproducibility.

**Result:**  
After cleaning ~10 % of the labels, validation accuracy jumped from 86 % to 94 %, and the false‑negative rate dropped by 60 %. I learned that early detection of label noise can be automated with active learning, and that combining human expertise with smart loss functions yields a more robust model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
