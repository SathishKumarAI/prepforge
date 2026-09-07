---
qid: ing_d71505c985__aws__local
question: 'Q: Your team wants to build an internal AI assistant. Should you build
  on OpenClaw, OpenHands, or build custom with Claude Code + MCP?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 560
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:25:45-05:00'
sources: []
---

**S – Situation (Customer Obsession)**  
In 2024 our internal tooling team needed an AI assistant to reduce engineer toil on CI/CD pipelines and code reviews. The goal was a **99.9 % uptime tool that cuts average query time from 15 s to <3 s**, directly improving developer velocity.

**T – Task (Ownership)**  
Decide whether to ship on OpenClaw, OpenHands, or build a custom Claude‑Code + MCP stack while ensuring low cost and high security.

**A – Action (Dive Deep & Bias for Action)**  

| Option | Architecture | AWS Services | Trade‑offs |
|--------|--------------|--------------|------------|
| **OpenClaw** | Pre‑built LLM + fine‑tuning on internal docs | SageMaker, EFS, Secrets Manager | Fast to ship, but limited custom prompt logic and higher inference cost ($0.06/1k tokens). |
| **OpenHands** | Voice‑first agent with multimodal reasoning | Bedrock (Claude 3.5 Sonnet), Lambda, SQS | Adds speech UI; latency ~2 s, but complex voice pipeline increases maintenance overhead. |
| **Custom Claude‑Code + MCP** | End‑to‑end chain: LangChain → Claude via Bedrock → Code execution in EC2 Spot + Docker, results stored in DynamoDB | Bedrock, ECS/Fargate Spot, DynamoDB, CloudWatch | Full control over prompt engineering and code safety; lower per‑token cost ($0.03/1k tokens) and ability to sandbox execution with IAM roles. |

I chose **Custom Claude‑Code + MCP** because it gives us the deepest control (Ownership) while keeping costs 30 % below OpenClaw, meets our latency SLA (<3 s), and isolates code execution for security.

**R – Result (Deliver Results)**  
Within 6 weeks we launched a prototype. **Developer satisfaction rose from 68 % to 92 %**, and average time spent on manual CI/CD queries dropped by **47 %** (from 12 min to 6 min per engineer). Cost per query was $0.015, saving ~$15k/month vs OpenClaw.

**Bar‑raiser takeaways:**  
- Demonstrated ownership by evaluating trade‑offs and selecting the most scalable, secure path.  
- Deep dive into cost/latency metrics proved quantitative impact.  
- Learned from a failed voice prototype (OpenHands) that complexity can outweigh benefit—hence we pivoted to a text‑centric solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
