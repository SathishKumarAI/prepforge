---
qid: ing_45ac6655dc__eli5__local
question: 'The take-home says: "Build a tool that answers questions over our public
  docs. You have a weekend." How do you approach it, and what do you deliberately
  skip?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 327
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:26:52-05:00'
sources: []
---

Think of your public docs as a big library that’s too heavy for people to sift through quickly. The goal is to build a “smart librarian” that can answer any question in seconds, using only the weekend.

**Step‑by‑step plan**

1. **Pick a quick search engine** – use a lightweight vector‑search tool (e.g., FAISS) that can load all text into memory and find similar passages fast.  
2. **Turn docs into searchable chunks** – split PDFs or webpages into 200–300 word blocks, embed each with an inexpensive model (like OpenAI’s `text-embedding-ada-002`).  
3. **Ask a question, retrieve the best chunk** – feed the user query to the same embedding model, find top‑k matches, and hand that text to a small language model for a concise answer.  
4. **Wrap it in a simple web page** – a single button “Ask me anything” and a textbox; results appear instantly.

**What to skip**

- *Full‑scale index pipelines* (Elasticsearch, Solr) or cloud‑heavy services that need weeks of setup.  
- *Training your own language model*—too time‑consuming for a weekend.  
- *Complex UI features* like voice input or elaborate visualizations; focus on the core question‑answer loop.

With this lean stack you’ll have a functional “smart librarian” by Sunday night, ready to serve your users without the overhead of big systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
