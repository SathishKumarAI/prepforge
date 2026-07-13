---
qid: q079
question: "Explain the difference between INNER, LEFT, RIGHT, and FULL OUTER joins in SQL."
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm we're joining two tables (call them Left L and Right R) on a key, and the question is which rows survive when the key doesn't match on both sides.

**Approach** — Frame all four by which unmatched rows they keep, then note the NULL behavior.

**Depth** — **INNER JOIN** returns only rows with a matching key in *both* tables — the intersection. **LEFT (OUTER) JOIN** returns all rows from L, plus matches from R; where R has no match, its columns are NULL. **RIGHT (OUTER) JOIN** is the mirror — all rows from R, NULLs for missing L. **FULL OUTER JOIN** returns all rows from both, matching where possible and filling NULLs on either side otherwise — the union. So the choice is really "which side's unmatched rows do I need to preserve?"

**Edge cases** — Filtering a LEFT join's right-table column in the WHERE clause silently turns it into an INNER join — put that condition in the ON clause instead. Duplicate keys cause row multiplication (fan-out). NULLs never match NULLs. Missing indexes on join keys kill performance.

**Optimize & communicate** — Use LEFT JOIN + `WHERE R.key IS NULL` to find rows in L with no match (anti-join). Index join keys. Narrate: "I pick the join by which unmatched rows matter, and I'd watch for the WHERE-clause trap that demotes an outer join." That precision is the signal.
