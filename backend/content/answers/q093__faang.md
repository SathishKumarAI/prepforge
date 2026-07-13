---
qid: q093
question: "Why can averages be misleading, and what should you report alongside them?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm we mean the arithmetic mean and that the interviewer wants both the failure modes and the companion statistics to report.

**Approach** — Explain what the mean hides, give concrete failure cases, then prescribe what to report to restore an honest picture.

**Depth** — The mean collapses a whole distribution into one number, so it hides shape. It's **sensitive to outliers** — one billionaire lifts "average net worth" far above what anyone typical has. It's misleading for **skewed distributions** (income, latency, session length), where the median better reflects the typical case. It can mask **multimodality** (two distinct user groups averaged into a meaningless middle) and is subject to **Simpson's paradox**, where an aggregate average reverses when you segment. Averaging rates or ratios naively also distorts.

**Edge cases** — Small samples make the mean unstable; different denominators across groups; time-varying distributions; mixing units. Percentile-based SLAs exist precisely because mean latency hides tail pain.

**Optimize & communicate** — Alongside the mean I'd report the **median**, a **spread** measure (standard deviation or IQR), key **percentiles** (p50/p90/p99), the **sample size**, and ideally show the **distribution** (histogram/box plot). Segmenting guards against Simpson's paradox. Saying "I never report a mean without its spread and n" signals statistical maturity interviewers reward.
