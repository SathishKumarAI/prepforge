---
qid: ing_a47f00df3b__think__local
question: 'Explain: A user reports a bad answer. Walk me through how you debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 377
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:56:40-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
- Ask the user what “bad” means (irrelevant, incorrect, offensive).  
- Assume I have no prior context; I’ll treat the reply as a single instance.

**2️⃣ Adopt a debugging framework**  
- *Input → Model → Output*: check each stage.  
- Use the *“fault tree”* approach: identify where the chain may break (prompt parsing, token selection, hallucination).

**3️⃣ Step‑by‑step reasoning**  
1. **Re‑run the prompt** in a sandbox to see if the same output occurs.  
2. Inspect the **token log** or hidden layers (if available) for unusual patterns—e.g., repeated phrase or off‑topic tokens.  
3. Verify that the **knowledge cutoff** and domain constraints apply; maybe the answer relies on outdated data.  
4. Check for *prompt injection* or mis‑interpretation: did I misread a question?  
5. If hallucination is suspected, cross‑reference with reliable sources or ask clarifying follow‑up questions.

**4️⃣ Common traps to avoid**  
- Assuming the issue lies only in the output; ignore prompt ambiguities.  
- Over‑relying on external tools that may not reflect the model’s internal state.  
- Forgetting that a single bad answer could be stochastic; always test reproducibility.

**5️⃣ Sanity‑check & communicate**  
- Summarize findings concisely: “The issue originates from an ambiguous prompt leading to hallucination.”  
- Offer concrete fixes: rephrase the prompt, add constraints, or provide missing context.  
- Invite user feedback on the revised answer to confirm resolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
