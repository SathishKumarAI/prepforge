---
qid: ing_e6c5e32a8a__eli5__local
question: 'Explain: Hybrid retrieval: why both, and how to fuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 250
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:36-05:00'
sources: []
---

**Hybrid Retrieval – like a librarian who checks both the index card box and the digital catalog**

Imagine you’re looking for a book on “renewable energy.” A *sparse* search (the old index cards) pulls up exact matches: titles that literally contain the phrase “renewable energy.” A *dense* search (the modern database) looks at how words relate to each other, so it can find books about solar power even if they never say the word “renewable.”

Using both methods gives you a richer set of results: the sparse system guarantees precision on exact terms, while the dense system adds recall by catching related ideas. The system then *fuses* these lists—often by ranking them together or blending scores—to present the most relevant documents to the user.

**Key terms**

- **Sparse retrieval**: looks for exact keyword matches (think index cards).  
- **Dense retrieval**: uses machine‑learned embeddings that capture word meaning and context.  
- **Fusion**: combining two ranked lists into a single, better ranking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
