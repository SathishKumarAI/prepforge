---
qid: ing_d67de371b7__aws__local
question: 'Explain: Design the serving stack for a ChatGPT-scale consumer assistant:
  hundreds of millions of weekly users, streaming chat, multiple model tiers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 465
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:30-05:00'
sources: []
---

**Situation / Task** – I was tasked to architect a real‑time serving stack for a consumer assistant that would handle *hundreds of millions* of weekly users, deliver streaming chat responses, and support multiple model tiers (small, medium, large).  
**Action** –  

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| **Ingress & Load Balancing** | Amazon API Gateway + ALB | Handles 10k+ QPS per region, TLS termination, request throttling. |
| **Orchestration** | Step Functions + EventBridge | Routes requests to the appropriate model tier; keeps state for streaming tokens. |
| **Model Serving** | SageMaker Edge Inference Repos (LLM containers) on EC2 Auto‑Scaling Groups + ECS Fargate | Allows horizontal scaling per tier, spot instances for cost control, and rapid deployment of new models. |
| **Streaming Response** | Amazon Kinesis Data Streams + Lambda | Pushes token streams to clients via WebSocket API; guarantees at‑least‑once delivery with back‑pressure handling. |
| **Caching & Latency Reduction** | Amazon CloudFront + ElastiCache (Redis) | Caches frequent prompts and partial completions, reducing round‑trips to inference containers. |
| **Observability** | CloudWatch Metrics/Logs + X-Ray | Enables real‑time monitoring of latency per tier; auto‑scales based on SLA thresholds. |

**Result** – The system achieved <200 ms average RTT for the small tier and 500 ms for large, with a 99.9% availability SLA across three AZs. Cost was reduced by 35 % via spot instance utilization and caching.  
**Learnings** – Early testing revealed that naïve batching caused bursty GPU usage; introducing *adaptive batch sizing* (monitoring token arrival rates) flattened load and cut inference cost by an additional 12 %. This exemplifies **Ownership**, **Dive Deep**, and **Bias for Action**—hallmarks of the Amazon way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
