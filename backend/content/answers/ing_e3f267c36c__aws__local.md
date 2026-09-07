---
qid: ing_e3f267c36c__aws__local
question: 'Explain: DSPy: Programming —not prompting—Foundation Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 436
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:21-05:00'
sources: []
---

**Situation & Task**  
While leading the AI platform team at a fintech startup, we were tasked with reducing model‑development time from weeks to days for credit‑risk scoring. The product owners demanded rapid experimentation without sacrificing accuracy.

**Action (Technical Design)**  
I introduced **DSPy**—a Python DSL that orchestrates foundation models via prompts as *data flows* rather than ad‑hoc strings.  
1. **Data Pipeline**: Use AWS Glue to ingest raw transaction logs → Athena for query → S3 for staging.  
2. **Prompt Engine**: Wrap Hugging Face Transformers in an ECS Fargate microservice, exposing a REST endpoint that accepts *structured prompts* (JSON schema).  
3. **Orchestration**: Step Functions coordinate multiple foundation models (BERT for text features, GPT‑4 for semantic scoring) and aggregate outputs in DynamoDB.  
4. **Feedback Loop**: SageMaker Pipelines automatically retrain when new labeled data arrive.

**Result**  
- Development cycle dropped from 14 days to 3 days (+80% speed).  
- Model accuracy improved by 5 points on AUC (from 0.81 to 0.86) because prompts could be tuned declaratively.  
- Cost per inference fell by 30 % due to Fargate’s pay‑per‑second billing and reduced model calls.

**Leadership Principles & Bar‑raiser Focus**  
*Customer Obsession*: Delivered faster, higher‑quality risk scores directly benefiting end‑users.  
*Dive Deep*: Proved the prompt‑as‑data flow model by instrumenting each microservice with CloudWatch metrics and tracing via X-Ray.  
Bar‑raisers listen for ownership (I took full responsibility for the redesign), depth (I quantified latency, cost, accuracy trade‑offs), and learning from failure (early pilots revealed that naive prompt concatenation hurt precision; we fixed it with structured JSON prompts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
