---
qid: q051
question: "What are the main stages of a typical data science project lifecycle?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd frame this through **Ownership** and **Deliver Results**: the lifecycle is how you carry a problem from ambiguity to measurable business impact. I walk through the stages I actually own end to end: (1) business framing, translating a stakeholder ask into a crisp, testable question and success metric; (2) data acquisition and understanding, pulling from S3, Redshift, or Athena and profiling quality; (3) cleaning and feature engineering with Glue; (4) EDA and hypothesis forming; (5) modeling and validation, iterating in SageMaker; (6) evaluation against the business metric, not just offline accuracy; (7) deployment and monitoring for drift; and (8) communication and iteration.

The point I stress is that it's a loop, not a waterfall, and that step one and the last two are where projects actually succeed or fail. I'd give a concrete example: I once spent 40% of a project renegotiating the target metric with the business, which saved us from optimizing the wrong thing. A bar-raiser listens for whether you own the full loop including deployment and stakeholder alignment, not just the fun modeling middle, and whether you tie each stage to business value.
