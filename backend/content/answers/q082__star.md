---
qid: q082
question: "How do you choose the right chart type for your data?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was building the monthly revenue review deck for our leadership team, and the previous analyst had crammed everything into 3D pie charts. Executives kept asking "so is the number going up or down?" because the visuals hid the answer.

**Task** I needed to rebuild the report so each chart matched the question it was answering, not just decorated the slide.

**Action** I started from intent rather than aesthetics. For revenue over 18 months I used a line chart, because the story was a trend. For comparing sales across five regions I switched to a horizontal bar chart, which reads cleanly when category labels are long. I killed the pies entirely, since people can't judge angle differences, and where I truly needed part-to-whole I used a single stacked bar. For the correlation between ad spend and signups I used a scatter plot with a trend line. I also enforced a rule: one message per chart.

**Result** The review dropped from 22 slides to 12, and leadership started making decisions in the meeting instead of asking follow-ups. What stuck with me is that chart choice is really about the reader's question, not the data's shape.
