---
qid: ing_2f3a8d71a6__eli5__local
question: 'Explain: The Search Flow in Action — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 291
total_tokens: 457
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:50:47-05:00'
sources: []
---

Imagine you’re at a huge library (Spotify) that wants to show you the right book (song) as soon as you type a title into its search box. The “search flow” is like a librarian who quickly pulls out all books whose titles match what you typed, checks which ones are most popular or newest, and then hands them back to you in order.

**How it works step by step**

1. **User types a query** – the librarian receives your request.  
2. **Index lookup** – the library’s computer instantly pulls every book whose title starts with those letters from an “index” (a pre‑built map of words to books).  
3. **Scoring & ranking** – each candidate gets a score based on how many times people have read it and how recently it was added; the higher the score, the better the rank.  
4. **Result list** – the librarian gives you the top 10 or 20 titles, just like Spotify shows “Top 10 results.”  

In this analogy, the *index* is a fast lookup table, *scoring* is a quick math check, and the *result list* is the final display to the user. That’s the search flow in action for a music streaming service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
