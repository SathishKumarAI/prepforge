---
qid: ing_3b904011ef__star__local
question: Your eval reports 82% pass on 100 examples. What does that number not tell
  you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 302
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:52-05:00'
sources: []
---

**Situation:** While leading the evaluation of our new recommendation engine for a streaming platform, I ran the automated test suite on 100 randomly sampled user sessions and got an 82% pass rate.

**Task:** My job was to interpret that metric, identify hidden risks, and decide whether the model was ready for production roll‑out or needed further tuning.

**Action:** I dug deeper than the surface percentage. First, I broke down the failures by category—content mismatch, latency spike, and user churn prediction error—and plotted their distribution across session lengths. Then I compared the 82% figure to the business SLA of a 95% accuracy threshold for high‑engagement users, which revealed that the pass rate masked a serious drop in performance for long sessions. I also ran a confusion matrix on the recommendation relevance scores and found a bias toward over‑popular titles, skewing the overall metric upward. Finally, I set up a small A/B test with 1% of live traffic to validate the offline results.

**Result:** The deeper analysis showed that while the model met baseline requirements for short sessions, it underperformed for longer ones and introduced brand visibility bias—issues that an 82% pass alone would have hidden. We refactored the ranking algorithm, improved feature engineering, and raised the live accuracy to 94%. I learned that aggregate percentages can be deceptive; always drill into failure modes and business impact before declaring success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
