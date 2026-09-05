---
qid: ing_a3e0b024a7__eli5__local
question: 'Q: What is the "Property Graph" in LlamaIndex and why is it superior to
  basic Vector RAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 209
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:58:10-05:00'
sources: []
---

Imagine a library where every book is not just a pile of pages but also a person who knows other people.  
In LlamaIndex’s **Property Graph**, each *node* (like a document or an idea) can have *properties*—facts about it, such as its title, author, or date—and it can be linked to other nodes with *edges* that describe the relationship (“is part of”, “cites”, “belongs to topic”).  
So instead of just storing a flat list of text (basic Vector RAG), you get a map where you can ask, “Show me all documents about climate change that cite this study,” and the system follows the links directly.  

Because the graph keeps both content *and* context together, it’s faster to retrieve related pieces, supports richer queries, and adapts better when new information arrives—making it more powerful than plain vector search alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
