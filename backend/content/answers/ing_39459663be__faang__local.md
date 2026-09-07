---
qid: ing_39459663be__faang__local
question: 'Explain: Two partners at the same firm are on opposite sides of a deal.
  Design the data isolation for that, on top of normal multi-tenancy.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 466
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:57:46-05:00'
sources: []
---

**Clarify**  
We have a single‑firm SaaS platform with normal multi‑tenant isolation (clients are separate). Within one tenant, two partners (Partner A and Partner B) sit on opposite sides of the same deal and must not see each other’s confidential data (e.g., valuations, offers). The goal is to isolate *partner* data inside the tenant.

**Approach**  
1. **Logical separation** – create a *sub‑tenant* or “deal‑group” entity tied to the partner.  
2. **Row‑level security (RLS)** – tag every record with `owner_partner_id`.  
3. **Policy enforcement** – use database RLS or an application‑layer guard that filters by `current_partner_id`.  
4. **Audit & revocation** – log all cross‑partner attempts; allow temporary overrides via secure workflow.

**Depth**  
*Schema*: `Deal(id, partner_id, ...)`, `Offer(id, deal_id, owner_partner_id, ...)`.  
*RLS policy* (PostgreSQL example):

```sql
CREATE POLICY partner_isolation ON Offer
  USING (owner_partner_id = current_setting('app.partner_id')::int);
```

The application sets `app.partner_id` on each request. Complexity: O(1) lookup; RLS adds negligible overhead. Storage cost is minimal – just an integer column.

**Edge Cases**  
- **Shared documents**: use a separate table with a many‑to‑many link and enforce the same policy.  
- **Admin views**: admins can bypass via role‑based checks but must be logged.  
- **Data migration**: bulk imports need to set `owner_partner_id` correctly.

**Optimize & Communicate**  
Explain that this design keeps the multi‑tenant boundary intact while adding a lightweight partner‑level guard, leveraging database features for correctness and auditability. Highlight that it scales linearly with partners and deals, and can be extended to other sensitive entities (e.g., notes, emails). This balances security, performance, and maintainability—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
