---
qid: ing_eeac6907d5__star__local
question: 'Explain: Tier 2: ML Classification — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 387
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:25:46-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a user‑generated video platform that was attracting millions of daily uploads. Within weeks we hit a compliance issue: our automated flagging system flagged only about 30 % of harmful content, while the legal team required an 85 % detection rate to avoid fines.

**Task:**  
I had to design and deploy a Tier 2 machine‑learning classification pipeline that could quickly sift through millions of videos per day, identify hate speech or graphic violence, and reduce false positives so we didn’t overwhelm reviewers.

**Action:**  
First, I curated a balanced training set by combining our existing flagged corpus with new samples from open datasets (OpenAI’s CLIP embeddings). Using a lightweight CNN‑LSTM hybrid, I extracted visual features; for audio, I used VGGish embeddings. I then trained an XGBoost ensemble that merged multimodal scores and applied a confidence threshold tuned via ROC analysis to hit the 85 % recall target while keeping precision above 70 %. Deployment was on our Kubernetes cluster with autoscaling: each inference job ran in <200 ms, allowing us to process ~1.2 M videos/day without exceeding GPU quotas. I also built an active‑learning loop that sent borderline cases to human moderators for annotation, feeding back into the model.

**Result:**  
Within three weeks, our detection rate rose from 30 % to 87 %, and false positives dropped by 40 %. The platform avoided a regulatory penalty and reduced moderator workload by 25 %. I learned how to balance multimodal feature fusion with cost‑effective inference, and the importance of continuous human‑in‑the‑loop feedback for high‑stakes moderation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
