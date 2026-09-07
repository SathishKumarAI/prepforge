---
qid: ing_ccda025723__aws__local
question: 'Q: What is the risk of "Model Collapse" when training on synthetic data?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 440
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:02-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent project to bootstrap a fraud‑detection model, I was asked to evaluate the risk of *model collapse* when training on synthetic data.  
**Situation:** Our data science team had limited real transaction records due to privacy constraints. We generated 10 M synthetic samples using a GAN and trained an XGBoost classifier.  

**Task:** Quantify the collapse risk and design a safe‑guard pipeline.  

**Action:**  
1. **Validate distribution alignment** – I computed KS‑statistics for key features (amount, device type) between real (200k) and synthetic data; any statistic >0.15 flagged drift.  
2. **Cross‑validation with a hold‑out real subset** – 5‑fold CV on the 200k real set yielded an AUC of 0.93 vs 0.82 when training only on synthetic, indicating overfitting to synthetic idiosyncrasies.  
3. **Hybrid training strategy** – I mixed 70 % synthetic with 30 % real data, then applied *early stopping* based on the hold‑out AUC.  
4. **Monitoring in production** – Deployed the model via SageMaker endpoints with CloudWatch metrics (precision@k, drift alerts).  

**Result:** The hybrid model achieved a 15 pp increase in fraud detection rate while keeping false positives down by 8 pp, and we avoided a catastrophic collapse that would have cost ~$2M in missed revenue.  

**Leadership Principles:**  
- **Customer Obsession** – ensured accurate fraud signals for end‑users.  
- **Ownership & Dive Deep** – rigorously validated synthetic data and quantified impact.  

*Bar‑raiser note:* I highlighted ownership by owning the validation pipeline, depth through statistical checks, quantified ROI (15 pp lift), and learning from the initial synthetic‑only failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
