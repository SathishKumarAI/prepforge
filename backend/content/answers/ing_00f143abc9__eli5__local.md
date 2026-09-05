---
qid: ing_00f143abc9__eli5__local
question: 'Explain: Negative Caching — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 219
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:36:40-05:00'
sources: []
---

Imagine a library where every book is stored in a huge, slow vault (the online storage). Every day, people (Uber’s apps) ask for books about rides: “Where can I find the cheapest car?” Sometimes the answer is *not* in the vault because no such ride exists right now. Instead of chasing down the vault each time and finding nothing, the library keeps a tiny notebook beside the door that says, **“No such book here.”** This note is the *negative cache*: it remembers that the requested information was missing.  

When another person asks the same question, the library first checks the notebook. If it sees “no,” it instantly tells the user the answer is unavailable—no need to open the vault again. By storing these “not found” notes in a fast, local memory (the integrated cache), Uber can answer millions of read requests per second without hammering the slow online storage, saving time and bandwidth while keeping users satisfied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
