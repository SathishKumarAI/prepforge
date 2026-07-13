---
qid: q082
question: "How do you choose the right chart type for your data?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm the goal: I choose a chart by the *question* the audience needs answered and the data type, not by aesthetic preference.

**Approach** — Start from the analytical intent (comparison, trend, distribution, composition, relationship), map data types (categorical vs. continuous vs. temporal), then pick the encoding.

**Depth** — Trends over time → line chart. Comparison across categories → bar chart (horizontal when labels are long). Part-to-whole → stacked bar or, sparingly, pie for ≤3 slices. Distribution → histogram or box plot. Relationship between two continuous variables → scatter plot; add color/size for a third dimension. Correlation matrices → heatmap. Position and length are the most accurate perceptual encodings; angle and area (pie, bubble) are weaker, so I bias toward bars and lines. I keep to one message per chart.

**Edge cases** — Too many categories crowd bars (aggregate a "long tail"); dual y-axes mislead; pie charts fail with many slices; 3D and truncated y-axes distort. High-cardinality time series need small multiples.

**Optimize & communicate** — I'd label directly, order bars by value, and start counts at zero. Narrating "the audience needs to see change, so line" shows I reason from communication goals, which is the signal interviewers score for analytics roles.
