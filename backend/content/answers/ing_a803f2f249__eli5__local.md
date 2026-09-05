---
qid: ing_a803f2f249__eli5__local
question: 'Explain: A bad and a good example — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 260
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:19-05:00'
sources: []
---

Imagine you’re designing a phone app that recommends songs, like a smart DJ.  
**Bad example:** The interviewer asks only “How would you build a song‑recommendation feature?” and expects you to drop a list of libraries and say “just use a neural net.” You skip talking about data flow, how the model learns from listening habits, or what happens when the user’s network is slow. It feels like someone looking at a blank recipe book and saying, “Just cook something!”  
**Good example:** The interviewer says, “Build a mobile music‑recommendation system that works offline and updates in real time.” You start by sketching data sources (user history, song metadata), explain how the model trains on a server, then describes how a lightweight embedding runs on the phone, caches results, and syncs new feedback. You mention scalability (many users) and latency (seconds).  

The good answer treats the problem like building a reliable DJ booth: you plan where each component lives, how they talk, and what happens when one part fails. The bad answer is just guessing at ingredients without a recipe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
