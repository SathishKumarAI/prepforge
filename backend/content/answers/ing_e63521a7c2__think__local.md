---
qid: ing_e63521a7c2__think__local
question: 'Explain: Your team extended a model from 32k to 256k with YaRN plus a short
  fine-tune. Long-context evals improved, but users say it got worse on ordinary short
  prompts and it''s noticeably more verbose. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 631
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:11:08-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**  
- *What changed?* Only the context window (32 k → 256 k) and a short fine‑tune with YaRN.  
- *What is “worse” on short prompts?* Lower accuracy, higher hallucination rate, or just more verbose responses?  
- Assume the model weights are unchanged except for the positional embedding scaling; assume inference speed is comparable.

**2️⃣ Mental model: contextual vs. local attention & loss‑balance**  
- YaRN modifies positional encodings to allow far‑range context but may shift how the network weighs short‑term tokens.  
- The fine‑tune objective (likely cross‑entropy) was run on a mixed dataset; if the distribution over lengths is skewed toward longer contexts, the model can overfit to “longer” patterns (e.g., using more tokens per answer).

**3️⃣ Step‑by‑step reasoning**  

| Step | What to check | Why it matters |
|------|---------------|----------------|
| 1. Token‑level loss curves for short vs long prompts | Detect if loss is higher on short inputs → model under‑trained there. | Indicates imbalance. |
| 2. Attention maps | Are heads focusing too broadly even on short sequences? | May cause verbosity or loss of focus. |
| 3. Temperature/length penalty in decoding | Has the fine‑tune altered these defaults? | Verbose outputs often come from low temperature or missing length penalties. |
| 4. Dataset composition during fine‑tune | Count examples per prompt length; check for overrepresentation of long contexts. | Imbalance leads to bias toward longer responses. |
| 5. Prompt‑specific evaluation | Run the same short prompts before/after fine‑tune with identical decoding settings. | Is the drop due to the model or the inference pipeline? |

**4️⃣ Common traps**  
- *Assuming only positional embeddings matter*: ignore changes in training data distribution.  
- *Blaming the tokenizer*: length of output is not a token‑count artifact but a modeling one.  
- *Over‑correcting by adding a length penalty without testing*: can hurt long‑context performance.

**5️⃣ Sanity‑check & communication**  

1. **Reproduce**: Run a small validation set with both models, record loss, exact match, and average token count.  
2. **Explain**: “The fine‑tune likely shifted the model’s attention distribution toward longer contexts; as a result, it prefers generating more tokens even when unnecessary.”  
3. **Propose fixes**:  
   - Re‑balance training data or add a length‑regularization term.  
   - Fine‑tune with a mixed‑length curriculum.  
   - Adjust inference hyperparameters (temperature, top‑k, length penalty).  

Wrap the findings in a concise report and iterate on one change at a time to isolate the effect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
