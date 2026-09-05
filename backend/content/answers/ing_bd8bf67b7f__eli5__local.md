---
qid: ing_bd8bf67b7f__eli5__local
question: 'Explain: Prefill Phase — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 234
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:37:32-05:00'
sources: []
---

Think of an AI model as a giant library that can answer any question, but it first needs to “pre‑load” the right books into its hands before answering.  
During the **Prefill Phase** the system takes your query and runs it through a quick, lightweight version of the model (a tiny librarian) that only looks at the whole sentence once. This librarian reads every word, decides which parts are most relevant, and pushes those important snippets into a “buffer”—the pre‑filled memory.  
Later, when the full, heavy‑weight model starts answering, it can pick straight from this buffer instead of re‑reading everything. It’s like having a notebook with highlighted passages ready for you to consult before writing a long essay.  

**Key terms**:  
- *Inference pipeline*: the step-by-step process the AI uses to turn your input into an answer.  
- *Prefill phase*: the initial, fast pass that prepares the most useful information for the main answering stage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
