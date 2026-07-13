---
qid: q089
question: "What is funnel analysis and how do you use it?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask what the conversion journey is (e.g., visit → signup → purchase) and the time window in which steps must occur. State the assumption: ordered, sequential steps toward a goal.
2. **Mental model.** A funnel is a sequence of steps where users drop off at each stage. You measure how many enter each step and the step-to-step conversion rate, then hunt for the biggest leak.
3. **Reason step by step.** Define the ordered steps, count unique users reaching each, compute conversion between consecutive steps and overall. Find the stage with the steepest drop — that's where investigation and experiments pay off most. Segment the funnel (by channel, device, cohort) to see if the leak is universal or concentrated.
4. **Traps to avoid.** Not enforcing step order or a time window (users who "converted" before entering); double-counting users who repeat steps; ignoring that a low top-of-funnel rate may just be unqualified traffic; and optimizing a small-loss step while a bigger leak sits ignored.
5. **Sanity-check and deliver.** Test: do the counts monotonically decrease? If a later step has more users, the definition is broken. Communicate by naming the biggest drop-off, quantifying it, and tying it to a concrete hypothesis and next experiment.
