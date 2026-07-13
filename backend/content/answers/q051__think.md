---
qid: q051
question: "What are the main stages of a typical data science project lifecycle?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask whether they want a framework (like CRISP-DM) or a personal workflow, then state you will give the standard iterative lifecycle. Flag up front that it is *iterative*, not a straight line.

2. **Mental model.** Bookend the technical work with business context: it starts with a business question and ends with monitoring in production. The modeling is the middle, not the whole story.

3. **Reason step by step.** Walk the stages in order: business/problem understanding and success metrics, data collection, cleaning & preparation (the most time-consuming), EDA, feature engineering, modeling, evaluation on held-out data, deployment, then monitoring & maintenance (drift, retraining).

4. **Traps to avoid.** Do not present it as strictly linear, findings loop you back. Do not over-glorify modeling; interviewers want to hear you value data prep and business framing. Do not forget deployment and monitoring, juniors often stop at 'trained a model.'

5. **Sanity-check and communicate.** Verify the order is logical (you cannot clean before you collect) and that monitoring closes the loop. Communicate that stakeholder communication runs throughout, and that iteration is the norm, which reads as real-world experience rather than a memorized list.
