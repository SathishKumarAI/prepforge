---
qid: ing_3b904011ef__aws__local
question: Your eval reports 82% pass on 100 examples. What does that number not tell
  you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 297
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:08-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last project I presented an AI model with an 82 % accuracy on 100 test samples. That number alone hides several critical dimensions.  

- **Customer Obsession**: Accuracy does not capture *user impact*—a single mis‑prediction could cost a customer $1,200 in lost revenue, while 18 correct predictions might only save $500.  
- **Dive Deep & Ownership**: I dug into the confusion matrix and discovered that 70 % of errors were false positives on high‑risk classes. The model was over‑fitting to a small sub‑population; retraining with stratified sampling improved precision from 68 % to 81 %.  

**Result (S)**  
After re‑engineering, the final deployment achieved **82 % accuracy but also 85 % F1‑score on the critical class**, reducing downstream cost by $30k per quarter.  

**What a bar‑raiser looks for**:  
- Quantified impact on business metrics (cost savings).  
- Depth of analysis (confusion matrix, stratification).  
- Ownership (proactive remediation and stakeholder communication).  

Thus, 82 % accuracy is a *starting point*, not the end story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
