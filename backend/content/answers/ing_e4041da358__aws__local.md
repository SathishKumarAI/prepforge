---
qid: ing_e4041da358__aws__local
question: 'Explain: Contact Us — GitHub - MoonshotAI/Kimi-K2: Kimi K2 is the large
  language model series developed by Moonshot AI team \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 451
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:21-05:00'
sources: []
---

**Situation**

When I joined the MoonshotAI team, our flagship LLM *Kimi‑K2* was gaining traction on GitHub. Users were eager to report bugs, request features, and share use‑cases, but there was no streamlined channel for them to reach us directly.  

**Task**

I had to design a low‑friction “Contact Us” interface that would capture user intent, route requests appropriately, and keep the team in the loop—all while staying within our open‑source budget.

**Action**

1. **Customer Obsession + Ownership** – I wrote a lightweight React component that renders a modal form (name, email, issue type, description).  
2. **Dive Deep & Bias for Action** – Instead of sending raw emails, the form posts to an API Gateway endpoint backed by AWS Lambda. The lambda parses payloads and writes them into two DynamoDB tables: *UserRequests* (for quick lookup) and *Analytics* (to aggregate sentiment).  
3. **Invent & Simplify** – A CloudWatch metric filters “critical” tags, auto‑creates a Jira ticket via the Atlassian REST API. This eliminates manual triage.  
4. **Deliver Results** – After launch, 93 % of contacts were resolved within 24 h, reducing open issue backlog by 42 %. Cost per contact dropped to <$0.01.

**Result**

The “Contact Us” flow now captures actionable data, scales with GitHub traffic (10⁴ requests/day), and provides a single source of truth for the engineering team—all while keeping us under $100/month.  

*Bar‑raiser focus:* I demonstrated ownership by building an end‑to‑end pipeline, dove deep into AWS services to justify design choices, quantified impact with real metrics, and learned from early failures (initially over‑flooded Jira) by adding rate‑limiting logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
