---
qid: ing_ac4deddfdc__think__local
question: 'Explain: Input Isolation (XML & Markers) — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 513
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:22:42-05:00'
sources: []
---

### 1. Clarify the question and state assumptions  
- **What is being asked?** We need to explain *Input Isolation*—specifically how XML and marker-based techniques help defend against prompt injection in AI systems.  
- **Assumptions:**  
  - The audience knows what prompt injection is (maliciously crafted user input that manipulates the model’s behavior).  
  - They understand basic NLP concepts but may not be familiar with XML or marker strategies.

### 2. Adopt a mental‑model framework  
Use a *“pre‑processing → protection → post‑processing”* pipeline:  
1. **Pre‑processing:** wrap user data in a safe container (XML/markers).  
2. **Protection:** the model treats containers as literal tokens, not executable prompts.  
3. **Post‑processing:** strip or interpret containers only after the model’s output is verified.

### 3. Step‑by‑step reasoning toward the answer  
1. **Explain prompt injection** in a nutshell to set context.  
2. **Introduce XML/marker isolation**: show how tags (e.g., `<user_input>…</user_input>` or `<<INPUT>>…<</INPUT>>`) become part of the token stream that the model must treat literally.  
3. **Show how isolation works:** the model can’t re‑interpret the content inside tags; it’s just text.  
4. **Mention practical implementation**: using a tokenizer that preserves tag tokens, or adding special “escape” sequences.  
5. **Discuss limitations and complementing techniques** (e.g., prompt sanitization, role-based prompts).

### 4. Common traps to avoid  
- **Over‑simplifying XML:** forget that tags themselves can be manipulated if not escaped.  
- **Assuming markers are foolproof:** attackers may find ways around them; combine with other defenses.  
- **Neglecting performance impact:** adding many tokens may affect latency or cost.

### 5. Sanity‑check & communicate clearly  
- **Re‑read the explanation** to ensure each step logically follows and no jargon is unexplained.  
- **Use a concrete example** (e.g., user sends `Hello <b>world</b>`; show how it’s wrapped as `<user_input>Hello <b>world</b></user_input>`).  
- **Invite questions or clarifications** to confirm understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
