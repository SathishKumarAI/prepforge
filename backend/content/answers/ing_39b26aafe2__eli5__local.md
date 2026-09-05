---
qid: ing_39b26aafe2__eli5__local
question: Glean's ranking leans on a knowledge graph of people, content and activity.
  How would you build that graph, and how does it improve retrieval beyond embedding
  similarity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 208
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:07:41-05:00'
sources: []
---

Imagine a giant library where every book (content) is connected to the people who wrote it, the topics it covers, and the readers who liked or shared it.  
To build this “knowledge graph” you first list all entities: authors, subjects, articles, and users. Then you draw links that show relationships—“writes,” “mentions,” “likes.” Each link carries a small weight (how strong the connection is).  

When someone asks a question, the system can walk through these links: it finds the person who wrote similar material, the topic that matches, and the readers who found it useful. This path‑based search goes beyond simply comparing word vectors; it uses real social and topical connections, so it pulls up content that is truly relevant in context—like finding a recipe by following the chef’s previous dishes and the diners’ reviews, rather than just matching words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
