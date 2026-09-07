---
qid: ing_600d850056__faang__local
question: 'Explain: Rules and constraints — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 602
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:27:30-05:00'
sources: []
---

**Topic:** AI Coding Workflow – Rules & Constraints (Neo Kim & Louis‑François Bouchard)  
**Length:** ~190 words  

---

## 1️⃣ Clarify  
We’re asked to explain the *rules* and *constraints* that govern an end‑to‑end AI development pipeline as defined by Neo Kim and Louis‑François Bouchard. Assume the audience knows basic ML, but not their specific framework.

### Key assumptions to confirm
- Target is a production‑grade system (not research prototype).  
- Stakeholders value reproducibility, compliance, and cost control.  

---

## 2️⃣ Approach  
1. **Identify the workflow stages**: Data → Feature Engineering → Model Training → Evaluation → Deployment → Monitoring.  
2. **Map each rule/constraint to a stage**.  
3. **Highlight trade‑offs** (e.g., speed vs. auditability).  

---

## 3️⃣ Depth (Core Answer)  

| Stage | Rule / Constraint | Rationale |
|-------|-------------------|-----------|
| **Data** | *Immutable, versioned storage* | Prevents data drift; enables rollback. |
| | *Metadata‑rich lineage* | Required for regulatory audits. |
| **Feature Engineering** | *Feature registry & schema enforcement* | Guarantees consistency between training and serving. |
| **Model Training** | *Reproducible experiments (Docker/conda, seed control)* | Enables peer review and debugging. |
| | *Compute‑budget limits per run* | Controls cloud spend and environmental impact. |
| **Evaluation** | *Automated unit & integration tests + A/B thresholds* | Detects regression before promotion. |
| **Deployment** | *Canary rollout with rollback hooks* | Minimizes user impact. |
| | *Model size & latency caps* | Meets edge‑device constraints. |
| **Monitoring** | *Real‑time drift detection + alerting* | Maintains performance and compliance. |
| | *Explainability score threshold* | Satisfies governance mandates. |

---

## 4️⃣ Edge Cases  
- Sudden data schema changes → triggers auto‑schema migration or manual review.  
- Model overfitting detected in production → automatic retraining trigger.  

---

## 5️⃣ Optimize & Communicate  
**Improvements:** Introduce *policy‑as‑code* to enforce constraints automatically; use *GitOps* for model versioning.  
When presenting, narrate the pipeline as a **“guarded corridor”**—each rule is a checkpoint ensuring safety before the next stage. Emphasize that these constraints are not bureaucratic but safeguards that translate into faster, more reliable AI delivery at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
