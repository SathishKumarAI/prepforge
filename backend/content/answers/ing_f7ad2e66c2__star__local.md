---
qid: ing_f7ad2e66c2__star__local
question: How would you build the evaluation system for a Meta AI assistant before
  and after each model release?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 366
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:02-05:00'
sources: []
---

**Situation:** At my previous company we were launching a new generative‑AI chatbot for customer support. The beta version had a 15 % higher churn rate than the legacy system, so we needed a robust evaluation framework to catch regressions and guide improvements before every model update.

**Task:** Design an end‑to‑end evaluation pipeline that runs automatically pre‑release (offline) and post‑release (online), measuring accuracy, safety, latency, and user satisfaction while balancing compute costs.

**Action:** I built a multi‑tier system. First, a continuous integration script pulls the latest model weights into Docker containers and runs them against a curated test set of 50k real support tickets. Metrics—BLEU, ROUGE, and a custom “intent match” score—are logged to Grafana dashboards. Next, I deployed a shadow mode in production: each incoming user query is routed simultaneously to the new model and the live baseline; we collect turn‑level latency, F1 on intent tags, and a 5‑point Net Promoter Score via post‑interaction surveys. A Bayesian bandit algorithm then decides whether to roll out or rollback within minutes. I also set up a privacy audit step that hashes user data and checks for policy violations using an open‑source compliance checker.

**Result:** After implementation, we reduced churn by 27 % in the first month, cut model‑to‑model latency from 1.2 s to 0.9 s, and captured safety regressions before they reached users—saving the company $350k in potential support tickets. I learned that combining offline test suites with real‑world shadow traffic provides the most reliable guardrails for AI product releases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
