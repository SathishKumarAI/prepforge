---
qid: q089
question: "What is funnel analysis and how do you use it?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm the funnel is an ordered sequence of steps toward a goal (e.g., signup → add-to-cart → checkout → purchase) and that we care about where users drop off.

**Approach** — Define the funnel, describe step-conversion measurement, then explain how drop-off pinpoints where to invest.

**Depth** — Funnel analysis measures the share of users who progress through each ordered step toward a conversion. You compute step-to-step conversion (this step ÷ previous) and overall conversion (final ÷ first). The value is diagnostic: the biggest drop-off is usually the highest-leverage place to fix. You then segment the funnel (by channel, device, new vs. returning) to find *who* leaks and, ideally, run A/B tests on the weak step to confirm a fix causes improvement.

**Edge cases** — Define whether steps must be strictly ordered and within a time window; users who re-enter or skip steps; counting unique users vs. events; survivorship bias; and choosing too many steps, which fragments the signal. Cross-session funnels need reliable user identity.

**Optimize & communicate** — I'd pair the funnel with cohorting to see if fixes persist, and quantify impact ("recovering 5 points at checkout ≈ X revenue") to prioritize. Narrating "find the leak, size it, test the fix" shows the structured, business-tied reasoning interviewers reward.
