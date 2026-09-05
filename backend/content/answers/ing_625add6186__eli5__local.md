---
qid: ing_625add6186__eli5__local
question: 'Explain: 4.2 Requirement 2: URL Redirection — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 219
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:12:14-05:00'
sources: []
---

Think of a URL shortener as a **mailroom in a huge office building**.  
When someone sends a letter, the mailroom gives it a tiny, easy‑to‑remember stamp (the shortened URL). Inside, that stamp is linked to the real address (the long URL).  

**Requirement 2 – URL Redirection** means: when a person “drops” the stamped envelope on the mailroom’s counter (hits the short link), the mailroom must instantly look up which real mailbox the stamp points to and hand the letter over without delay.  
So, in system terms, we need a fast lookup table that maps each short code back to its full URL and then redirects the user’s browser to that destination. It has to be reliable (never give the wrong address) and speedy (no waiting time), just like a mailroom that never misdelivers or keeps people standing in line.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
