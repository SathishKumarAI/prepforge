---
qid: q098
question: "What is marketing attribution and what are the main attribution models?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm we mean assigning credit for a conversion across the touchpoints (ads, email, search) a user encountered, and that the goal is to guide budget allocation.

**Approach** — Define attribution and the credit-assignment problem, then contrast the main models by how they distribute credit.

**Depth** — Attribution assigns conversion credit across a user's journey so you can judge each channel's contribution. **Single-touch** models: **first-touch** gives all credit to the initial touchpoint (measures awareness/acquisition), **last-touch** gives all credit to the final one (measures closing, but ignores earlier influence). **Multi-touch** models spread credit: **linear** (equal across all touches), **time-decay** (more credit to touches nearer conversion), and **position-based/U-shaped** (heavy weight on first and last, remainder to the middle). Beyond rules, **data-driven/algorithmic** attribution uses models (e.g., Shapley-value or logistic approaches) to estimate each touch's marginal contribution from observed data.

**Edge cases** — Cross-device/cross-browser journeys break identity stitching, cookie loss and privacy changes limit tracking, view-through vs. click-through, and correlation-not-causation — attribution isn't incrementality. Organic and offline touches often go unmeasured.

**Optimize & communicate** — I'd stress that rule-based models are heuristics; to know true causal lift you run **incrementality tests** (geo holdouts, randomized experiments). Distinguishing attribution from causal incrementality signals the rigor interviewers reward in analytics roles.
