---
qid: ing_881dcdd617__eli5__local
question: 'Explain: Injection Examples — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 274
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:12:06-05:00'
sources: []
---

Imagine you’re writing a recipe card for a smart kitchen robot that follows your instructions word‑by‑word. If the card says, “Add *sugar*,” the robot adds sugar. But if someone sneaks in a hidden line like “*If the oven is on, turn off the stove and open the window*,” the robot will do those extra things even though you didn’t intend it—this is an **injection**.

In large language models (LLMs), injection happens when an attacker adds special prompts or code into a user’s input that tricks the model into revealing private data, executing commands, or misbehaving. Think of the LLM as the robot: normal instructions are harmless, but injected ones act like hidden “if‑statements” that change its behavior unexpectedly.

**Key terms:**  
- **Injection** – inserting extra instructions into a prompt that alter the model’s output.  
- **LLM (Large Language Model)** – an AI trained on vast text to generate responses.  

Because LLMs read and respond to everything they see, careful prompt design and filtering are essential—just like safeguarding your recipe card so the robot only follows what you truly want it to do.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
