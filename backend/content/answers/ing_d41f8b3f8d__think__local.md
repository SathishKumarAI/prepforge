---
qid: ing_d41f8b3f8d__think__local
question: Explain classifier-free guidance. What actually happens when you turn the
  scale up?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 396
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:56:50-05:00'
sources: []
---

**1️⃣ Clarify & state assumptions**  
- Ask what “classifier‑free guidance” refers to (diffusion models, no external classifier).  
- Assume the user knows basic diffusion sampling but not the math of guidance.  

**2️⃣ Pick a mental model**  
- Think of diffusion as two processes: *unconditioned* generation and *conditional* generation.  
- Guidance is simply adding a weighted difference between these two to steer samples toward the condition.  

**3️⃣ Step‑by‑step reasoning**  
1. Start from the standard reverse diffusion update `x_{t−1} = f(x_t, t)`.  
2. Compute an *unconditioned* step `u` (no prompt).  
3. Compute a *conditional* step `c` (with prompt).  
4. Combine: `x' = u + w*(c - u)` where `w` is the guidance scale.  
5. Show that when `w=1` we recover the conditional model; as `w→∞`, `x' ≈ c`.  

**4️⃣ Common traps to avoid**  
- Mixing up classifier‑free with classifier‑based guidance.  
- Forgetting that `c - u` is a *direction* in latent space, not a probability.  
- Assuming higher `w` always improves quality; it can amplify artifacts.  

**5️⃣ Sanity‑check & verbalize**  
- Verify dimensions match (both steps produce same shape).  
- Explain intuitively: “turning the scale up tells the model to trust the prompt more, pushing the sample closer to what the conditional predictor would give.”  
- Conclude with a quick example or analogy (e.g., steering a car toward a destination by increasing the throttle on the GPS guidance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
