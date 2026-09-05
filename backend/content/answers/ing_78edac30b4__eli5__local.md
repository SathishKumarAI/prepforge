---
qid: ing_78edac30b4__eli5__local
question: 'Explain: Concurrency Issues — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 249
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:48:22-05:00'
sources: []
---

Think of a tiny library that turns long book titles into short, memorable codes—TinyURL is the librarian, and each code is a unique key to its full address. When many people ask for new codes at once (concurrency), the librarian must keep track of which keys are already taken so she never gives out the same one twice.

A common glitch happens when two visitors arrive simultaneously: both look up “is 42” in the shelf, see it’s free, and each writes it down. The next day the library has two books with the same key—one address is lost, and future readers are misdirected. This race condition occurs because the librarian didn’t lock the shelf while checking and writing.

The fix is simple: before a visitor gets a code, the librarian locks that part of the shelf, checks, writes, then releases the lock. In database terms, it’s like using a “SELECT … FOR UPDATE” or an atomic insert. That way only one visitor can claim a particular key at a time, keeping TinyURL’s short links safe and accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
