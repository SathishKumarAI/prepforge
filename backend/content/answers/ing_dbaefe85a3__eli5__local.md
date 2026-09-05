---
qid: ing_dbaefe85a3__eli5__local
question: 'Explain: Architectures and objectives — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 240
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:21:54-05:00'
sources: []
---

Imagine building a gigantic library that can answer any question you ask, but it learns by reading every book ever written.  
**Architectures** are the layout of this library:  

* *Transformer* is like a super‑fast librarian who reads all pages at once and remembers how each word relates to every other word.  
* *Encoder–decoder* is two librarians working together—one summarizes what you give them, the other writes the answer.  

**Objectives** are the rules that tell the librarian how to learn:  

* **Language modeling** = “predict the next page in a book.” The librarian practices by guessing each word before it appears and gets rewarded when right.  
* **Fine‑tuning** = “follow specific instructions.” After reading many books, you give the librarian a new set of rules (e.g., always answer politely) so it behaves differently.

So an LLM is a library that reads everything, remembers patterns through its architecture, and learns to respond by following objectives—just like a librarian trained both by experience and by your guidance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
