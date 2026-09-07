---
qid: ing_0c85753f63__aws__local
question: You're handed a small unfamiliar agent codebase. Users report it sometimes
  confirms an order that was never actually placed. How do you debug it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 411
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:54:02-05:00'
sources: []
---

**Situation & Task**  
I joined a small ML‑ops team and received tickets that the “Order Confirm” agent occasionally confirmed orders that never existed. The code was in an unfamiliar Python repo with no unit tests.

**Action (Dive Deep + Ownership)**  
1. **Reproduce & Log** – Ran the agent locally, injected test payloads, and added structured logs (`json` + `timestamp`) to every decision point.  
2. **Data‑driven root cause** – Collected 10 k execution traces over a week; used Athena on S3‑dumped logs to run SQL:  
   ```sql
   SELECT event_type, COUNT(*) FROM logs GROUP BY event_type HAVING event_type='confirm' AND NOT EXISTS(SELECT 1 FROM orders WHERE id=order_id);
   ```
   Found that ~4 % of confirms had `user_token` values from a stale cache.  
3. **Fix & Deploy** – Refactored the caching layer to use DynamoDB with TTL and added an idempotency key check before confirming. Wrote unit tests covering 95 % of branches and enabled CloudWatch Alarms on anomalous confirm rates (>2 %).  
4. **Post‑mortem** – Updated documentation, added a “Confirm Flow” diagram, and scheduled quarterly code reviews.

**Result (Deliver Results)**  
- Reduced false confirmations from 4 % to <0.1 %.  
- Cut downstream support tickets by 70 % in the first month.  
- Cost impact: DynamoDB TTL avoided extra EC2 hours; total incremental cost <$10/month.  

*Bar‑raiser notes:* Demonstrated ownership (took full responsibility), depth (SQL + log analysis), quantified impact, and a learning loop (documentation & reviews).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
