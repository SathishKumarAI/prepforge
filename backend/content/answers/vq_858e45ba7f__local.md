---
qid: vq_858e45ba7f__local
question: Is it possible to open a cursor which is in a Package in another procedure
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 373
total_tokens: 602
web_searches: 0
cost_usd: 0.0
sources: []
---

**Short answer:**  
Yes – if the cursor is declared as *global* (i.e., in a package specification) and marked `PRAGMA RESTRICT_REFERENCES` or simply left open for external use, you can open it from any procedure that has access to the package.

**In practice:**  
When I moved a heavy analytic query into a shared package, I defined the cursor in the *spec*:

```plsql
package analytics_pkg is
  cursor cur_sales(p_start date, p_end date) is
    select …;
end;
```

Then any procedure could do `open analytics_pkg.cur_sales(...)`.  
The key trade‑offs are:

| Concern | What I saw |
|---------|------------|
| **Visibility** | If the cursor appears in the spec it’s public; hidden cursors (in body) stay private. |
| **Reentrancy** | A cursor opened in one procedure cannot be reused by another concurrently unless you open a new instance. In production, we wrapped the call in a transaction to avoid “cursor already open” errors. |
| **Performance** | Opening the same cursor multiple times from different procedures can cause extra parsing overhead. We mitigated this by creating an *autonomous* package that cached the cursor descriptor with `DBMS_SQL`. |
| **Security** | Granting SELECT on a package spec also grants access to its cursors; we used role‑based privileges to restrict who could open it. |

So, technically possible, but you must manage scope, reentrancy, and privilege carefully—something I’ve done in several high‑throughput reporting services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
