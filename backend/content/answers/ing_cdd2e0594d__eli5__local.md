---
qid: ing_cdd2e0594d__eli5__local
question: 'Explain: JWT — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 310
total_tokens: 467
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:01:24-05:00'
sources: []
---

Think of logging into a library.  
When you first enter, the librarian gives you a **ticket** (the *JWT*). That ticket is a small card that says “you are allowed to read books for the next two hours.” It’s written in a secret code so only the library can read it; anyone else sees it as just a bunch of symbols. You keep that ticket with you – no one needs to ask the librarian again while it’s valid.

If you forget the ticket, the librarian will look at your **library card** (the *cookie*). The card is a small plastic card stored in your wallet; it remembers who you are but doesn’t say how long you can stay. It tells the system “I’ve seen this person before.”

When you sit down to read, the librarian checks a note on the desk (the *session*). That note is created when you first enter and disappears after you leave. It’s like a temporary whiteboard that says “John Smith is reading now.” Once he leaves, the note is erased.

So:  
**JWT = a portable, self‑contained ticket that tells everyone it’s you and what you can do.**  
**Cookie = a stored card that lets the system remember who you are between visits.**  
**Session = a temporary record on the server that tracks your current activity until you finish.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
