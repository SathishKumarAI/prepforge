---
qid: ing_8e29b12609__aws__local
question: What is catastrophic forgetting in fine-tuning, and how do you mitigate
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 433
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:24-05:00'
sources: []
---

**Answer (Amazon Style)**  

**Situation:** While fine‑tuning a multilingual BERT model for our global customer‑support chatbot, I observed that performance on legacy languages dropped by 18 % after only two epochs of new data—classic catastrophic forgetting.

**Task:** Preserve existing language accuracy (>92 % F1) while integrating the new domain data without retraining from scratch.

**Action:**  
1. **Elastic Weight Consolidation (EWC):** Calculated Fisher information on the old dataset and added a quadratic penalty to the loss, keeping critical weights intact.  
2. **Replay Buffer + Reservoir Sampling:** Stored 5 % of old examples in S3; each batch sampled from both new and replay data using SageMaker’s Data Wrangler.  
3. **AWS Step Functions** orchestrated incremental training jobs (≤12 h) with Spot Instances, reducing cost by 35 %.  
4. **Monitoring:** CloudWatch metrics tracked per‑language F1 in real time; alerts triggered if any dropped below 90 %.

**Result:** After deployment, cross‑lingual accuracy stabilized at 93.5 % (up from 74 % pre‑mitigation), and the total training cost fell by $1.2k/month.  

**Leadership Principles Highlighted:**  
- **Customer Obsession & Ownership:** Delivered a reliable multilingual experience.  
- **Dive Deep & Bias for Action:** Diagnosed forgetting, engineered EWC + replay, and iterated quickly.

Bar‑raisers look for quantified impact (18 % → 93.5 %), depth of technical solution (EWC math + AWS tooling), and learning from failure—here I turned a single‑pass fine‑tune into a robust, cost‑efficient pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
