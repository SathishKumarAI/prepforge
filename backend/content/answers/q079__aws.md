---
qid: q079
question: "Explain the difference between INNER, LEFT, RIGHT, and FULL OUTER joins in SQL."
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

A join combines rows across tables on a key; the four types differ in which unmatched rows survive. **INNER** keeps only rows with a match in both tables. **LEFT** keeps all left rows, filling NULLs where the right has no match. **RIGHT** is the mirror, all right rows. **FULL OUTER** keeps everything from both sides, NULL-filling both directions.

I'd coach clarifying the question first: the "right" join depends on which side is the source of truth. Getting this wrong silently drops or duplicates rows, which is why I frame it through **Dive Deep** and **Insist on the Highest Standards**.

A concrete story: I owned a revenue report that under-counted by 8%. An engineer had used an INNER JOIN between orders and a promotions table, so orders without a promo silently vanished. I switched it to a LEFT JOIN from orders, and the number reconciled to the finance ledger exactly. I also added a row-count reconciliation test so it couldn't regress.

I'd note the classic trap: a LEFT JOIN with a filter on the right table in the WHERE clause quietly becomes an INNER JOIN; that predicate belongs in the ON clause. A bar-raiser listens for whether I catch these silent-correctness bugs and add guardrails, not just recite definitions.
