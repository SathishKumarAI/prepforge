---
qid: ing_77e376cb8e__aws__local
question: 'Explain: Run custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 450
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:23-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to launch *Ai Evals*, an internal platform that lets data scientists run custom evaluators against LLM outputs in production. The goal was to reduce the time from model release to quality feedback by 70% and to surface actionable insights for every new prompt.

**Action (Design)**  
* **Infrastructure** – I architected a serverless pipeline:  
  * S3* stores raw prompt/response pairs;  
  *Lambda* triggers on object creation, pulls the evaluator from an S3‑based registry (LangWatch/Langfuse scripts), and runs it in a Docker image on AWS ECS Fargate.  
  *Step Functions* orchestrates retries, dead‑letter queues, and aggregates metrics into **Amazon DynamoDB** for real‑time dashboards.  
* **Observability** – CloudWatch Logs & Metrics feed an Athena query layer; Grafana visualizes evaluator score trends.  
* **Cost/Scalability** – Fargate’s pay‑per‑second model keeps spend < $0.03 per eval, and the event‑driven design auto‑scales to 10k+ evaluations/day.

**Result**  
Within two months we cut evaluation latency from ~2 h to under **30 s**, reduced engineer effort by **5×**, and increased detection of prompt drift cases by **35%**. The platform is now used in every model release cycle, earning a 4.8/5 internal satisfaction score.

**Learning & Ownership**  
I instituted a “fail‑fast” policy: any evaluator failure triggers an automated rollback to the previous model version. This taught us that rigorous observability beats ad‑hoc debugging and reinforced a culture of ownership across data science and DevOps teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
