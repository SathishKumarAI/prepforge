---
qid: ing_8de09a0a32__eli5__local
question: 'Explain: Triad Failure Modes — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 267
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:21:31-05:00'
sources: []
---

Imagine you’re a detective looking for clues in three different rooms: the *source room* (where data comes from), the *processing room* (the AI’s brain), and the *output room* (what the AI tells you). A **Triad Failure Mode** happens when any one of those rooms gives bad evidence, so your final verdict is wrong.

1. **Source‑room failure** – The original facts are shaky or biased (like a rumor in the news feed).  
2. **Processing‑room failure** – The AI misreads or mixes up clues (its algorithm gets confused).  
3. **Output‑room failure** – Even with good clues and clear thinking, the answer is garbled or incomplete (the response is vague).

RAG (Retrieve‑Augment‑Generate) systems are built to pull fresh facts, add them to the AI’s memory, and then produce an answer. If any of the three rooms fails, the RAG chain breaks, leading to a wrong or misleading reply. The triad analogy reminds us that accuracy depends on clean data, smart processing, and clear communication—all must work together for trustworthy AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
