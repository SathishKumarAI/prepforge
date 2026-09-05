---
qid: ing_86692718ea__star__local
question: 'Q: Why do we see a trend towards "Programming" (DSPy) instead of "Prompting"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 348
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:39-05:00'
sources: []
---

**Situation:**  
When I joined the AI product team at a fintech startup, we were tasked with building an automated compliance monitoring tool that needed to interpret complex regulatory texts in real time. Our existing prompt‑based LLM approach was producing inconsistent outputs and required constant fine‑tuning.

**Task:**  
I had to design a system that could reliably generate structured compliance rules from raw documents while keeping the model’s behavior predictable and maintainable for future updates.

**Action:**  
I introduced a “programming” style workflow using DSPy. First, I defined a small set of composable prompt functions—`extract_entities`, `classify_clause`, and `generate_rule`. These were wrapped in Python objects that could be composed into higher‑level routines. I leveraged the LLM’s own inference as an execution engine, passing intermediate results back to the program for validation. To keep performance high, I cached common sub‑queries and used batching to reduce API calls. This approach let me version each function independently and use unit tests on their outputs.

**Result:**  
The new pipeline cut response latency by 35 % (from ~1.2 s per document to 0.8 s) and reduced the error rate in rule generation from 18 % to 4 %. Importantly, our engineering team could now roll out updates to individual prompt modules without retraining the entire model, turning a fragile prompting workflow into a robust, maintainable codebase. I learned that treating prompts as programmable building blocks gives you control over correctness and scalability—key advantages over pure prompting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
