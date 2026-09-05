---
qid: ing_052008f700__eli5__local
question: What goes wrong when you validate a model on time-ordered data, and how
  do you do it properly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 232
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:43:36-05:00'
sources: []
---

Imagine you’re training a weather‑forecasting robot by feeding it yesterday’s news: “It rained on Monday, sunny Tuesday.” If you let the robot test its predictions on the same news feed, it will look like a genius—because it’s just memorising what it already saw. In data science this is called *leakage* or *time‑order violation*: the model learns from future information that wouldn’t be available when it actually needs to predict.

To avoid this, think of your data as a long train track. You must split the train into a “past” section (train set) and a strictly later section (test set). The robot can only look at the past cars; it cannot peek ahead to see what’s coming next. Practically, you sort the data by date, keep the earliest records for training, and reserve the newest records for validation or testing. This preserves the real‑world sequence and gives you a trustworthy estimate of how well your AI will perform tomorrow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
