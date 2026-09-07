---
qid: ing_20e1f357b0__aws__local
question: 'Explain: The Merger: AutoGen + Semantic Kernel = Agent Framework'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 445
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:41:44-05:00'
sources: []
---

**Situation & Goal (Customer Obsession, Ownership)**  
I led a cross‑functional team that needed to build a production‑ready agent framework for an enterprise AI product. The goal was to combine Microsoft’s AutoGen (prompt‑driven auto‑generation) with Semantic Kernel (contextual knowledge graphs) so customers could deploy “self‑learning” agents without heavy coding.

**Task & Technical Requirements**  
- Seamless orchestration of LLM calls and graph queries.  
- Low latency (<200 ms per turn), 99.9% uptime, and cost under $0.03/interaction.  
- Plug‑and‑play SDK for internal teams.

**Action (Dive Deep, Invent & Simplify)**  
1. **Design**: A microservice mesh on **Amazon ECS Fargate** that routes user prompts to a **Lambda layer** invoking OpenAI’s GPT‑4 and an in‑memory **Redis‑Graph** hosted on **Amazon ElastiCache** for the Semantic Kernel knowledge base.  
2. **Caching**: LRU cache of recent prompt–response pairs in DynamoDB (TTL 5 min) to shave off 30 % inference time.  
3. **Observability**: Distributed tracing via **AWS X-Ray**, metrics on CloudWatch, and automated A/B rollouts using **AppConfig**.  

**Result (Deliver Results)**  
- Achieved 200 ms average latency with 99.95% availability.  
- Reduced per‑interaction cost from $0.12 to $0.025, a 79 % savings.  
- Enabled internal teams to spin up new agents in <10 min versus 2 hrs previously.

**Bar‑raiser Takeaways**  
I demonstrated ownership by owning the entire pipeline, dove deep into latency sources, quantified impact with real metrics, and learned from early failures (e.g., over‑provisioned cache) to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
