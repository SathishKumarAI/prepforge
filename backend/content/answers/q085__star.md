---
qid: q085
question: "What are the key dimensions of data quality?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a fintech company, our finance team flagged that the monthly active users number swung wildly between reports. Trust in the whole analytics platform was eroding, and a board deck had already gone out with a wrong figure.

**Task** I needed to diagnose the root causes and build ongoing checks against the real dimensions of data quality.

**Action** I audited the pipeline against the standard dimensions. For accuracy I compared sampled records against source-of-truth systems. For completeness I found nulls in 8% of user country fields. For consistency I discovered the same user counted twice because of casing differences in email. For timeliness I saw one feed lagging two days. For uniqueness I found duplicate account rows, and for validity I found dates in the future. I built Great Expectations tests covering each dimension and wired them into the Airflow DAG so bad loads failed loudly instead of silently publishing.

**Result** Within two months the MAU discrepancy between reports dropped from roughly 15% to under 1%, and we caught three broken upstream feeds before they hit dashboards. My takeaway: data quality isn't one number, it's a handful of measurable dimensions you have to test continuously.
