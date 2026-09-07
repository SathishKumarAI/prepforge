---
qid: ing_c3f80314ed__aws__local
question: 'Explain: Plugins and Planners — Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 432
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:03-05:00'
sources: []
---

**Situation (Customer Obsession)**  
I was asked by a SaaS startup to accelerate their AI‑driven customer support bot. They needed the bot to ingest third‑party knowledge bases and plan multi‑step actions without redeploying code.

**Task**  
Build an extensible, low‑latency architecture that lets developers plug in new data sources (plugins) and let the model orchestrate complex workflows (planners).

**Action**  
I chose **Semantic Kernel**, a framework that separates *semantic kernels* (core LLM inference) from *skills* (plugins).  
1. **Plugins** – each skill is a containerized Lambda function exposing an API Gateway endpoint; we store them in S3 as Docker images and invoke via EventBridge for event‑driven scaling.  
2. **Planners** – I wired the kernel to the **Amazon Bedrock** inference endpoint, using the *Planner* skill that chains LLM prompts with a lightweight decision tree stored in DynamoDB.  
3. For observability, CloudWatch metrics tracked invocation latency (≤ 200 ms avg) and success rate (> 99.5%).  
4. Cost control: Lambda concurrency throttled to 1000 requests/second; Bedrock paid per token (~$0.003/token).  
5. Security: IAM roles scoped to least privilege, encryption at rest in KMS.

**Result (Deliver Results)**  
Within two weeks the bot processed 10 k tickets/day with a 35 % reduction in manual escalation time and a 22 % increase in first‑contact resolution.  

**Bar‑raiser cues** – ownership of end‑to‑end pipeline, deep dive into Lambda scaling vs. Bedrock latency trade‑offs, quantified impact on support metrics, and iterative learning from failed skill deployments (rolled back to previous stable version after profiling CPU spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
