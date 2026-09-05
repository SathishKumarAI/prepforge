---
qid: vq_e0e46d0cbf__star__local
question: Can we pass RECORD GROUP between FORMS ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 401
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:05-05:00'
sources: []
---

**Situation:**  
In a mid‑year upgrade of our legacy Oracle Forms application, the sales team needed to move a dynamically filtered list of customer orders from Form A (Order Entry) to Form B (Order Review) without re‑querying the database, because the filter criteria were user‑specific and could change during the session.

**Task:**  
I had to transfer the current Record Group—containing up to 3,000 rows—from Order Entry to Order Review while preserving sorting, paging state, and ensuring no data loss or performance hit.

**Action:**  
I created a reusable PL/SQL package `RG_TRANSFER` that wrapped the `CREATE_RECORD_GROUP`, `FETCH_ROWS`, and `RECORD_GROUP_TO_TABLE` calls. On Form A’s “Send to Review” button I called `RG_TRANSFER.PREPARE_GROUP('ORDER_RG')`, which cloned the existing Record Group into a global temporary table (`GLOBAL_ORDER_RG`). Then, in Form B’s `WHEN-NEW-FORM-INSTANCE`, I invoked `RG_TRANSFER.LOAD_GROUP('ORDER_RG', :global_order_rg)` to rebuild the Record Group from the temp table. I also added error handling for size limits and logged transfer times.

**Result:**  
The transfer completed in under 0.3 s on average, even with 3,000 rows, eliminating a redundant query that previously took ~2 s. User satisfaction rose by 15% (measured via post‑upgrade survey), and the codebase gained a clean, testable module for any future Record Group transfers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
