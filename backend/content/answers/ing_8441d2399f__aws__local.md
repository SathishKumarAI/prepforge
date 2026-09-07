---
qid: ing_8441d2399f__aws__local
question: 'Q: How do you prevent a model from "unlearning" general capabilities during
  fine-tuning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 525
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:11-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a fine‑tuning pipeline for an LLM that served our customer support bot. After 3 epochs the model started to “forget” its general language skills, hurting overall accuracy by ~8 %. The business required a 95 % retention of baseline performance while adding domain‑specific knowledge.

**Action (AWS‑centric design)**  
1. **Curriculum & Regularization** – I introduced a two‑stage curriculum: first train on a mixed dataset (domain + generic) with a *soft‑label* loss, then fine‑tune only the last 10 % of layers using Elastic Weight Consolidation (EWC).  
2. **AWS Services** –  
   - **SageMaker Training Jobs** with `--early-stopping-patience=3` to halt overfitting.  
   - **S3 + SageMaker Feature Store** for versioned checkpoints; we keep the best‑performing checkpoint and roll back automatically if validation loss rises >2 %.  
   - **EFS** for shared model artifacts across distributed workers, reducing I/O bottlenecks by 30 %.  
3. **Monitoring & Rollout** – Real‑time metrics (BLEU, perplexity) fed into CloudWatch dashboards; a Lambda function triggers a Canary deployment only if all KPIs stay within ±1 % of baseline.

**Result**  
Post‑deployment we observed a *0.6 %* drop in general accuracy—well under the 5 % tolerance—and a 12 % lift in domain‑specific intent recognition (from 82 % to 94 %). The pipeline is now fully automated, costing <$200/month and running in <4 hrs per fine‑tune.

**Reflection**  
I owned the end‑to‑end workflow, dove deep into loss surfaces to select EWC, quantified impact with clear metrics, and learned that a hybrid curriculum + checkpoint strategy consistently preserves general knowledge. This aligns with *Customer Obsession* (high‑quality responses) and *Ownership* (full accountability for model fidelity).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
