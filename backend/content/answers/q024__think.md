---
qid: q024
question: "What are the main sources of bias in AI systems and how can you address them?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask which sense of "bias" - statistical bias vs societal/fairness harm; here it's fairness. State the assumption that we care about unfair outcomes for groups, and that "solving" it fully is not the goal.

2. **Mental model.** Trace bias along the ML lifecycle: data collection to labeling to modeling to deployment. Each stage introduces a distinct failure mode, so map sources onto that pipeline instead of listing randomly.

3. **Reason step by step.** Sources: data bias (under-representation, historical discrimination), sampling bias, labeling bias (subjective annotation), algorithmic/aggregation bias (optimizing overall accuracy while harming subgroups), and deployment feedback loops (predictions shape future data, e.g. predictive policing). Mitigations mirror the stages: representative audited data; fairness metrics like demographic parity and equalized odds with subgroup evaluation; pre-/in-/post-processing (reweighting, constraints, threshold tuning); and transparency via model/data cards plus human oversight.

4. **Traps to avoid.** Don't claim more layers or higher accuracy fixes bias, and don't say it's fully eliminable. Note fairness definitions can conflict, forcing explicit trade-offs.

5. **Sanity-check.** Frame it as continuous measurement and management, not a one-time fix - communicate that governance and context matter as much as any single technique.
