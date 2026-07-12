---
qid: q094
question: "What are Slowly Changing Dimensions (SCDs) and what are the common types?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a B2B analytics team, sales reps moved between territories, and our warehouse just overwrote their territory field. That meant historical commission reports suddenly re-attributed old deals to a rep's new territory, and finance caught a mismatch during an audit.

**Task** I needed to redesign the dimension so history stayed accurate while still supporting current lookups.

**Action** This was a classic Slowly Changing Dimension problem, where a dimension attribute changes over time and you must decide how to preserve history. I walked the team through the common types. Type 1 overwrites the old value, keeping no history, which is what we had. Type 2 adds a new row with effective-start and end dates plus a current flag, preserving full history. Type 3 keeps a limited previous-value column. For the rep territory I implemented Type 2 in dbt: a territory change closed the old row and inserted a versioned new one, so each deal joined to the territory valid on its transaction date.

**Result** Historical commission reports reconciled exactly with finance's records, and the audit discrepancy closed. My takeaway: SCDs are really about choosing, per attribute, whether history matters, and Type 2 is the workhorse when it does.
