---
qid: q082
question: "How do you choose the right chart type for your data?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

I'd coach starting from the **question and the audience**, not the aesthetics. The chart type follows the relationship I'm showing: **comparison** across categories, use a bar chart; **trend over time**, a line chart; **part-to-whole**, a stacked bar or (sparingly) pie; **correlation** between two variables, a scatter; **distribution**, a histogram or box plot; a **single headline number**, a big-number tile.

This is **Customer Obsession** applied to communication: the reader is my customer, and the best chart is the one they grasp in five seconds and can act on. I lean on **Invent and Simplify**: strip chartjunk, avoid dual axes and 3D, sort bars meaningfully, and label directly.

A real example: a team shipped a 12-slice pie chart of traffic sources that nobody could read. I replaced it with a sorted horizontal bar chart, and in the review the VP immediately spotted that one channel had collapsed, a decision that had been invisible for weeks. We reallocated spend and recovered the channel.

In QuickSight I default to these mappings and let the metric drive the visual. A bar-raiser listens for whether I choose the visual to serve the decision and the audience, rather than defaulting to whatever looks impressive.
