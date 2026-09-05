---
qid: ing_42f9ad0280__star__local
question: 'Explain: Cons — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 355
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:41-05:00'
sources: []
---

**Situation:**  
During my final interview for a senior ML engineer role, the panel asked me to sketch out a high‑scale URL shortener. I knew it was a classic “design” question but wanted to highlight potential pitfalls.

**Task:**  
I had to explain not just the architecture, but also the major cons—technical debt, security gaps, and operational headaches—that can surface if you go all‑in on a naive implementation.

**Action:**  
I walked through each layer: (1) **Database sharding**—pointed out that a single hash‑based key can cause hotspot traffic; (2) **Cache invalidation**—highlighted the risk of stale redirects when URLs expire or are revoked; (3) **Rate limiting & abuse**—exposed how attackers could flood with random keys to exhaust storage; (4) **Analytics integration**—noted that adding click‑tracking inflates write traffic and skews latency; (5) **Compliance & privacy**—warned about GDPR issues when storing IPs or user data without consent. I used real metrics from a production system (e.g., 10 M writes/sec, 99.9% cache hit ratio) to illustrate the trade‑offs.

**Result:**  
The interviewers appreciated that I didn’t just propose “use Redis + MySQL” but also quantified how each design choice introduces failure modes—making me a memorable candidate. I learned to frame architecture critiques as concrete risk metrics, not abstract warnings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
