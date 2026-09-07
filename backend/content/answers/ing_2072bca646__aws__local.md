---
qid: ing_2072bca646__aws__local
question: 'Explain: Scenario 1: Design a customer support chatbot'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 524
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:35-05:00'
sources: []
---

**Scenario 1 – Customer‑Support Chatbot**

**Situation & Task (Ownership)**  
A mid‑size retailer needed a 24/7 self‑service channel for order status, returns and FAQ. The goal was to reduce live‑agent tickets by **30%** while keeping NPS ≥ 90.

**Action (Dive Deep + Bias for Action)**  
1. **Data audit** – parsed the last 6 months of chat logs; identified 4 high‑frequency intents (order status, return initiation, payment issue, shipping delay).  
2. **Design** – built a *stateful* chatbot on Amazon Lex (NLU) with Lambda back‑ends for business logic.  
3. **Integration** – used DynamoDB to store session context; invoked Step Functions for multi‑step returns workflows.  
4. **Fallback** – routed unresolved intents to live agents via Amazon Connect, ensuring SLA of 30 s.  
5. **Testing & Iteration** – deployed A/B tests with 20% traffic, monitored using CloudWatch and X-Ray; iterated on intent confidence thresholds.

**Result (Deliver Results)**  
- Live‑agent tickets fell from 12,000/month to 8,400 → **30% reduction**.  
- NPS rose from 85 to 92 in 3 months.  
- Cost per ticket dropped from $4.50 to $2.80 (≈ 37 % savings).  

**Key AWS Services Used**: Lex, Lambda, DynamoDB, Step Functions, Connect, CloudWatch/X‑Ray.

---

### Bar‑raiser Checklist

| What they listen for | Why it matters |
|----------------------|----------------|
| **Ownership** – end‑to‑end ownership of the bot lifecycle | Shows initiative and accountability. |
| **Dive Deep** – data‑driven intent selection & metrics | Demonstrates analytical depth. |
| **Quantified Impact** – 30% ticket reduction, NPS lift, cost savings | Provides measurable business value. |
| **Learning from Failure** – iteration on confidence thresholds after A/B failures | Highlights resilience and continuous improvement. |

This approach balances scalability (serverless), availability (multi‑AZ Lambda/Step Functions), and cost (pay‑as‑you‑go) while keeping the customer experience front‑and‑center.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
