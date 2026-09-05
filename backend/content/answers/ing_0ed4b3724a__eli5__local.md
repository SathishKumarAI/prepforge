---
qid: ing_0ed4b3724a__eli5__local
question: 'Explain: How Consistent Hashing Works — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 222
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:58:59-05:00'
sources: []
---

Imagine a round table where every seat is numbered from 0 to 999 000 (a huge circle). Each customer has a name, and we use a simple “hash” function that turns the name into one of those numbers—like turning *Alice* into 123 456 or *Bob* into 987 654.  
When a customer arrives, we look around the table clockwise until we find the first seat whose number is **≥** the hash value; that seat’s computer will store their data. If a new computer joins the system, it takes a few seats on the circle. Only customers who were mapped to those newly occupied seats need to move—most customers stay exactly where they were.  

So consistent hashing is like a circular seating chart: adding or removing seats (servers) only nudges a small group of people; everyone else keeps their seat. It keeps data balanced and limits reshuffling, making large systems smooth even when servers come and go.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
