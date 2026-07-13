---
qid: q089
question: "What is funnel analysis and how do you use it?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

Funnel analysis measures how users move through a sequence of steps toward a goal, for example view, add-to-cart, checkout, purchase, and shows the drop-off between each step. It answers "where exactly are we losing people," which turns a vague "conversion is low" into a specific, ownable problem.

I frame it through **Customer Obsession** and **Bias for Action**: each drop-off is a customer hitting friction, and the biggest single-step drop is usually the highest-leverage fix, so I go after it fast. In SQL I count distinct users reaching each step (often with window functions to enforce ordering) over a fixed time window, then chart the step-to-step conversion.

A real example: our checkout funnel converted at 2%, and the team wanted to "improve the whole flow." The funnel showed 70% of the loss was a single step, the shipping-info page, driven by a form error on mobile. We fixed that one step and overall conversion rose from 2.0% to 2.9%, roughly a 45% lift, without touching the rest.

A bar-raiser listens for whether I use the funnel to localize the problem and prioritize the highest-impact fix with data, plus whether I quantify the lift, rather than treating "improve conversion" as one undifferentiated blob.
