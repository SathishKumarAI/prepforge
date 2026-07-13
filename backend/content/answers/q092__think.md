---
qid: q092
question: "What are the key components of a time series, and what is seasonality vs. trend?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm the granularity and horizon (daily sales? monthly?), since seasonality depends on the period. State the assumption: I'll describe the classic decomposition.
2. **Mental model.** Think of a series as a sum (or product) of components you can separate: trend + seasonality + cyclical + residual/noise. Decomposition is the lens.
3. **Reason step by step.** Define each: **trend** is the long-run direction (steady growth or decline over years). **Seasonality** is a *fixed-period, repeating* pattern (higher retail sales every December, weekday vs weekend traffic). **Cyclical** effects are longer, irregular swings tied to business cycles (no fixed period — this is what distinguishes it from seasonality). **Residual/noise** is what's left after removing the structure. Note additive vs multiplicative models: multiplicative when seasonal swings grow with the level.
4. **Traps to avoid.** Confusing seasonality (fixed, known period) with cyclical (variable period); reading a short-term seasonal spike as a trend change; forgetting to deseasonalize before comparing "this month vs last month."
5. **Sanity-check and deliver.** Test with an example: an ice-cream shop's summer peak is seasonality; a decade of rising revenue is trend. Communicate by first naming the components, then sharpening the trend-vs-seasonality contrast on the fixed-period-and-direction axis.
