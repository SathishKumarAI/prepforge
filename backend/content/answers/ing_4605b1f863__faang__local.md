---
qid: ing_4605b1f863__faang__local
question: 'Explain: Change Types — Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 444
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:26:43-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of the three classic “Change Types”—*Continuous Integration (CI)*, *Continuous Delivery (CD)*, and *Continuous Deployment (CD)*—as they apply to AI pipelines. I’ll assume we’re dealing with model training, evaluation, packaging, and serving in production.

**Approach**  
1. Define each stage in the AI lifecycle.  
2. Show how automation flows from code commits → training jobs → artifact registry → staging → prod.  
3. Highlight tooling (GitHub Actions, Jenkins, MLflow, Argo Workflows).  

**Depth**  
- **CI**: Every commit triggers linting, unit tests on preprocessing code, and a lightweight “train‑on‑subset” job to catch data or feature regressions early.  
- **CD**: Once CI passes, the pipeline builds a Docker image with the trained model (stored in an artifact store like S3/MLflow), runs full evaluation metrics, and promotes the image to a staging environment where A/B tests happen.  
- **Continuous Deployment**: If staging metrics meet thresholds, the image is automatically rolled out to production via canary releases; rollback hooks are attached for drift or performance drop.  

*Complexity*: CI is O(1) per commit; CD introduces O(N) training time but amortized across batches; deployment is near‑instant if containerized.

**Edge Cases**  
- Data drift: add data validation steps in CI.  
- Model size exceeding resource limits: gate CI with a size check.  
- Non‑deterministic training runs: seed control and versioned datasets.

**Optimize & Communicate**  
To improve reliability, adopt *model registry* for lineage tracking and *feature store* versioning. Narrate the flow as a “pipeline loop” that guarantees every change is validated before touching users—exactly what FAANG teams value in production‑grade AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
