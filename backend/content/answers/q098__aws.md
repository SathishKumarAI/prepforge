---
qid: q098
question: "What is marketing attribution and what are the main attribution models?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

Marketing attribution assigns credit for a conversion across the touchpoints a customer saw, ads, emails, organic search, so we know which channels actually drive value and where to spend. The main models: **first-touch** (all credit to the first interaction), **last-touch** (all to the last), **linear** (equal credit across touches), **time-decay** (more credit to touches nearer the conversion), **position-based/U-shaped** (heavy credit to first and last), and **data-driven/algorithmic** (credit learned from the data, e.g., Shapley-value style).

I frame the choice through **Dive Deep** and **Are Right A Lot**: no model is "true," each encodes an assumption, so I pick based on the business question and I'm explicit about the bias. Last-touch systematically starves top-of-funnel channels that create awareness.

A real example: our team ran everything on last-touch and was about to cut a "low-performing" awareness channel. I rebuilt attribution as time-decay across the multi-touch journey (event data in S3, modeled in Redshift), which revealed that channel initiated 30% of journeys that converted elsewhere. We kept it, and reallocating on the multi-touch view improved marketing ROI ~15%.

A bar-raiser listens for whether I understand each model's built-in bias and choose deliberately, tying it to a real budget decision with quantified impact, rather than defaulting to last-touch.
