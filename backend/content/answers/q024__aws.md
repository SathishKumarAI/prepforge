---
qid: q024
question: "What are the main sources of bias in AI systems and how can you address them?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd enumerate the main sources: biased or unrepresentative training data, historical bias baked into labels, sampling and selection bias, proxy features that correlate with protected attributes, and feedback loops where a model's outputs shape the very data it later learns from. Bias can also enter through the objective we optimize and how we deploy.

To show **Insist on the Highest Standards** and **Ownership** I'd anchor it in a model I owned where I audited outcomes across subgroups and found the false-negative rate was markedly higher for an underrepresented group because that group was thin in training data. I owned the fix end to end: rebalanced and augmented the data, removed a leaky proxy feature, added subgroup-level metrics as release gates, and set up ongoing monitoring for drift. That closed the subgroup performance gap from roughly 14 points to under 3 while holding overall accuracy.

The trade-off I'd name honestly: fairness definitions can conflict and sometimes trade against aggregate accuracy, so I made those trade-offs explicit with stakeholders rather than hiding them. On AWS I'd use SageMaker Clarify for bias detection and Model Monitor for ongoing checks.

A bar-raiser listens for whether I treat bias as a measurable, owned engineering responsibility with subgroup metrics and monitoring, and whether I confront the fairness-accuracy trade-off directly instead of hand-waving.
