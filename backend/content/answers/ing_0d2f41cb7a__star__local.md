---
qid: ing_0d2f41cb7a__star__local
question: 'Explain: Cody — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 382
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:04-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building an internal API gateway that had grown to over 150 micro‑services. Our onboarding time for new developers was two weeks because every service had its own auth, logging, and rate‑limit logic buried in the docs.

**Task** – I needed to cut that onboarding window by 50% and make sure everyone could find the exact code snippet they required without hunting through a maze of GitHub repos or Slack threads.

**Action** – I introduced Cody, Sourcegraph’s AI‑powered assistant. First, I integrated it into our IDEs (VS Code + JetBrains) via the plugin and configured the Sourcegraph index to include all internal branches. Then I trained Cody on our codebase by feeding it common patterns—like the `TokenAuthMiddleware` template—and set up a custom prompt that told it to “search for authentication middleware in any service.” When a new dev asked, “How do I add rate limiting?” Cody surfaced the exact snippet from the relevant repo, complete with usage comments. I also built a lightweight dashboard showing query counts and hit‑rate.

**Result** – Onboarding time dropped from 14 days to just 4. The team’s productivity increased by ~30 % as developers spent less time searching and more coding. Plus, we discovered that Cody was reducing duplicated effort in our auth logic by highlighting existing implementations before new ones were written. This experience taught me how AI assistants can be tightly coupled with a company’s code search to accelerate engineering velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
