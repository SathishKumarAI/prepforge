---
qid: ing_a10293aa84__star__local
question: 'Explain: Red flags interviewers see from this role'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 323
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:54:34-05:00'
sources: []
---

**Situation**  
I was hired as a junior AI engineer on a startup’s customer‑support chatbot project. The product was due to launch in six weeks and the VP of Engineering had asked us to “fast‑track” the model without a clear validation plan.

**Task**  
My job was to deliver a production‑ready intent classifier that met an 88 % accuracy threshold, but I also needed to surface any hidden risks before we shipped.

**Action**  
I first ran a quick audit of the training data: class imbalance was severe (80/20 split) and many user utterances were duplicated. I built a lightweight cross‑validation pipeline in PyTorch, added stratified K‑folds, and logged per‑class precision/recall. The metrics revealed that low‑frequency intents fell below 60 % recall—an unacceptable red flag for live traffic. I presented these findings to the team, proposed an active learning loop to prioritize hard examples, and negotiated a two‑week buffer for data curation.

**Result**  
The model’s overall accuracy rose from 84 % to 91 %, with all intents above 70 % recall. We launched on schedule without post‑deployment outages, and I learned that uncovering data quality issues early is worth the extra time—interviewers value engineers who spot these red flags before they become crises.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
