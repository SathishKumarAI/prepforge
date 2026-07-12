---
qid: q065
question: "What is a confidence interval and how should it be interpreted?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** After an experiment on a recommendation widget, I reported a 4.1% average revenue-per-user lift, and an exec asked "so it's definitely between what and what?" The team was quoting the point estimate as if it were exact.

**Task** I needed to communicate the uncertainty honestly with a confidence interval, and correct a common misinterpretation floating around the room.

**Action** I computed a 95% confidence interval on the lift, which came out to roughly [1.2%, 7.0%]. I explained the correct interpretation carefully: it does NOT mean there's a 95% probability the true lift is in this specific interval; rather, if we repeated the experiment many times, about 95% of such intervals would contain the true value. Practically, since the whole interval sat above zero, we had solid evidence of a positive effect, though the magnitude was still fuzzy. I widened to a 99% interval to show how confidence and width trade off.

**Result** Leadership approved rollout but budgeted conservatively against the lower bound. People stopped treating the point estimate as gospel, which was the real cultural win.
