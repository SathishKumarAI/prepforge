---
qid: ing_e388c2662d__eli5__local
question: An enterprise customer says "Claude hallucinates too much" in their RAG-based
  knowledge assistant. You're the applied engineer on the account. First 48 hours?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 277
total_tokens: 457
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:35:49-05:00'
sources: []
---

Imagine your knowledge assistant is a chef who reads a huge cookbook (the RAG system) and then improvises dishes (answers). The customer says the chef keeps “hallucinating” – making up ingredients that aren’t in any recipe. As the applied engineer, you have 48 hours to get the kitchen back on track.

**Day 1: Diagnose the pantry**  
– Pull the logs of every query and answer.  
– Spot patterns where the assistant pulls text from unrelated sources (the “hallucinations”).  
– Check that the retrieval step is actually fetching the right documents; if not, tweak the search‑engine filters or re‑index the data.

**Day 2: Re‑train the taste buds**  
– Fine‑tune the language model on a smaller, high‑quality set of verified Q&A pairs.  
– Add a “confidence filter”: before giving an answer, the assistant checks whether its source is in the top‑retrieved documents and only answers if it has a solid citation.

Once you’ve fixed retrieval and added that confidence guard, give the customer a demo. They’ll see the chef’s dishes are now reliable and no longer made up from thin air.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
