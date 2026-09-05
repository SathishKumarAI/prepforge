---
qid: ing_4804992eb3__think__local
question: 'Explain: Compare greedy decoding, top-k sampling, and top-p (nucleus) sampling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 579
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:13:47-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - Identify that we’re comparing *decoding strategies* used in language‑model generation.  
   - Assume a basic understanding of probability distributions over next tokens and the goal: generate coherent text while balancing determinism vs diversity.

**2. Choose a mental model / framework**  
   - Think of decoding as a **sampling algorithm on a categorical distribution** (the softmax output).  
   - Define three axes to compare: *determinism*, *diversity*, and *computational cost*.

**3. Reason step‑by‑step toward the answer**  

| Strategy | How it works | Deterministic? | Diversity control | Typical use |
|----------|--------------|-----------------|-------------------|-------------|
| **Greedy decoding** | Pick token with highest probability at each step. | Yes – always the same output for a given model & seed. | None – no randomness, low diversity. | Fast, baseline generation when you want the most likely sentence (e.g., summarization). |
| **Top‑k sampling** | Keep top *k* tokens by probability, renormalize, then sample from them. | No – random choice among k options. | Controlled: larger *k* → more diversity; smaller *k* → closer to greedy. | Useful when you want a balance between plausibility and variety (chatbots). |
| **Top‑p (nucleus) sampling** | Keep the smallest set of tokens whose cumulative probability ≥ *p*, then sample from this “nucleus.” | No – random choice within nucleus. | Adaptive: for high‑probability words, *k* is small; for low‑probability tails, *k* grows → more diversity only where needed. | Often yields the best trade‑off between coherence and creativity (story generation). |

**4. Common traps to avoid**  
   - Mixing up “top‑k” with “temperature” scaling.  
   - Assuming greedy decoding always produces the best text; it can be repetitive or overly safe.  
   - Forgetting that *p* is a cumulative probability, not a fixed count.

**5. Sanity‑check & verbalize**  
   - Verify each strategy’s behavior on a toy distribution (e.g., 10 tokens with known probs).  
   - Explain to a colleague: “Greedy always picks the highest bar; top‑k says ‘pick one of these k tallest bars’; nucleus says ‘pick from the set that covers at least p% of total probability mass, so we may include many small bars if the tail is heavy.’”  
   - Ensure you mention trade‑offs and typical application scenarios to make the comparison concrete.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
