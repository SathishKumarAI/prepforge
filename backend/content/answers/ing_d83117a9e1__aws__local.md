---
qid: ing_d83117a9e1__aws__local
question: 'Explain: Tool Use and MCP'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 526
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:24-05:00'
sources: []
---

**Tool Use & MCP – How I Drive AI Value**

*Leadership Principles:* **Ownership** + **Dive Deep**  
*Scenario (S):* At my last company we had a growing data‑science team that struggled to reuse models across products.  
*Task (T):* Build an internal “Model Catalog Platform” (MCP) and standardize tool usage so every engineer could spin up production models in minutes.  
*Action (A):*  

1. **Tool Selection** – Evaluated SageMaker, Lambda, Step Functions, DynamoDB, and Glue. Picked SageMaker for training/hosting, Glue for ETL, and DynamoDB for metadata storage because of low latency and auto‑scaling.  
2. **MCP Design** – Created a REST API (API Gateway + Lambda) that exposes model metadata (schema, version, performance metrics). Models are stored as Docker images in ECR; inference endpoints use SageMaker’s “Multi‑Model Endpoint” to keep costs < $0.30/hr per endpoint.  
3. **Governance** – Implemented automated unit tests and a CI/CD pipeline (CodeBuild + CodePipeline) that runs on every push, ensuring 95 % test coverage before models reach production.  

*Result (R):* Within six months:  

- Model reuse jumped from **0 % to 68 %**, cutting duplicate training time by **35 hrs/month** per engineer.  
- Endpoint latency dropped from 1.2 s to 0.4 s, improving customer satisfaction scores (+12 pts).  
- Operational cost fell 20 % due to shared endpoints and auto‑scaling.

*Learning:* The first failure was a “one‑size‑fits‑all” endpoint that caused cold‑start spikes; I added warm‑up logic via CloudWatch alarms—now 99.9 % uptime.

**Takeaway:** By owning the MCP architecture, diving deep into AWS services, and quantifying impact, we transformed ad‑hoc model work into a repeatable, cost‑effective AI workflow that delivers real business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
