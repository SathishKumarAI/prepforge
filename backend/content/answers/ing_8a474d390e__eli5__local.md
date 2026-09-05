---
qid: ing_8a474d390e__eli5__local
question: 'Explain: Use case: User views the home timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 293
total_tokens: 486
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:15:38-05:00'
sources: []
---

**Imagine a giant bulletin board that every user can see when they log on.**  
When you open the *home timeline*, the system needs to pull all the recent posts (tweets) from people you follow and arrange them so the newest ones appear first.

1. **“Followers”** – the people whose tweets you want to see. Think of each follower as a mailbox that can drop letters into your board.  
2. **“Timeline”** – the ordered list of those letters on the board, sorted by time.  
3. **“Cache”** – a quick‑access drawer where we keep the most recent letters so you don’t have to fetch them from scratch every time.

The system works like this: when you open the page, it first checks the cache for any fresh tweets. If some are missing or outdated, it asks the *database* (the big storage of all tweets) for the newest ones. It then merges these with the cached items, sorts them by timestamp, and sends the combined list back to your screen.

So, viewing a home timeline is like stepping up to that bulletin board: you quickly grab the latest letters from the drawer, fill in any gaps from the archive, sort them, and read what’s newest first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
