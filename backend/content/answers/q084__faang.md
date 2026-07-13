---
qid: q084
question: "What makes an effective analytics dashboard?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm the audience and decision the dashboard supports, since an executive KPI board and an ops monitoring board have different requirements.

**Approach** — Anchor on purpose (who decides what), then layer in metric selection, layout/hierarchy, and trust/maintenance.

**Depth** — An effective dashboard answers a specific set of questions for a specific audience. It leads with a few outcome metrics, each with context: comparison to target, prior period, or trend, because a number alone isn't actionable. Layout follows visual hierarchy: most important top-left, supporting detail below, with the ability to drill down. Consistent, honest encodings (zero-baselined bars, clear units, direct labels) build trust. It should load fast, refresh on a known cadence, and clearly state data freshness and definitions to avoid conflicting numbers across teams.

**Edge cases** — Metric overload, vanity metrics, no baselines, stale data with no timestamp, conflicting metric definitions, and charts that mislead via truncated axes. Mobile/print rendering often breaks.

**Optimize & communicate** — I'd add annotations for anomalies, alerting on thresholds instead of forcing users to stare, and a linked data dictionary. Framing every panel as "what decision does this drive" demonstrates the product-thinking and communication signal interviewers score in analytics interviews.
