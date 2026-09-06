---
qid: ing_7798f4769c__think__local
question: 'Q: What is a "Teleprompter" in the context of DSPy?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 546
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:54:00-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- Assume “DSPy” refers to *Data‑Science Programming* or a specific library that uses a **teleprompter** metaphor for prompting in language models.  
- Clarify whether the user wants a conceptual explanation, an API reference, or a practical example.

**2️⃣ Choose a mental model**  
- Treat the teleprompter as a *prompt‑management tool* that feeds incremental text to a model, similar to how a human reads lines on a screen while speaking.  
- Map its parts: **input buffer**, **output stream**, **control signals** (pause, rewind), and **state persistence**.

**3️⃣ Step‑by‑step reasoning**  
1. Define what “prompt” means in DSPy.  
2. Explain the teleprompter’s role: presenting a pre‑written prompt that can be edited or scrolled during inference.  
3. Describe how it interacts with the model (streaming tokens, maintaining context).  
4. Mention any DSPy-specific APIs (`Teleprompter`, `prompt_stream()`, etc.) and typical usage patterns.

**4️⃣ Common traps to avoid**  
- Mixing up a teleprompter with a *standard* prompt template.  
- Assuming the teleprompter automatically optimizes token limits— it merely displays text, not compresses it.  
- Forgetting that state (e.g., cursor position) must be explicitly managed if you want “rewind” or “pause”.

**5️⃣ Sanity‑check & communicate**  
- Verify the explanation matches DSPy’s docs (look for `Teleprompter` class).  
- Use a concrete code snippet to illustrate usage, then explain each line.  
- Summarize key takeaways: it’s a UI/UX abstraction for incremental prompting, not an algorithmic improvement.

---  

> **Answer**  
In DSPy, a *Teleprompter* is a helper component that manages and streams a pre‑written prompt to the language model in real time. It mimics a human teleprompter: you can scroll, pause, or edit the text while the model consumes it token by token. The Teleprompter keeps track of cursor position, handles streaming output, and exposes methods like `prompt()` (to set the initial prompt), `scroll_to(n)` (move to line n), and `stream()` (yield tokens). It’s useful for interactive demos or long‑form generation where you want to see the model’s response as it “reads” the prompt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
