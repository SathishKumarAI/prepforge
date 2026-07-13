---
qid: q054
question: "Why does correlation not imply causation?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd frame this with **Are Right A Lot** and **Dive Deep**: conflating correlation with causation is the fastest way to be confidently wrong, and avoiding it is an ownership habit. Two variables can move together because of a **confounder** driving both, **reverse causation**, **selection bias**, or pure coincidence. Ice cream sales and drownings correlate because summer heat drives both; acting on the correlation would be absurd.

The point I make in an interview is that I treat every correlation as a hypothesis, not a conclusion, and I say what evidence would upgrade it: a randomized experiment, or if that's impossible, causal-inference methods like controlling for confounders, instrumental variables, or difference-in-differences. I'd give a concrete example where I owned this: an analysis showed users of a feature had higher retention, but the causal story was reversed, engaged users self-selected into the feature; only an A/B test revealed the true near-zero lift, saving us from over-investing. On AWS I'd design that test's assignment and analysis in Redshift. A bar-raiser listens for whether you instinctively name confounders and demand experimental or quasi-experimental evidence before recommending an action worth real money.
