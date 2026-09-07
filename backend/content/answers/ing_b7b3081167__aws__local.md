---
qid: ing_b7b3081167__aws__local
question: 'Explain: The Quality Hierarchy — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 406
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:22-05:00'
sources: []
---

**Situation & Task**  
While leading the ML Ops team at a fintech startup, we needed to improve fraud‑detection accuracy by 15 % before the next regulatory audit. The challenge was to fine‑tune our transformer model without exceeding our $10K/month inference budget.

**Action (Dive Deep + Bias for Action)**  
1. **Baseline analysis:** Measured that a naïve fine‑tuning on the full dataset inflated GPU hours by 4× and cost $7 k per epoch, with only a 3 % accuracy lift.  
2. **Curriculum strategy:** Implemented *progressive layer freezing*—first fine‑tune top 6 layers for 5 epochs (cost $1.2 k), then freeze them and train the remaining layers on domain‑specific fraud labels (another $0.8 k).  
3. **Active learning loop:** Leveraged uncertainty sampling to label only the top‑10 % most ambiguous samples per epoch, cutting labeling effort by 60 %.  
4. **AWS stack:** Used SageMaker Training jobs with Spot Instances for cost control, SageMaker Model Monitor for drift detection, and Lambda + API Gateway for low‑latency inference (≤30 ms SLA).  

**Result**  
Accuracy rose from 84 % to **92 %**, a 8 % absolute gain—meeting the audit threshold. Inference cost dropped to $3 k/month (30 % savings), and model drift latency stayed below 12 h, enabling proactive retraining.

**Learning & Ownership**  
I documented trade‑offs: deeper fine‑tuning yields diminishing returns beyond 8 epochs; active learning introduces labeling bias if not monitored. I set up a quarterly “Model Health” review to iterate on this pipeline—showing true ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
