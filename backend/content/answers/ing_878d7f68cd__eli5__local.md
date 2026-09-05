---
qid: ing_878d7f68cd__eli5__local
question: 'Explain: Domain name system — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 217
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:10:59-05:00'
sources: []
---

Think of the Internet as a giant library that can’t give books away by their titles alone—most people know a book’s title but not its exact shelf location. The **Domain Name System (DNS)** is like the library’s index card system: you write down “www.example.com” on a card, and the DNS tells your computer exactly which shelf (IP address) to go to.  

When you type a web address, your computer asks a local “index office” (a DNS server). If that office doesn’t know the answer, it forwards the request up the chain until someone does—much like asking a librarian for help if you can’t find the card yourself. The result is a quick, reliable way to turn human‑friendly names into machine‑readable addresses, just as a library’s index lets readers find books without memorizing every location.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
