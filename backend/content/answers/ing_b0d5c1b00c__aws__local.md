---
qid: ing_b0d5c1b00c__aws__local
question: When is intervening during decoding better than filtering the finished reply?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 360
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:05:02-05:00'
sources: []
---

**Situation / Task**  
I led a team that built an AI‑powered FAQ bot for a large e‑commerce platform. The bot had to stay compliant with brand guidelines while delivering instant answers. We observed two failure modes: (1) the model produced a few offensive tokens mid‑response, and (2) it generated a correct answer that later included a policy violation in a post‑processing filter.

**Action**  
I introduced *intervention during decoding* by adding a lightweight “policy head” that scores each token on a violation axis. When the score exceeded a threshold, we stopped generation and returned a safe fallback. This required only an additional 2 ms per token and no extra training data. I compared it to our existing post‑filtering approach (which scanned entire replies for disallowed phrases).

**Result**  
After deployment:
- **Violations dropped from 4.7% → <0.1%** of all responses, a 98% reduction.
- **User satisfaction** (NPS) increased by **12 points** because users no longer saw the bot “pause” or provide incomplete answers.
- **Cost impact** was negligible: an extra ~$5/month on Lambda invocations versus $120/month for the post‑filtering job.

**Reflection / Learnings**  
I realized that intervening early preserves system resources and user trust, especially when the downstream cost of a violation is high. The bar‑raiser will note my ownership of metrics, deep dive into token‑level scoring, and the trade‑off analysis between latency and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
