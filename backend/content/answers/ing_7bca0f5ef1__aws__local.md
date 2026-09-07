---
qid: ing_7bca0f5ef1__aws__local
question: 'Explain: Create prompt — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 530
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:20-05:00'
sources: []
---

**Situation / Task**

I was asked to build a “complete guide” for evaluating prompts in an AI‑based product that uses LangChain, LangWatch and LangFuse for monitoring. The goal was to give data scientists a repeatable workflow that reduced evaluation time by 70 % while keeping accuracy above 95 %.

**Action**

1. **Ownership & Bias for Action** – I scoped the project as a single sprint (2 weeks) and owned the end‑to‑end pipeline.  
2. **Dive Deep into Requirements** – I mapped out the data flow: prompt → LangChain executor → LangWatch metrics → LangFuse analytics → final report.  
3. **Design & AWS Services**  
   - *Amazon SageMaker* for running inference on GPU instances (p3.xlarge).  
   - *AWS Step Functions* to orchestrate the stages and retry logic.  
   - *Amazon DynamoDB* to store prompt metadata and evaluation results (high‑write throughput, single‑digit ms latency).  
   - *Amazon CloudWatch & X-Ray* for observability; logs are forwarded to **LangFuse** via Lambda.  
   - *AWS Glue* schedules nightly re‑evaluation jobs, triggering a **Lambda** that pulls new prompts from S3.  
4. **Scalability / Availability** – The Step Function state machine uses parallel branches (10 concurrent workers) and is backed by an auto‑scaling SageMaker endpoint to handle peak loads.  
5. **Cost & Trade‑offs** – By using spot instances for SageMaker (50 % cheaper) and batching requests in 500‑prompt groups, we cut inference cost from $0.30/prompt to $0.12/prompt. The trade‑off was a slightly higher cold‑start latency (~2 s), acceptable for nightly runs.

**Result**

- Evaluation time dropped from **8 hours → 2 hours** (70 % reduction).  
- Accuracy of prompt selection improved from **88 % to 95 %** due to automated metrics.  
- Operational cost per month decreased by **$1,200** (≈30 %).  

**Reflection**

I learned that coupling LangWatch’s real‑time monitoring with LangFuse’s analytics streamlines debugging; next time I’ll add a CI/CD pipeline in CodePipeline to auto‑deploy updated evaluation scripts.

> *Leadership Principles*: Ownership, Dive Deep, Bias for Action, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
