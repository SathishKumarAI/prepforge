---
qid: q018
question: "What is the exploration-exploitation trade-off in reinforcement learning?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** I built a content-recommendation bandit for a news app, and the first version got stuck showing users the same few high-performing articles, so engagement plateaued and fresh content never got a chance.

**Task** I had to balance serving proven articles against discovering new ones that might perform even better.

**Action** This was a textbook exploration-exploitation trade-off: exploitation means picking the action with the best known reward, while exploration means trying uncertain actions to gather information that could pay off later. Pure exploitation was starving new content. I implemented an epsilon-greedy strategy that explored a random article 10% of the time and exploited the best-known one otherwise, then upgraded to Upper Confidence Bound, which explores based on uncertainty rather than pure randomness. I decayed epsilon over time so exploration shrank as estimates got confident.

**Result** Overall click-through rose 15%, and we surfaced several sleeper articles that became top performers we'd otherwise have never shown. The lesson: too much exploitation blinds you to better options; you need deliberate exploration to keep learning.
