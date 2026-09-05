---
qid: ing_00a14492d7__star__local
question: 'Explain: Cost estimate (rough token math) — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 387
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:51-05:00'
sources: []
---

**Situation:**  
In my last role at a media startup, we launched a user‑generated video platform that required real‑time moderation of captions and transcripts. Our existing manual review process couldn’t scale beyond 1,000 videos per day, so the product team asked me to build an AI‑driven moderation pipeline and estimate its cost.

**Task:**  
I needed to design a token‑based pricing model for OpenAI’s GPT‑4o that would handle up to 10 k videos/day while keeping latency under 2 seconds. The estimate had to include prompt engineering, token usage per video, and overhead from batching.

**Action:**  
I profiled 200 sample captions (average 300 tokens each) and ran them through a prototype prompt that returned a “safe/unsafe” label. Each moderation call used ~350 input tokens + 30 output tokens = 380 tokens. I then calculated cost: $0.03 per 1,000 tokens for GPT‑4o. For 10 k videos/day, that’s 3.8 M tokens → ~$114/day, or ~$420/month. To reduce costs, I added a rule‑based prefilter that caught 40% of non‑problematic captions using regex, cutting the token volume by ~1.6 M tokens and saving ~$48/day.

**Result:**  
The final pipeline processed 10 k videos in <2 s per batch with an estimated monthly cost of $372—an 18% savings over the initial estimate. I also documented the trade‑offs between prompt length, accuracy, and cost, which became a living reference for future feature rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
