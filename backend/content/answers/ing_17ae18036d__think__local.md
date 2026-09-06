---
qid: ing_17ae18036d__think__local
question: We set temperature to 0, so outputs should be deterministic. Why do users
  still get different answers to the same prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 574
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:18:06-05:00'
sources: []
---

**1. Clarify the question and assumptions**

- *What is “temperature = 0” really doing?*  
  It biases sampling toward the highest‑probability token, but it does **not guarantee** absolute determinism because of other sources of nondeterminism (model state, caching, tokenization).  
- *Assume a typical API call with temperature=0 and no additional randomness flags.*  

**2. Mental model / framework**

Treat the generation as a two‑stage process:  
1) **Token prediction** – the model computes logits for every next token.  
2) **Sampling strategy** – the temperature parameter scales logits before applying argmax or top‑k sampling.  
If temperature=0, the scaling collapses to an infinite penalty on lower‑probability tokens, leaving only the max‑logit token as viable. Yet ties and other mechanisms can still intervene.

**3. Step‑by‑step reasoning**

- **Tokenization differences**: The same prompt may be split differently (e.g., due to leading/trailing spaces or special characters), altering the initial hidden state.
- **Model stochasticity beyond temperature**: Some implementations add a tiny epsilon noise for numerical stability, or use deterministic but *different* tie‑breaking rules on each run.
- **Cache / context effects**: If previous generations are cached differently (e.g., due to concurrent requests), the internal state can shift slightly, changing logits even with temperature=0.
- **Multiple “max” tokens**: When two tokens share the exact highest logit, the tie‑breaker may be random or based on token order, leading to divergent outputs.

Thus, while temperature=0 heavily reduces randomness, it doesn’t eliminate all sources of nondeterminism.

**4. Common traps to avoid**

- *Assuming argmax is always deterministic.*  
  In practice, frameworks may use softmax with a very small epsilon or stochastic tie‑breakers.  
- *Ignoring tokenization quirks.*  
  Even a single invisible character can change the hidden state enough to flip the top token.  
- *Overlooking caching and context differences.*  
  Two identical prompts sent in different sessions may experience different internal states.

**5. Sanity‑check & communication**

- **Reproduce locally**: Run the same prompt twice with an exact copy of the tokenizer and model weights; if outputs differ, inspect logits for ties.  
- **Check API docs**: Verify whether the provider guarantees determinism at temperature=0 or documents hidden randomness.  
- **Explain to stakeholders**: “Temperature controls sampling but does not eliminate all nondeterministic behavior; differences usually arise from tokenization or internal tie‑breaking.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
