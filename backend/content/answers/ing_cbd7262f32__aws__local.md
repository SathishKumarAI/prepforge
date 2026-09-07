---
qid: ing_cbd7262f32__aws__local
question: A team wants to add a third-party MCP server to give their agent a new capability.
  What do you check before approving it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 414
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:41-05:00'
sources: []
---

**Situation / Task**  
When our support‑automation team proposed integrating a third‑party Machine‑Learning Platform (MCP) to power a new chatbot feature, I had to decide whether the added value justified the risk and cost.

**Action**  
I followed *Customer Obsession* and *Ownership*. First, I scoped the functional impact: expected 20 % lift in first‑contact resolution and 15 % reduction in agent toil. Next, I performed a **dive deep** technical audit:

| Check | AWS Service / Tool | Reason |
|-------|-------------------|--------|
| API latency & SLA | CloudWatch + X-Ray | Ensure <200 ms response for real‑time chat |
| Data compliance | AWS Artifact & IAM policies | Verify GDPR/CCPA alignment and encryption at rest |
| Cost modeling | Cost Explorer + TCO calculator | Project $0.05 per inference vs current $0.03 |
| Scalability | Auto Scaling + Lambda @ edge | Handle peak 10k concurrent sessions with <5 % error |
| Failure isolation | VPC endpoints & Circuit Breaker pattern | Prevent cascading outages |

I ran a **sandbox pilot**: 1,000 live sessions over 48 h, measuring latency (mean 180 ms), success rate (99.2%), and cost ($120). The MCP added $0.02 per inference, but improved NPS by 8 points in the pilot.

**Result**  
Approved integration with a phased rollout. After full deployment, first‑contact resolution rose to 27 % (+7 pp) and agent effort dropped 18 %. I documented lessons: tighter SLA contracts and cost caps are essential when onboarding third‑party ML services.

> *Bar‑raiser focus:* clear ownership of metrics, deep technical validation, quantified business impact, and transparent learning from the pilot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
