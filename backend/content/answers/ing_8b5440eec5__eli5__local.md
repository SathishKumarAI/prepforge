---
qid: ing_8b5440eec5__eli5__local
question: 'Explain: Title: From Storage to Steering: Memory Control Flow Attacks on
  LLM Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 279
total_tokens: 445
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:17:17-05:00'
sources: []
---

Imagine a large library (the LLM agent) where each book is a chunk of memory and the librarian’s job is to hand out the right pages when someone asks for information. In a **memory‑control‑flow attack**, an intruder sneaks into the library’s backstage, swapping or tampering with books so that when the librarian pulls one out, it actually contains malicious instructions instead of the requested text.

Think of the librarian following a recipe: “Take page 42 from book A, then page 7 from book B.” If someone replaces page 42 with a different, harmful paragraph, the final dish (the model’s answer) will be poisoned. The attacker doesn’t change the recipe itself; they simply manipulate the storage—the memory—so that the flow of data (control flow) leads to an unintended, harmful outcome.

Key terms:  
- **LLM agent** – a language model that processes and generates text.  
- **Memory** – where the model keeps internal information while answering.  
- **Control flow** – the sequence in which the model reads or writes memory during inference.  

By corrupting memory at precise moments, attackers can steer the LLM’s responses toward malicious content without altering its core code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
