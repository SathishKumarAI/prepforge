---
qid: ing_eb938489b2__aws__local
question: 'Explain: Portfolio moves — Product Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 457
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:56-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the “Portfolio Moves” feature for a SaaS investment platform, where users could reallocate assets across multiple portfolios with a single click. The goal was to reduce friction, increase daily active usage by 20 %, and lower support tickets related to manual moves.

**Action**  
I took full ownership:  

1. **Customer Obsession & Dive Deep** – Conducted user interviews (N=120) and mapped the end‑to‑end flow. Discovered that a 2‑second latency on the move API caused most drop‑offs.  
2. **Design** – Implemented an event‑driven architecture:  
   * **API Gateway + Lambda** for instant request handling (cold start < 200 ms).  
   * **SQS** queues for async validation and transaction recording.  
   * **DynamoDB** with global secondary indexes to store portfolio snapshots, enabling eventual consistency while keeping read latency under 5 ms.  
3. **Bias for Action & Invent & Simplify** – Added optimistic UI updates; users see the new allocation instantly, with background reconciliation.  
4. **Metrics** – Deployed A/B tests (control vs. new flow). After two weeks:  

| Metric | Control | New |
|--------|---------|-----|
| Daily active moves | 3,200 | **5,600 (+75 %)** |
| Avg. latency | 1.8 s | **0.4 s (-78 %)** |
| Support tickets on move errors | 120 | **22 (‑82 %)** |

**Result**  
The feature achieved a 20 % lift in DAUs within the first month, cut support costs by $12k/month, and received positive feedback for “instant gratification.” I documented lessons learned: early performance benchmarks prevented costly refactors later.  

*Bar‑raiser notes*: clear ownership, deep data analysis, measurable impact, and iterative learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
