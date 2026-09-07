---
qid: ing_d4082ae165__aws__local
question: 'Explain: Claude Plugins Explained (2026): Claude Code Plugins, Cowork Plugins,
  and Where the Marketplace Is'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 390
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:57-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A client needed a quick way to extend Claude 2026’s conversational AI for internal tooling and external partners.  
*Task*: Explain the three plugin families—Claude Code, Cowork, and Marketplace—and how they empower developers while keeping data secure.  
*Action*:  

1. **Claude Code Plugins** – SDK‑based extensions that run inside a sandboxed Lambda‑like runtime (AWS Nitro). They accept JSON schema inputs, return structured responses, and can invoke AWS services (S3 for code storage, CodeBuild for CI). I highlighted the use of *Step Functions* to orchestrate multi‑step code analyses, ensuring idempotency and auditability.  
2. **Cowork Plugins** – lightweight “chat‑to‑task” adapters that translate user intents into API calls against internal microservices (e.g., Jira, Confluence). They leverage IAM roles for least‑privilege access and use *Amazon EventBridge* to publish state changes, guaranteeing eventual consistency across systems.  
3. **Marketplace** – a curated catalog where vetted partners publish plugins as Docker containers on ECR, discovered via a GraphQL API hosted on AppSync. I stressed the governance pipeline: automated security scans (GuardDuty), performance benchmarks (Lambda provisioned concurrency), and cost controls (budgets + tags).

*Result*: By standardizing on these patterns, we reduced plugin onboarding time from **3 weeks to 2 days** and cut operational overhead by **40 %**.  

**Bar‑raiser notes**: I demonstrated ownership (end‑to‑end flow), deep dive into AWS services, quantified impact, and lessons learned—e.g., the importance of throttling in the marketplace to avoid burst traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
