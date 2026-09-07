---
qid: ing_727558fa99__aws__local
question: Your fine-tune gained 8 points on your benchmark. How do you know the gain
  is real and not contamination?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 565
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:16-05:00'
sources: []
---

**Situation & Task**  
I fine‑tuned a transformer on our internal dataset and saw an **8‑point lift** over the base model on the GLUE benchmark. The interview asked how I confirm this gain is genuine, not a result of data leakage.

**Action – Dive Deep + Ownership**  

| Step | What I did | AWS services |
|------|------------|--------------|
| 1️⃣ Re‑split data | Created *strict* train/validation/test splits using a deterministic hash on the original sentence IDs; no overlap across sets. | S3 for raw corpora, Glue for ETL |
| 2️⃣ Audit labels | Ran a script that cross‑checked each test sample’s provenance against the training set; flagged any duplicates (0 % found). | Athena queries over metadata |
| 3️⃣ Baseline re‑run | Re‑trained the base model on the same splits, confirming the baseline stayed at **88.5**. | SageMaker Training Jobs |
| 4️⃣ Cross‑validation | Performed 5‑fold CV; all folds showed +8 ± 0.3 points, ruling out random variance. | SageMaker Processing |
| 5️⃣ Feature importance | Applied SHAP to inspect token contributions; no single training example dominated predictions. | SageMaker Studio notebooks |
| 6️⃣ External test | Submitted the model to an independent public leaderboard (GLUE) – still +8.1 points. | API Gateway + Lambda for submission |

**Result – Deliver Results**  
After these checks, I confidently reported a **statistically significant, reproducible 8‑point improvement** with a 95 % confidence interval of ±0.3. Cost: $350 for compute (p4d.xlarge) and $120 for storage/analysis; scalable to 100× the data with minimal extra spend by using Spot instances.

---

### What a bar‑raiser looks for  
- **Ownership**: I took end‑to‑end responsibility, from data hygiene to external validation.  
- **Dive Deep**: Detailed audit scripts, SHAP analysis, and CV all demonstrate depth.  
- **Quantified Impact**: Clear metrics (8 ± 0.3 pts, 95 % CI).  
- **Learning from Failure**: I anticipated contamination risks, built automated checks, and documented lessons for future pipelines.

> *“The model’s improvement isn’t a fluke; it survived rigorous splits, statistical tests, and an external benchmark.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
