---
qid: ing_96a28d5c39__eli5__local
question: 'Explain: Interviewer — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 221
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:36:49-05:00'
sources: []
---

Imagine you’re building a giant game of “Who’s the fastest runner?” but instead of runners, it’s algorithms that predict things (like spam emails or movie likes). The interviewer asks you to design a **Leaderboard System**—a place where each algorithm gets a score and is ranked so developers can see who’s best.

You’ll explain how to collect every algorithm’s predictions, compare them to the real answers, compute a win‑rate or error rate, and then update the leaderboard. Think of it like a sports league: teams (algorithms) play games (tests), earn points (accuracy), and the league table (leaderboard) is refreshed after each season (evaluation cycle). You’ll need to decide how to store the data, keep it fast for many users, handle ties fairly, and let new algorithms join without breaking the current rankings. That’s the core of the interview question—designing a fair, efficient ranking system for machine‑learning models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
