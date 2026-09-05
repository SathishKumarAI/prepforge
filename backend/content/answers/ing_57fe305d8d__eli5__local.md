---
qid: ing_57fe305d8d__eli5__local
question: 'Explain: Core Architecture — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 235
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:55:58-05:00'
sources: []
---

Think of Claude as a gigantic, well‑organized library that reads and writes in many languages.  
At the heart is **a transformer network**—the “brain” that looks at each word in context, just like a librarian who can predict what book you’ll want next by remembering the whole shelf layout.  

The transformer has two main parts:  
* **Self‑attention** (the librarian’s eyes scanning every title) lets Claude weigh how important each word is to the sentence it’s forming.  
* **Feed‑forward layers** (the librarian’s quick mental math) transform those weights into a new, refined message.

Claude is trained on millions of text pairs: for every input sentence it learns which output sentence best follows, like teaching the librarian by giving many “question–answer” examples.  

So, Claude’s core architecture is a transformer that uses self‑attention to understand context and feed‑forward layers to generate answers, all learned from vast amounts of paired text data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
