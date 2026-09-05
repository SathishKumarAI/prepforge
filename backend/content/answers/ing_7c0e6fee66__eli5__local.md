---
qid: ing_7c0e6fee66__eli5__local
question: What is an ontology in the Palantir sense, and why put LLM agents on top
  of one instead of on raw tables and documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 242
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:53:26-05:00'
sources: []
---

Imagine a city map that shows not just streets (the raw data) but also labels every building with what it is—library, hospital, bakery—and notes how they’re connected: the library shares books with the school, the bakery supplies bread to the café. That labeled, connected map is Palantir’s “ontology.” It gives a shared vocabulary and rules so everyone knows that “patient” means the same thing, whether you’re looking at an electronic chart or a handwritten note.

Putting large‑language‑model (LLM) agents on top of this ontology lets them speak the city’s language instead of trying to guess it from raw tables. The LLM can instantly understand that “prescribe medication” refers to the pharmacy module and that “follow‑up visit” links to scheduling, because those relationships are already baked into the ontology. If you put an LLM on raw data, it would have to learn all those connections from scratch—like trying to navigate a city without a map. The ontology gives the agent context, consistency, and safety, letting it answer questions accurately and safely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
