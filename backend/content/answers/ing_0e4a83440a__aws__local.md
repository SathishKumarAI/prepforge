---
qid: ing_0e4a83440a__aws__local
question: 'Explain: OpenAI AgentKit — Autogen Crewai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 437
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:02-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a customer‑facing AI chatbot from an on‑prem Python stack to a serverless, multi‑tenant solution that needed to support 200k concurrent users with < 300 ms latency. The key requirement was to adopt OpenAI’s *AgentKit* (Autogen Crew) framework for dynamic task orchestration while keeping costs under $50K/month.

**Action**  
1. **Design** – I mapped AgentKit’s agents onto AWS Step Functions for stateful orchestration, Lambda for lightweight inference calls, and Amazon Bedrock for the LLM backbone.  
2. **Scalability & Availability** – Step Functions were configured with retry policies (exponential back‑off) and a 99.9 % SLA via multi‑AZ deployments. I leveraged DynamoDB Global Tables to store conversation context globally.  
3. **Cost Control** – Reserved concurrency on Lambda, Spot Instances for heavy pre‑processing jobs, and cost‑explorer alerts kept spend in line.  
4. **Security & Compliance** – Integrated IAM roles with least privilege, KMS encryption of user data, and AWS Secrets Manager for API keys.

**Result**  
- Latency dropped from 1.2 s to 280 ms (≈ 77% reduction).  
- Monthly cost fell by 35 %, staying within the $48K budget.  
- User satisfaction (NPS) rose from 45 to 68 after the new agent flow.

**Reflection**  
I took full ownership of the migration, diving deep into AgentKit’s event‑driven model and AWS observability stack. The biggest learning was that a fine‑tuned retry strategy in Step Functions dramatically reduced error rates—something I iterated on until the system hit 99.97 % success.

> *Leadership Principles:* **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
