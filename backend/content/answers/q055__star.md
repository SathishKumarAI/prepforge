---
qid: q055
question: "How do you handle missing data?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** A healthcare analytics dataset I was cleaning had missing values scattered across 30% of its columns, and my first instinct, dropping every incomplete row, would have thrown away nearly half the patients.

**Task** I needed to handle the gaps without gutting the sample or biasing the results.

**Action** I treated missingness deliberately. First I investigated the mechanism, whether data was missing completely at random or, as it turned out, missing not at random because sicker patients skipped certain tests. For numeric fields with light missingness I used median imputation; for the informative gaps I added a "was-missing" indicator so the model could use that signal; and I dropped only the columns that were more than 60% empty. I fit all imputers inside a pipeline on training data only.

**Result** I retained 94% of the rows, and the missing-indicator features actually turned out to be predictive of readmission. The lesson: how data goes missing is itself information, so understand the mechanism before you blindly drop or mean-fill.
