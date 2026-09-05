---
qid: ing_9f19394dc9__eli5__local
question: 'Explain: Q12: Explain the ReAct pattern — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 213
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:49:41-05:00'
sources: []
---

**ReAct (Reason + Act)** is a way for an AI to think and act in one loop, just like you solving a puzzle step by step.

Imagine you’re a detective who has a notebook and a phone.  
1. **Reason**: You write down clues (“I know the suspect’s name, but I don’t have the address”).  
2. **Act**: You use your phone to look up the address, then write it back in the notebook.

The AI does the same: first it *reason*—formulate a question or plan (e.g., “What is the capital of France?”). Then it *acts*—send that question to an external tool (a search engine or database), get the answer, and put it back into its internal memory. It repeats this until the puzzle is solved.

So ReAct lets the AI think, reach out for information, and incorporate the result—all in a single, transparent loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
