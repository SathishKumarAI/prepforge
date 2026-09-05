---
qid: vq_101f90b0ba__eli5__local
question: Should strongly linked variables be removed before doing PCA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 214
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:02:47-05:00'
sources: []
---

Think of PCA (principal component analysis) like a photo‑editor that tries to capture the main “story” in a picture by removing background noise.  
If two variables are *strongly linked*—for example, height and weight—they’re almost always moving together. In our editor this is like having two identical copies of the same image side by side; keeping both doesn’t add new information but just clutters the file.

**Do you delete them?**  
Not automatically. If the link is meaningful (height really predicts weight), removing one keeps the story intact and can make later steps easier, because the editor won’t waste time on duplicate clues.  
But if the link is accidental or due to a mistake (two sensors measuring the same thing twice), dropping one cleans up the data and helps PCA find real patterns.

So, check whether the correlation is useful or redundant; only remove it when it doesn’t add value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
