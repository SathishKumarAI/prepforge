---
qid: ing_ae63db6719__aws__local
question: 'Explain: Agentic and Tool Use — Benchmarks And Leaderboards'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 591
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:58-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: At my last role I led the AI‑ops team that had to evaluate new generative agents for our customer‑support chatbot.  
*Task*: Build a reproducible benchmark pipeline that distinguishes **agentic** (self‑directed) models from pure **tool‑use** models, publish results on an internal leaderboard, and integrate the best model into production.  
*Action*: I owned the end‑to‑end stack: defined metrics (task completion rate, hallucination frequency, latency), wrote a data‑driven test harness in Python, and deployed it on **AWS SageMaker Pipelines** for CI/CD. For scalability I used **S3** to store 10 k+ prompt–response pairs, **ECS Fargate** for stateless scoring jobs, and **DynamoDB** for leaderboard storage. I leveraged **Amazon OpenSearch** for fast result aggregation and a **Grafana** dashboard for real‑time monitoring.  
*Result*: The pipeline cut evaluation time from 3 days to 6 hours, enabled us to rank 12 models each sprint, and the top agentic model improved customer satisfaction by **15%** (NPS lift) while reducing hallucinations by **40%**.

---

### Technical / System

| Aspect | Design | AWS Services |
|--------|--------|--------------|
| Benchmarking | Define “agentic” as *goal‑oriented planning* vs. “tool use” as *function calling*. Use a modular test suite with prompt templates and ground‑truth actions. | SageMaker Pipelines, Step Functions |
| Data storage | Raw prompts & gold responses in S3; intermediate scores in DynamoDB. | S3, DynamoDB |
| Compute | Parallel inference on GPU instances via ECS Fargate or SageMaker endpoints. | ECS Fargate, SageMaker |
| Result aggregation | OpenSearch indices per model; Grafana dashboards for real‑time leaderboard. | Amazon OpenSearch, Grafana |
| Cost/Availability | Spot instances + auto‑scaling; S3 lifecycle to archive old data; multi‑AZ DynamoDB. | EC2 Spot, Auto Scaling, Multi-AZ |

---

### Bar‑raiser cues

- **Ownership**: Took full responsibility for the pipeline and its business impact.  
- **Dive Deep**: Quantified hallucination rates, latency, and NPS lift with precise metrics.  
- **Learned from Failure**: Early runs showed noisy results; I added a sanity check step that reduced variance by 30%.  

*Leadership Principles highlighted*: Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
