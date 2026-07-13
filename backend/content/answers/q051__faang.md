---
qid: q051
question: "What are the main stages of a typical data science project lifecycle?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume an end-to-end applied project and that the interviewer wants the stages plus awareness that it's iterative, not a strict waterfall.

**Approach** — Walk the lifecycle in order, keeping each stage to its purpose, then stress the feedback loops.

**Depth** — The typical lifecycle: (1) Business understanding, define the problem, success metric, and constraints with stakeholders; a sharp question drives everything. (2) Data collection and acquisition, gather from databases, APIs, logs. (3) Data cleaning and preparation, handle missing values, outliers, and types; this is usually the most time-consuming stage. (4) Exploratory data analysis, understand distributions, relationships, and quality via stats and visualization. (5) Feature engineering, create and select informative inputs. (6) Modeling, train and tune candidate algorithms. (7) Evaluation, validate against the business metric on held-out data. (8) Deployment, serve the model. (9) Monitoring and maintenance, watch for data/concept drift and retrain. It's a loop: evaluation often sends you back to features or data.

**Edge cases** — Skipping business framing yields a technically good model that solves the wrong problem; no monitoring means silent decay from drift.

**Optimize & communicate** — I'd tie every stage back to the success metric and mention CRISP-DM as the canonical framework. I'd emphasize the iterative feedback loops, since seeing the process as cyclical rather than linear is the mature signal.
