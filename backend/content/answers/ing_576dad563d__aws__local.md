---
qid: ing_576dad563d__aws__local
question: How would you use synthetic data to build or extend an eval set, and what
  are the failure modes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 500
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:43:24-05:00'
sources: []
---

**Situation / Task**  
I was leading a cross‑functional team tasked with improving our fraud‑detection model’s recall on rare events (e.g., account takeover). The public test set contained only 2 % of such cases, so we risked overfitting to the majority class.

**Action**  
*Customer Obsession & Dive Deep*: I proposed generating synthetic “attack” instances using a conditional GAN trained on historical fraud logs.  
1. **Requirements** – Preserve feature correlations (e.g., device fingerprint → geolocation) and maintain realistic label noise.  
2. **Design** –  
   * **Data pipeline**: S3 → Lambda → SageMaker Ground Truth for labeling; generated data stored in DynamoDB for quick sampling.  
   * **Model training**: Augment the original dataset with a 1:1 ratio of synthetic to real fraud cases, then fine‑tune using XGBoost on an EC2 Spot fleet (cost ≈ $0.02/hr).  
3. **Evaluation** – Build an extended eval set by mixing 30 % synthetic and 70 % real samples; validate against a held‑out real fraud test set.  
4. **Failure modes & mitigation** –  
   * *Mode collapse*: monitored via Fréchet Inception Distance on feature embeddings; retrained GAN if >10 % drift.  
   * *Concept drift*: scheduled quarterly re‑generation with the latest logs.  
   * *Label leakage*: added a “synthetic flag” and ensured downstream models ignored it.

**Result**  
Recall improved from **41 % → 58 %** on rare events while precision stayed >92 %. Cost per inference dropped by 18 % due to reduced false positives. I documented lessons: synthetic data must be validated continuously; otherwise, we risk reinforcing biases.

---

### Bar‑raiser signals  
* Ownership: took end‑to‑end control from GAN training to deployment.  
* Dive Deep: quantified GAN quality and monitored drift metrics.  
* Quantified Impact: 17 % absolute recall lift, $0.02/hr cost savings.  
* Learning: iterated on failure modes; now we have a continuous synthetic‑data pipeline that adapts to concept drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
