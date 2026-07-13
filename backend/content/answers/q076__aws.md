---
qid: q076
question: "What are the four types of data analytics?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

I'd name the four types as a maturity ladder and tie each to a decision it drives. **Descriptive** answers "what happened" (dashboards, historical KPIs). **Diagnostic** asks "why did it happen" (drill-downs, correlation, cohort splits). **Predictive** forecasts "what will happen" (churn scores, demand forecasts). **Prescriptive** recommends "what should we do" (optimization, next-best-action).

I'd frame this through **Dive Deep** and **Deliver Results**: I don't stop at a pretty descriptive chart, I push to the diagnostic root cause and then to a prescriptive recommendation the business can act on. In AWS I'd land raw events in S3, run descriptive/diagnostic queries in Athena or Redshift, surface them in QuickSight, and use SageMaker for the predictive/prescriptive layer.

Concretely: I once owned a dashboard that showed a 12% conversion drop (descriptive), traced it to one mispriced SKU segment via cohort drill-down (diagnostic), forecast the revenue impact (predictive), and recommended a repricing that recovered 9 points (prescriptive). A bar-raiser listens for whether I move past reporting into owned, quantified action rather than reciting definitions. That progression from data to decision is what separates an analyst from someone who moves the business.
