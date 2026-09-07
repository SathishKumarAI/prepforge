---
qid: ing_511138f991__aws__local
question: 'Explain: When to Enable Thinking / Reasoning — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 556
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:17-05:00'
sources: []
---

**Situation (S)**  
At my previous role, we built a voice‑assistant for a large retail chain that handled ~1 M queries/day. The product team asked whether to add a *reasoning* layer so the assistant could handle “why” and “how” questions instead of only scripted answers.

**Task (T)**  
I had to decide when to enable contextual reasoning, balancing accuracy, latency, and cost while keeping the user experience seamless.

**Action (A)**  
1. **Dive Deep into Usage Patterns** – Logged query logs; 12 % were “open‑ended” that required inference.  
2. **Design a Hybrid Pipeline** –  
   * Base NLU with Amazon Lex (low latency).  
   * Trigger an optional reasoning step using Amazon Bedrock (Claude) only when the confidence score < 0.7 or the intent is “explain”.  
3. **Cost & Scalability** – Estimated 12 % of traffic → ~120k inference calls/day, costing ~$1.2 k/month vs. $5 k if we ran reasoning on all queries.  
4. **Availability** – Deployed Bedrock in a multi‑AZ architecture with Lambda edge for fallback, ensuring < 200 ms latency 99.9% of the time.

**Result (R)**  
- User satisfaction rose from 82 % to 91 % (CSAT).  
- Response accuracy improved by 18 % on open‑ended queries.  
- Monthly cost saved $3.8 k while maintaining 99.7% uptime.

---

### Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Customer Obsession** | Analyzed user feedback to prioritize reasoning for the most valuable queries. |
| **Ownership & Dive Deep** | Owned the entire end‑to‑end pipeline, from data analysis to cost modeling and deployment. |

### Bar‑raiser Expectations

* **Ownership:** Took full responsibility for the decision and its impact on both users and budget.  
* **Dive Deep:** Used real query logs to quantify the need for reasoning.  
* **Quantified Impact:** Showed CSAT lift, accuracy gain, and cost savings.  
* **Learning from Failure:** After a pilot that ran reasoning on all queries, we learned the high cost with marginal benefit; this informed our selective approach.

This structured, data‑driven decision exemplifies how to enable thinking/reasoning only when it truly adds value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
