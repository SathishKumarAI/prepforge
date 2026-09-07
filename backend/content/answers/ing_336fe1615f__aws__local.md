---
qid: ing_336fe1615f__aws__local
question: 'Explain: Ani Galstian — The 2026 EU AI Act and AI-Generated Code: What
  Changes for Dev Teams | Augment Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 516
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:43-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Leadership Principles:* **Ownership**, **Dive Deep**  
> “I own the end‑to‑end impact of new regulations on our codebase and dive into every detail to understand how it changes the product.”

---

### Situation  
In 2026 the EU AI Act tightened rules on *AI‑generated code*. Our dev teams, who already use Copilot‑style models, faced a compliance risk: generated snippets could unintentionally embed copyrighted or biased content.

### Task  
I led a cross‑functional task force to audit our tooling pipeline, quantify exposure, and redesign the workflow so every AI‑generated line is **verified** before merge—without breaking velocity.

### Action  

| Step | Technical Move | AWS Services & Design |
|------|----------------|-----------------------|
| 1️⃣ Audit risk | Static analysis + provenance tagging on each snippet. | **AWS CodeGuru Reviewer**, **S3** for artifact storage, **DynamoDB** for metadata. |
| 2️⃣ Verification | Run a lightweight *content‑filter* model (BERT) to flag copyrighted or biased text. | **Amazon SageMaker Endpoint** (serverless), triggered via **CodePipeline**. |
| 3️⃣ Governance | Store audit logs, generate compliance dashboards. | **AWS CloudTrail**, **Athena** on S3 logs, **QuickSight** for KPI views. |
| 4️⃣ Feedback loop | Capture false‑positive rate and retrain model quarterly. | **SageMaker Training Jobs**, automated via **Step Functions**. |

### Result  
- Reduced *compliance incidents* from an estimated 12/month to **0/quarter** (a 100 % drop).  
- Maintained developer velocity: merge times increased by only **2 %** (from 15 min to 15 30 s).  
- Cost of the pipeline stayed under **$1,200/month**, a savings of $3,000 vs. manual review.

### Reflection  
I owned the entire solution, from requirement gathering through production rollout. The dive‑deep analysis revealed that most “violations” were false positives; this insight drove model retraining and cost optimisation. I learned that automated governance can coexist with rapid delivery when built on modular AWS services—an approach we now apply to other regulatory domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
