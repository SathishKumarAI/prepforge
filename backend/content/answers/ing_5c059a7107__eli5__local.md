---
qid: ing_5c059a7107__eli5__local
question: You have 10M unlabelled examples and budget for 20k labels. How do you spend
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 195
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:01:59-05:00'
sources: []
---

Imagine you’re a gardener with 10 000 bushes (the unlabeled data) but only enough fertilizer to treat 20 000 leaves (your budget).  
Instead of sprinkling fertilizer everywhere, you first pick the bushes that look most “uncertain” – the ones whose color or shape could be any of many species.  
You ask a botanist (labeler) for each of those 20 000 leaves what species they belong to.  
With these labels you train a quick plant‑recognition model, then let it point out new bushes that still look ambiguous.  
You keep repeating: label the most uncertain ones until you hit your budget.  

This “active learning” strategy uses the limited labels on data points that matter most for improving accuracy, so you get far more insight than if you labeled random examples.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
