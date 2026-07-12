---
qid: q079
question: "Explain the difference between INNER, LEFT, RIGHT, and FULL OUTER joins in SQL."
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** An analyst delivered a customer report where a big chunk of orders had vanished, and revenue looked 30% too low. I traced it to a join, they'd used the wrong type.

**Task** I had to fix the query and, more usefully, get the team fluent in what each join actually does to row counts.

**Action** I walked through the four joins on our customers-to-orders example. INNER JOIN returns only rows with a match in both tables, so any customer with no order silently drops, which was their bug. LEFT JOIN keeps every row from the left table and fills nulls where the right has no match, exactly what they needed to keep all customers. RIGHT JOIN is the mirror, keeping all right-table rows. FULL OUTER JOIN keeps everything from both sides, matched or not. I showed the differing row counts side by side and pointed out how nulls signal the non-matches.

**Result** Switching to a LEFT JOIN restored the missing customers and the revenue number reconciled to the penny. The mental model I gave the team stuck: pick the join by asking which side's unmatched rows you cannot afford to lose.
