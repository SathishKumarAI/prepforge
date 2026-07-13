---
qid: q082
question: "How do you choose the right chart type for your data?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask what *message* the chart must convey and who the audience is. State the assumption: chart choice follows from the analytical question, not from aesthetics.
2. **Mental model.** Map the chart to the *relationship you're showing*: comparison, composition, distribution, trend over time, or correlation. Each intent has a natural encoding.
3. **Reason step by step.** Comparison across categories → bar chart. Trend over time → line chart. Part-to-whole → stacked bar or (sparingly) pie. Distribution → histogram or box plot. Relationship between two variables → scatter. Then consider data type (categorical vs continuous) and cardinality — many categories favor a horizontal bar, not a pie.
4. **Traps to avoid.** Pie charts with more than a few slices; dual y-axes that imply false correlation; truncated axes that exaggerate differences; 3D effects; using a line chart for unordered categories. Don't pick a chart because it looks impressive.
5. **Sanity-check and deliver.** Squint test: can a stranger read the takeaway in five seconds without the legend? Explain your choice by naming the intent ("I want to compare, so bars") and the encoding principle (position/length is read more accurately than angle or area).
