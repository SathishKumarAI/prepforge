---
qid: vq_858e45ba7f__star__local
question: Is it possible to open a cursor which is in a Package in another procedure
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 337
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:50-05:00'
sources: []
---

**Situation**  
In the migration of our legacy order‑processing system to Oracle 19c, we had a package `PKG_ORDER` that exposed a cursor `CUR_ACTIVE_ORDERS`. The new service layer was written in PL/SQL procedures and needed to fetch active orders for reporting. However, the reporting procedure lived in a different schema and could not directly reference the cursor because it was defined inside the package.

**Task**  
I had to design a way to let the external procedure open and consume `CUR_ACTIVE_ORDERS` without breaking encapsulation or requiring changes to the original package’s interface.

**Action**  
I added a public function `OPEN_ACTIVE_CURSOR(p_cursor OUT SYS_REFCURSOR)` in `PKG_ORDER`. Inside, I used `OPEN p_cursor FOR SELECT * FROM orders WHERE status = 'ACTIVE'`. This keeps the cursor logic inside the package while exposing an explicit entry point. In the external procedure, I declared a local refcursor and called `PKG_ORDER.OPEN_ACTIVE_CURSOR(v_rc)`, then fetched rows into a PL/SQL collection for aggregation. I also added a pragma to ensure the cursor is closed automatically when the function exits, preventing leaks.

**Result**  
The reporting service now runs in 0.3 s per batch, pulling ~12,000 active orders, and we avoided any schema‑level privilege changes. The design keeps the cursor logic encapsulated, satisfies security policies, and demonstrates clean separation of concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
