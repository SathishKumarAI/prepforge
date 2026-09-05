---
qid: ing_418dfb5d29__think__local
question: Explain min-p sampling and repetition/frequency penalties. When do standard
  sampling settings fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 495
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:59:27-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- *Clarify*: “min‑p sampling” is a technique that discards tokens whose cumulative probability falls below a threshold *p*; “repetition/frequency penalties” refer to modifying logits based on how often a token has appeared.  
- *Assumptions*: We’re discussing transformer‑based language models, decoding at inference time, and the question concerns when vanilla greedy/top‑k sampling breaks down.

**2️⃣ Mental model / framework**  
- Treat decoding as a probability distribution over the vocabulary that gets reshaped by two filters:  
  1. **Token filtering (min‑p)** – ensures we only consider tokens with enough support.  
  2. **Logit reweighting (penalties)** – discourages repeated or overly frequent words.  
- View “standard sampling” as the baseline where no such adjustments are made; it can over‑concentrate on high‑probability but generic outputs.

**3️⃣ Step‑by‑step reasoning toward the answer**  
1. Explain how min‑p works: compute cumulative sorted probabilities, drop tokens until the tail is below *p*.  
2. Show the formula for repetition penalty (e.g., divide logits by a factor > 1 for already seen tokens).  
3. Discuss frequency penalty (subtract a value proportional to past count).  
4. Point out that standard sampling fails when the model’s probability mass is too skewed—common in long‑form generation or with high‑temperature settings, leading to dull or repetitive text.

**4️⃣ Common traps & wrong turns**  
- Mixing up *top‑k* vs. *min‑p*: they’re complementary but distinct.  
- Forgetting that penalties are applied per token, not globally.  
- Assuming min‑p always improves quality; it can cut off rare yet valid continuations.

**5️⃣ Sanity‑check & verbalize**  
- Verify the math: cumulative sum logic for min‑p, logit scaling for penalties.  
- Run a quick mental experiment: with *p* = 0.05, what tokens survive?  
- Explain to an audience that standard sampling collapses when the model’s confidence is over‑concentrated or the context induces loops—exact situations where these techniques shine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
