---
qid: q092
question: "What are the key components of a time series, and what is seasonality vs. trend?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a food delivery company, ops leadership panicked because weekly order volume "crashed" every Monday and Tuesday. They wanted to cut driver capacity, but I suspected they were reacting to a normal pattern, not a real decline.

**Task** I needed to decompose the demand signal so we could tell a genuine downturn from expected weekly rhythm.

**Action** I ran a classical time-series decomposition, separating the data into its components: trend, seasonality, and residual noise. The trend is the long-term direction, the underlying growth or decline over months. Seasonality is the repeating pattern at a fixed period, in our case the weekly cycle where weekends spiked and Mondays dipped. The residual is what's left after removing both. Using statsmodels seasonal_decompose on daily orders, I showed the "crash" was pure weekly seasonality, while the trend line was actually rising about 3% month over month.

**Result** Leadership scrapped the capacity cut, and we instead built staffing to the seasonal curve, reducing weekend shortfalls by around 20%. My takeaway: never react to a raw time series, because trend and seasonality are different forces, and confusing a recurring dip for a decline leads to exactly the wrong decision.
