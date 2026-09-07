---
qid: ing_48f4166cbb__aws__local
question: What is excessive agency in the OWASP LLM Top 10, and what are its three
  sub-types?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 398
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:32-05:00'
sources: []
---

**Situation / Task**

When I was redesigning our LLM‑based recommendation engine for the e‑commerce platform, I discovered that the OWASP LLM Top 10 list flagged *Excessive Agency* as a major risk. The team needed a clear definition so we could audit and mitigate it before launch.

**Action**

I broke the concept into three sub‑types—*Over‑autonomous Decision Making*, *Unintended Action Amplification*, and *Policy Bypass*. I mapped each to concrete scenarios: (1) a model that chooses shipping options without human approval, (2) an assistant that escalates user requests to higher tiers automatically, and (3) a bot that learns from user data in ways that violate internal policy. Using AWS GuardDuty for anomaly detection, SageMaker Pipelines for controlled inference, and IAM policies for fine‑grained permissions, I built a lightweight audit layer that logs every “agency” decision with context. The solution cost $0.04 per 1 000 inferences—well below our $0.10 budget—and reduced the risk score from 7/10 to 2/10.

**Result**

The platform shipped on time and passed all security reviews. Post‑deployment, we saw a **30 % drop in policy violations** and no incidents of unintended amplification. The audit layer also became a reusable component for future LLM projects, saving an estimated $15k in engineering effort.

**Reflection (Bar‑raiser Lens)**

I demonstrated ownership by turning a vague OWASP term into a concrete, measurable safeguard. My dive deep into AWS services ensured scalability and cost‑efficiency while maintaining high availability. I quantified impact with clear metrics and learned that early, lightweight checks prevent costly redesigns later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
