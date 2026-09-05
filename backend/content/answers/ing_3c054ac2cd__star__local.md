---
qid: ing_3c054ac2cd__star__local
question: 'Explain: Eval-set construction with human labeling'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 364
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:35-05:00'
sources: []
---

**Situation** – In a product‑grade NLP model for customer support tickets, the engineering team noticed that the open‑source dataset we were using didn’t reflect our domain’s jargon and sarcasm, so test accuracy dropped to 72 %.  

**Task** – Build an evaluation set that truly reflects our real traffic: 5,000 tickets spanning 10 intent categories, each labeled by humans with high reliability.  

**Action** – I first drafted a detailed annotation guide (definitions, edge‑case examples) and ran a pilot with three annotators on 200 samples in Label Studio. We calculated Cohen’s kappa; it was only 0.58, so we iterated the guide, added clarifying examples, and re‑trained annotators. Once agreement hit ≥0.80, I hired 12 paid labelers via Prolific, distributed the remaining 4,800 tickets in batches of 200, and used a custom script to track duplicate labeling for quality control. I also set up a Slack channel for real‑time clarifications, cutting mislabeling errors by 30 %.  

**Result** – The new eval set gave us a more realistic 86 % accuracy figure, matched production metrics within ±2 %, and reduced the model’s false‑positive rate from 18 % to 9 %. I learned that iterative guideline refinement and real‑time feedback loops are key to high‑quality human labeling at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
