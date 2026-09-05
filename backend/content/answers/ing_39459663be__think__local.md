---
qid: ing_39459663be__think__local
question: 'Explain: Two partners at the same firm are on opposite sides of a deal.
  Design the data isolation for that, on top of normal multi-tenancy.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 398
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:41:17-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
*What is “opposite sides” (buyer vs seller)?* Assume both partners share the same corporate account but must see only their own side’s data. Also assume standard multi‑tenant isolation already protects other firms.

**2️⃣ Mental model: layered security**  
Treat the firm as a tenant; within that tenant create *sub‑tenants* or *roles*. Use a “data‑ownership” flag (e.g., `side = 'buyer' | 'seller'`) and an access‑control list (ACL) that maps each partner to their side. This is akin to row‑level security.

**3️⃣ Step‑by‑step reasoning**  
1. **Schema design:** Add a `party_side` column on all deal tables.  
2. **Query filtering:** Wrap every query in a filter: `WHERE party_side = current_user.side`.  
3. **Indexing:** Index the `party_side` field for performance.  
4. **Audit trail:** Log access attempts; flag any cross‑side reads.  
5. **UI controls:** Hide UI elements that belong to the opposite side.

**4️⃣ Common pitfalls**  
- *Over‑trusting application logic*: If a developer forgets the filter, data leaks.  
- *Hardcoding sides*: Should be driven by user attributes, not hardcoded values.  
- *Neglecting joins*: Ensure join predicates also include `party_side`.  

**5️⃣ Sanity check & communication**  
Run test queries with mocked users from both sides; verify no cross‑data visibility. Explain to stakeholders: “We’re layering row‑level security on top of tenant isolation, so each partner only sees their side’s rows.” This keeps the solution auditable and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
