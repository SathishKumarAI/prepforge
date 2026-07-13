---
qid: q088
question: "What is cohort analysis and why is it useful?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm we mean grouping users by a shared start event (usually signup month) and tracking behavior over time, and that a retention example is welcome.

**Approach** — Define a cohort, describe the retention-curve output, then explain the insight it unlocks that aggregate metrics hide.

**Depth** — A cohort is a group of users sharing a defining event in the same period — e.g., everyone who signed up in January. Cohort analysis tracks each cohort's behavior (retention, revenue, activation) across subsequent periods, usually rendered as a triangular heatmap: rows are cohorts, columns are periods since start. This isolates the effect of *when* a user joined from the effect of calendar-time events. It answers "are newer cohorts retaining better than older ones?" — which a blended retention number can completely mask when a growing user base dilutes it.

**Edge cases** — Small cohorts are noisy; the newest cohorts have incomplete data (survivorship in the lower-right triangle); acquisition-channel mix shifts confound comparisons; choosing the wrong "start event" or period granularity distorts the story.

**Optimize & communicate** — I'd normalize to percentages, annotate product changes on the timeline, and segment cohorts by channel to find *why* they differ. Framing cohorts as "did our product changes actually move retention" ties the technique to a business decision, the signal interviewers score.
