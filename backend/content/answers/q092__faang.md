---
qid: q092
question: "What are the key components of a time series, and what is seasonality vs. trend?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm we want the decomposition of a series into components and a crisp trend-vs-seasonality distinction, ideally with an example.

**Approach** — List the components, define trend and seasonality precisely, then note how decomposition and additive vs. multiplicative models are used.

**Depth** — A time series decomposes into: **Trend** — the long-term direction (sales rising year over year); **Seasonality** — regular, fixed-period fluctuations (retail spiking every December, traffic dipping each weekend); **Cyclical** — longer, non-fixed swings tied to economic cycles; and **Residual/noise** — irregular leftovers. The key distinction: trend is a persistent long-run movement with no fixed period, while seasonality is periodic and repeats at a known, constant interval. Decomposition can be **additive** (components sum; seasonal amplitude constant) or **multiplicative** (components multiply; seasonal swing grows with the level).

**Edge cases** — Multiple seasonalities (daily and weekly), holidays shifting dates, changing seasonal amplitude favoring multiplicative models, level shifts/structural breaks, and too little history to estimate a yearly season. Missing timestamps and irregular sampling break naive decomposition.

**Optimize & communicate** — I'd use STL decomposition to separate components, then deseasonalize before reading the trend so I don't mistake a December spike for growth. Explaining *why* you separate them — to avoid misreading a seasonal bump as a real trend — is the analytical signal interviewers score.
