---
qid: ing_6a8000069f__eli5__local
question: What are some disadvantages of CDNs? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 240
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:24:47-05:00'
sources: []
---

Imagine a CDN (Content Delivery Network) as a giant library network: instead of everyone borrowing books from one distant branch, copies are stored in many nearby branches so readers get them faster. That’s great for speed, but it has a few trade‑offs.

1. **Extra cost** – each branch must keep its own copy, which means paying more for storage and bandwidth.
2. **Complex updates** – when the book changes, every branch needs to receive the new edition; if one branch lags, users see old content.
3. **Security blind spots** – with many copies spread around, it’s harder to enforce a single security policy; an attacker could target a weak branch.
4. **Limited control** – you can’t always tell the CDN how to serve your data (e.g., custom headers or compression), so you may lose some fine‑tuned optimizations.

In short, while CDNs make content faster for many users, they add cost, update complexity, security risk, and sometimes reduce your flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
