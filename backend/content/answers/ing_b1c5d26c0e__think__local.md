---
qid: ing_b1c5d26c0e__think__local
question: 'Explain: Repetition Penalties — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 523
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:43:58-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Identify *what* “repetition penalties” means (e.g., techniques that reduce repeated tokens in generated text).  
   - Assume we’re dealing with transformer‑based language models during inference, not training.  
   - Note that the question asks for an *explanation*, so we’ll describe both the intuition and practical implementation.

**2. Adopt a mental model / framework**  
   - Think of decoding as a search problem over token sequences.  
   - Repetition penalties modify the scoring function used by the decoder (greedy, beam, top‑k, nucleus).  
   - Treat the penalty as a bias that discourages low‑entropy or self‑repeating outputs.

**3. Step‑by‑step reasoning toward the answer**  
   1. **Explain the problem**: models often generate repetitive loops (“I think … I think …”).  
   2. **Show the standard decoding score** (logits → log‑probabilities).  
   3. **Introduce the penalty term**: subtract a constant or scale probabilities for tokens seen before.  
   4. **Different formulations**: *frequency penalty* (count occurrences), *presence penalty* (binary), *dynamic scaling*.  
   5. **Illustrate with pseudo‑code or equations** and how it plugs into beam/top‑k.  
   6. **Mention practical settings** in popular libraries (e.g., Hugging Face’s `repetition_penalty` or OpenAI’s `frequency_penalty`).  

**4. Common traps to avoid**  
   - Confusing *penalties* with *constraints* (hard vs soft).  
   - Over‑penalizing, which can make output dull or incoherent.  
   - Ignoring that different decoders handle penalties differently.  
   - Forgetting that the penalty is applied per token, not per sequence.

**5. Sanity‑check & communicate out loud**  
   - Verify the formula reduces probability of a repeated token by at least the factor `1/penalty`.  
   - Test mentally: if a token has been used twice and penalty=2, its score halves.  
   - Summarize succinctly: “During inference we adjust each candidate token’s logit by subtracting a term proportional to how often it has appeared before, thereby discouraging loops while still allowing the model to produce meaningful repeats when necessary.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
