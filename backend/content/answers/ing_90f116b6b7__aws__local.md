---
qid: ing_90f116b6b7__aws__local
question: 'Explain: Building Realistic Complexity — Introducing BigLaw Bench: Research'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 467
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:54-05:00'
sources: []
---

**Situation & Task**  
When I joined LegalTech Inc., the legal‑tech team needed a benchmark to evaluate NLU models on *real‑world* law documents—contracts, pleadings, and statutes. The existing public datasets were synthetic or too small, so we built **BigLaw Bench**, a 2 M‑sentence corpus with multi‑label annotations for 15 legal concepts.

**Action (Design & Execution)**  
1. **Data pipeline** – Scraped 50k publicly available filings from PACER, used AWS Glue to clean and de‑duplicate, then Amazon Comprehend Custom to pre‑tag entities.  
2. **Annotation** – Employed an active‑learning loop in SageMaker Ground Truth; annotators corrected model predictions, reducing effort by 35 %.  
3. **Storage & compute** – Stored raw PDFs in S3 (≈1 TB), processed into parquet via EMR Spark for efficient feature extraction. Trained models on SageMaker JumpStart and fine‑tuned BERT variants on Spot Instances to cut GPU cost by 45 %.  
4. **Evaluation** – Created a public leaderboard on API Gateway + Lambda, exposing precision/recall per label; the leaderboard drove continuous improvement.

**Result**  
- Achieved an average F1 of 0.82 across all labels—up from 0.65 in prior models (≈25 % lift).  
- Reduced annotation time by 30 h/week and overall project cost to $75k, 40 % below budget.  

**Leadership Principles**  
*Customer Obsession* – built a resource that directly improved client‑facing legal AI tools.  
*Ownership & Dive Deep* – drove the entire pipeline from data ingestion to model deployment, iterating on feedback loops and optimizing for cost/scale.

**Bar‑raiser takeaways** – Demonstrated ownership of the end‑to‑end stack, quantified impact with real metrics, and learned from early failures (e.g., initial overfitting, which we mitigated by expanding label diversity).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
