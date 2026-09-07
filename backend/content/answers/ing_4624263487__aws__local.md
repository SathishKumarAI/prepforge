---
qid: ing_4624263487__aws__local
question: 'Explain: Case Study: Enterprise MCP Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 464
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:04:19-05:00'
sources: []
---

**Situation (S)**  
In 2023 I led a cross‑functional team at an enterprise SaaS firm that needed a *Knowledge Agent* to surface Machine‑Learning‑Platform (MCP) docs, run quick inference tests, and auto‑grade user queries—so customers could get instant answers without opening the help center.

**Task (T)**  
Build a conversational agent that reduces support tickets by 30 % and speeds up knowledge discovery from 12 h to < 1 min per query.

**Action (A)**  
*Customer Obsession & Ownership*: I owned the product roadmap, interviewed 200+ users for pain points.  
*Dive Deep & Invent & Simplify*:  
- **Data layer** – Stored MCP schema, FAQs, and code snippets in an encrypted DynamoDB table with a Global Secondary Index on tags.  
- **Inference engine** – Deployed an AWS Lambda function (Python 3.10) that calls SageMaker Real‑Time Endpoint for intent classification (≈ $0.05 per inference).  
- **Chat interface** – Built with Amazon Lex V2, integrated into the web portal via API Gateway (TLS 1.2).  
- **Observability** – CloudWatch metrics + X-Ray traces to hit 99.9 % latency SLA; automated scaling via Lambda’s concurrency limits.  
*Bias for Action*: We ran a two‑week A/B test; the agent cut support tickets by **32 %** and reduced average resolution time from 10 min to 2 min.

**Result (R)**  
- 30 % ticket reduction → $120k/year in ops savings.  
- 99.7 % uptime, < $3/month cost.  
- Learned that caching intent predictions with ElastiCache Redis lowered inference latency by 15 %, a tweak I documented for future roll‑outs.

**Bar‑raiser cues** – Demonstrated ownership (full stack), deep technical dive (service choices & trade‑offs), quantified impact, and iterative learning from early latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
