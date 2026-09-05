---
qid: ing_eb94d6c873__eli5__local
question: 'Explain: Common mistakes — Anthropic System Design Interview (2026 Guide)
  - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 226
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:48:20-05:00'
sources: []
---

Imagine you’re designing a giant library that must serve millions of visitors every second, but the books are actually tiny AI models.  
**Common mistake 1: treating “model size” like book length** – you think a bigger model is always better, ignoring that a huge model may be too slow to fetch in real time.  
**Common mistake 2: ignoring the “checkout queue” (latency)** – you build an elaborate recommendation engine but forget how long it takes to pull a single model from storage, so users wait forever.  
**Common mistake 3: neglecting “book‑sharing policy” (data privacy and security)** – you let models see all user data without proper isolation, risking leaks.  

The key is to balance *model accuracy* with *response speed*, keep the “checkout queue” short, and enforce strict privacy rules—just like a well‑run library keeps books accessible, timely, and safe for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
