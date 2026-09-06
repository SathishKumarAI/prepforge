---
qid: ing_d30b87f4e9__think__local
question: 'Explain: Sinusoidal (Original Transformer) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 532
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:53:30-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What is “Sinusoidal” here?* In the original Transformer, positional encodings are sinusoidal functions of token index and dimension.  
   - *Who is the audience?* Assume they know basic NLP but not the math behind LLM internals.  
   - *Scope:* Focus on why sinusoids were chosen, how they’re computed, and their role in attention.

**2️⃣ Mental model / framework**  
   - **Token → Embedding → Positional Encoding → Sum → Self‑Attention**  
   - Think of position as a “time stamp” that must be injective (unique per index) yet smooth enough to generalize to unseen lengths.  
   - Use the *Fourier series* intuition: sinusoids form an orthogonal basis, enabling linear interpolation.

**3️⃣ Step‑by‑step reasoning**  
   1. **Define the encoding matrix** `PE[pos, i] = sin(pos / 10000^(i/d))` for even `i`, and cosine for odd.  
   2. Show that adjacent positions differ by a constant phase shift → preserves relative distance.  
   3. Explain how the dot‑product attention can learn to use these differences: the model learns weights on sin/cos components, effectively learning “how far apart” tokens are.  
   4. Discuss *why* not learned embeddings? They break extrapolation beyond training lengths; sinusoids generalize.

**4️⃣ Common traps & wrong turns**  
   - **Mixing up absolute vs relative encoding:** Sinusoidal is *absolute*, but the model learns *relative* through attention weights.  
   - **Assuming more complex functions are better:** Over‑parameterizing positional info can hurt generalization.  
   - **Ignoring dimensionality effects:** Even/odd split and scale factor 10000 must be remembered; dropping them leads to degenerate encodings.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that `PE[pos]` is unique for each pos: plot a few rows, see distinct patterns.  
   - Check that scaling keeps values in a reasonable range (≈[-1,1]).  
   - Explain aloud: “We encode position as a combination of sine and cosine waves at different frequencies so the model can infer relative distance via linear operations.”  

Use this checklist whenever you need to explain sinusoidal positional encodings or similar LLM internals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
