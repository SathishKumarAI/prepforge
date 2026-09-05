---
qid: ing_f448115157__star__local
question: 'Explain: Confidence-Based Escalation — Human In The Loop Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 322
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:36:30-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time fraud detection system for credit card transactions. During beta testing the model flagged roughly 2 % of all purchases as suspicious, but our analysts were overwhelmed and missed a few high‑value frauds.

**Task:**  
I was tasked with reducing analyst overload while ensuring no critical fraud slips through—essentially balancing automation speed against human accuracy.

**Action:**  
We implemented a confidence‑based escalation pipeline. First, the model outputted a probability score for each transaction. We set two thresholds: 0.95 to auto‑approve, 0.60–0.95 to trigger a “soft flag” that routed the case to analysts via our ticketing system, and below 0.60 to automatically block the card. Analysts reviewed only the soft‑flagged cases, using a lightweight dashboard built with React and Flask that displayed transaction metadata, model rationale, and previous similar alerts. We also logged analyst decisions back into the training set for continuous learning.

**Result:**  
Within three months, analyst review volume dropped from 20 k to 4 k tickets per month—a 80 % reduction—while fraud detection accuracy improved by 5 percentage points (from 92 % to 97 %). The experience taught me that careful threshold tuning and a simple human‑centric interface can turn an AI system into a true collaborative partner.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
