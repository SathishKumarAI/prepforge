---
qid: ing_30da1eef0d__star__local
question: 'Q80: What is the difference between error analysis and automated evals,
  and when should you prioritize each?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 323
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:06:16-05:00'
sources: []
---

**Situation:**  
During a product launch for our recommendation engine, we hit a sudden drop in click‑through rate from 12% to 8%. Our QA team was already running automated evaluation scripts on the new model version.

**Task:**  
I needed to pinpoint whether the decline was due to algorithmic bias, data drift, or a bug in feature extraction, and decide which diagnostic path—manual error analysis or automated evals—should drive our next sprint.

**Action:**  
First, I ran the existing automated metrics (precision@k, NDCG) on a stratified sample of user sessions. The scores were statistically unchanged, so the model itself wasn’t the culprit. Next, I performed a focused error analysis: sampled 200 low‑CTR sessions, logged feature vectors, and plotted them against our training distribution. We discovered a sudden spike in users from a new demographic segment that was underrepresented in the training data. I then scripted an automated regression test to flag any future drift in this segment.

**Result:**  
The error analysis led to re‑training with a weighted loss for the new group, boosting CTR back to 11.5% within two weeks. The automated evals saved us time by ruling out model faults early. I learned that automated metrics are great for quick sanity checks, but deep error dives reveal hidden biases that only surface when you look at individual cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
