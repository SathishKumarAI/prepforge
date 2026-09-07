---
qid: ing_78de0ee687__aws__local
question: 'Explain: Now the hard one: an agent that calls tools over multiple steps.
  Test it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 410
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:41-05:00'
sources: []
---

**Situation & Task**  
I led a project at my previous company to build an autonomous “tool‑calling” agent that could orchestrate multiple third‑party APIs (e.g., weather, finance, booking) over several conversational turns. The goal was to reduce manual handoffs and cut customer support time by 30 %.  

**Action – Technical Design**  
- **Core Engine:** AWS Lambda + Step Functions for stateful orchestration; each step represents a tool invocation.  
- **Tool Adapter Layer:** Containerized micro‑services on ECS Fargate exposing standard REST endpoints, enabling rapid onboarding of new tools.  
- **LLM Integration:** Amazon Bedrock (Claude/PaLM) to generate natural language intents and parse responses.  
- **Observability:** CloudWatch Logs + X-Ray for end‑to‑end tracing; metrics stored in DynamoDB for SLA analysis.  
- **Scalability & Cost:** Lambda concurrency auto‑scales, while Step Functions limit cost by keeping state in durable S3/State Machine execution history (~$0.025 per 1 M steps).  

**Result**  
Within two weeks of launch, the agent handled ~12k requests/day with an average latency of 350 ms and achieved a 28 % reduction in ticket volume—meeting our target. Failure analysis showed a single mis‑parsed intent caused a cascade; we added a confidence threshold and retrained the LLM, boosting accuracy from 82 % to 94 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results:** Directly cut support time, improving user satisfaction scores.  
- **Dive Deep & Ownership:** Built end‑to‑end observability, identified bottlenecks, and iterated quickly—demonstrating true ownership of the product lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
