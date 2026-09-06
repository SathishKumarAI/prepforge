---
qid: ing_cdd8a1917e__think__local
question: 'Explain: Title: Train Short, Test Long: Attention with Linear Biases Enables
  Input Length Extrapolation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 418
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:33:30-05:00'
sources: []
---

**1️⃣ Clarify the ask and set assumptions**  
- The user wants a *thinking‑process* (not the final answer) about how one would explain that paper.  
- Assume they’re familiar with basic ML concepts but not the specific method.  
- Treat “explain” as describing the motivation, core idea, and implications.

**2️⃣ Adopt a mental model**  
Use the classic *“problem → limitation → solution → evidence → impact”* framework for research papers:  
1. Identify the problem (short‑training, long‑testing).  
2. Explain why existing attention fails to extrapolate.  
3. Show how linear biases modify attention.  
4. Summarize experimental validation.  
5. Conclude on broader significance.

**3️⃣ Step‑by‑step reasoning**  
- Start by recalling the standard self‑attention formula and its positional bias.  
- Note that training only up to a certain sequence length limits learned relative positions.  
- Linear biases are simple additive terms that grow with token distance, allowing the model to generalize beyond seen lengths.  
- Explain how these biases can be trained efficiently (just two parameters per head).  
- Mention key experiments: training on 128 tokens, testing up to thousands, and performance staying competitive.

**4️⃣ Common traps**  
- Don’t get lost in math; keep explanations intuitive.  
- Avoid assuming the reader knows why extrapolation matters; briefly motivate it.  
- Don’t over‑emphasize speed gains; focus on conceptual novelty.  

**5️⃣ Sanity‑check & verbalise**  
- Re‑state each part aloud: “We train a transformer that can handle 128 tokens… but we add linear biases so it still works on 2048.”  
- Ask yourself if the listener could follow without extra jargon.  
- If gaps appear, insert a quick analogy (e.g., “like teaching someone to read any book length after learning short ones”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
