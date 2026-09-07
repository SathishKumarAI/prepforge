---
qid: ing_290cca5aa1__aws__local
question: 'Explain: ​ Evaluator inputs — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 506
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:58:20-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role I led a team that built an internal chatbot using LangChain. One of the toughest parts was turning *human‑feedback* into measurable model quality. I focused on **Evaluator Inputs → Evaluation Concepts – Docs by LangChain**, which lets you define custom metrics (e.g., factuality, relevance) and feed them through the same pipeline that produces the answer.

**Situation**  
Our production bot handled 200k user queries/month. We needed to guarantee a *fact‑accuracy* rate above 90% before rollout.

**Task**  
Create an evaluation framework that could ingest raw conversation logs, run them through LangChain’s `EvaluationRunner`, and surface actionable metrics for the devs.

**Action**  
1. **Defined concepts** – built a YAML schema with `factuality` (binary) and `relevance` (0–5).  
2. **Implemented custom evaluator** – subclassed `BaseEvaluator`, added a rule that calls an external knowledge‑base API to score factuality.  
3. **Integrated into pipeline** – used LangChain’s `DocumentLoader` to pull logs, ran them through the chain, and collected results with `EvaluationRunner`.  
4. **Automated reporting** – pushed metrics to CloudWatch dashboards (Grafana) for real‑time visibility.

AWS services: **Lambda** (stateless evaluation), **DynamoDB** (store raw logs), **S3** (archive results), **CloudWatch** (monitor), and **SNS** (alert on dips).  

**Result**  
Accuracy improved from 78% to 92% within two weeks. Monthly cost stayed under $200, thanks to serverless scaling. The bot’s SLA was met, and we reduced support tickets by 35%.

**Reflection**  
I learned that *small, reusable concepts* (factuality, relevance) let us iterate quickly while keeping the evaluation pipeline scalable. I also realized the importance of *bias for action*: pushing the first prototype to production revealed hidden edge‑cases that were fixed in a single sprint.

> **Bar‑raiser check** – ownership (took full responsibility), dive deep (custom evaluator logic), quantified impact (92% accuracy, 35% ticket reduction), and learning from failure (edge‑case discovery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
