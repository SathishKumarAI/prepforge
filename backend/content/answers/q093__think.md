---
qid: q093
question: "Why can averages be misleading, and what should you report alongside them?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Frame it: the mean summarizes a whole distribution in one number, and that's exactly where information gets lost. Assume a real business metric like revenue or latency.
2. **Mental model.** An average answers "what's the center?" but hides shape: skew, spread, outliers, and multiple sub-populations. Always picture the underlying distribution behind the single number.
3. **Reason step by step.** Enumerate the failure modes: **outliers** drag the mean (one whale customer inflates average spend); **skew** makes the mean unrepresentative (income, latency — median is more typical); **bimodality/mixed segments** make the average describe nobody (average of two clusters lands in the empty middle); and **Simpson's paradox**, where an aggregate average reverses when you segment. To counter, report the **median**, a **spread** measure (standard deviation, IQR), **percentiles** (p50/p90/p99, crucial for latency/SLAs), sample **size**, and ideally the **distribution shape** via histogram.
4. **Traps to avoid.** Reporting a mean with no dispersion or n; using the mean for heavily skewed data; ignoring that a stable average can mask offsetting segment shifts.
5. **Sanity-check and deliver.** Test: "would this conclusion survive if I looked at the histogram or segmented it?" Communicate the average with a companion — median plus percentiles plus n — and call out skew explicitly.
