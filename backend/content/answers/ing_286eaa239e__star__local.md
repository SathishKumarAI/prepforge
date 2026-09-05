---
qid: ing_286eaa239e__star__local
question: 'Q: What is the "Over-Reliance" risk in HITL, and how do you mitigate it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 312
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:15-05:00'
sources: []
---

**Situation** – In a recent fraud‑detection project for a fintech client, our model flagged 12 % of transactions as suspicious, but the review team was overwhelmed and started flagging almost everything to avoid missing any case.  
**Task** – I had to reduce false positives while keeping human oversight effective, ensuring that analysts didn’t become “automatic reviewers” who just rubber‑stamped alerts.  
**Action** – First, I introduced a confidence‑threshold layer: alerts below 80 % probability were auto‑rejected with an explanatory note; those above 95 % went straight to the analyst queue. Next, I built a lightweight dashboard that logged each analyst’s decisions and highlighted when they accepted low‑confidence cases repeatedly. We ran a quarterly audit where we correlated analyst patterns with model performance metrics (precision/recall). Finally, I scheduled short “trust‑build” workshops where analysts could see the model’s reasoning (feature importance) to reinforce data‑driven judgment rather than rote compliance.  
**Result** – False positives dropped from 12 % to 4 %, freeing up 30 % of analyst time and improving overall detection recall by 8 %. I learned that balancing automation with transparent human oversight is key; tools that surface model confidence and track analyst behavior effectively curb over‑reliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
