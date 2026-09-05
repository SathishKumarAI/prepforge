---
qid: ing_10744a402a__star__local
question: You have 10 hours of demonstrations for a new task and budget for 50 more.
  How do you decide what to collect, and what return do you expect?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 348
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:04-05:00'
sources: []
---

**Situation:**  
At a startup developing an on‑device speech‑to‑text model for low‑latency customer support, we had only 10 hours of high‑quality labeled demos but were granted an additional 50 hours to collect data before the next release.

**Task:**  
Decide which new samples to capture so that the model’s word‑error‑rate (WER) drops below 8% on our target dialects while staying within budget and keeping annotation time minimal.

**Action:**  
1. Ran a quick exploratory analysis on the 10 hours, finding that 30 % of errors came from rare phoneme clusters in background music.  
2. Prioritized three collection buckets: (a) noisy environments, (b) accented speakers, (c) domain‑specific jargon.  
3. Designed a crowdsourced annotation workflow with pre‑validation scripts; each hour of raw audio was automatically split into 30 s clips and sent to 3 annotators for consensus.  
4. Used an active‑learning loop: after every 10 hours collected, I retrained a lightweight model, identified the most misclassified utterances, and fed those back into the next batch.

**Result:**  
Collected 52 hours of targeted data in 5 days; the WER dropped from 12% to 7.4% on our validation set—exceeding the goal by 0.6%. I learned that aligning collection strategy with error analysis, not just volume, delivers the highest ROI for limited budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
