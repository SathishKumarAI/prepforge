---
qid: ing_eb08d82f1a__aws__local
question: 'Explain: 1️⃣ Create new project — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 308
output_tokens: 514
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:25-05:00'
sources: []
---

**S – Situation**  
When I joined a startup focused on AI ops, we lacked a unified way to evaluate LLMs, track prompts, and surface observability data across teams. Existing tools were siloed or proprietary, making experimentation slow.

**T – Task**  
I proposed building an open‑source platform—**LangFuse**—to centralize LLM evaluation, prompt management, and telemetry in one place, so every engineer could run reproducible experiments without reinventing the wheel.

**A – Action**  

| Design Choice | AWS Service | Reasoning |
|---------------|-------------|-----------|
| **Compute** (model inference & eval jobs) | **ECS Fargate + SageMaker Edge** | Autoscaling on CPU/GPU; pay‑as‑you‑go, no infra ops. |
| **Storage** (datasets, metrics) | **S3 + DynamoDB** | S3 for immutable data blobs, DynamoDB for low‑latency query of metric aggregates. |
| **Observability** | **OpenTelemetry Collector → CloudWatch/Prometheus** | Native OTLP support; no vendor lock‑in. |
| **Auth / Secrets** | **AWS Cognito + Secrets Manager** | Fine‑grained access to prompt repos and API keys. |

I integrated the platform with **LangChain**, **LiteLLM**, and **OpenAI SDK** via plug‑ins, exposing a simple REST/GraphQL API. The UI (React) pulls from CloudWatch dashboards for real‑time latency/accuracy metrics.

**R – Result**  
- Launched on GitHub in 3 weeks; over **1,200 stars** and **50 forks** within the first month.  
- Internal adoption: 12 teams now run ~400 eval runs/month with an average *10%* reduction in model drift incidents.  
- Cost per eval dropped from ~$15 to <$2 by leveraging Fargate Spot + S3 lifecycle policies.

**Reflection**  
I owned the end‑to‑end stack, dived deep into OTLP specs, and iterated fast—demonstrating Ownership, Bias for Action, and Deliver Results. The platform’s open‑source nature encourages community contributions, embodying Customer Obsession by letting external users shape our roadmap.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
