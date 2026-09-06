---
qid: ing_e1194cdd6e__fp__local
question: 'Explain: The interview loop — Google Deepmind'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 452
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:58:26-05:00'
sources: []
---

### The “Interview Loop” – a DeepMind design pattern  

**Problem to solve**  
When training a large language model (LLM) for dialogue, the system must learn *both* to generate plausible text and to *evaluate* that text against human preferences. A naïve approach trains the generator once on static data; the evaluator is then hand‑crafted or trained separately, leading to a mismatch: what the generator produces during inference may differ from what the evaluator sees during training.

**Why a loop?**  
DeepMind’s “interview loop” couples a *policy* (the dialogue agent) and a *value network* (human‑like preference scorer) in a closed reinforcement‑learning cycle. At each iteration:
1. **Generate**: The policy produces candidate responses to prompts.  
2. **Judge**: The value network scores them using past human ratings.  
3. **Update**: The policy is updated via policy gradients weighted by the value scores; the value network is fine‑tuned on new paired data (prompt, response, score).  

This recursion ensures that both components co‑evolve on the same distribution of prompts and responses they will encounter at deployment.

**Deeper principle**  
It’s an instance of *self‑supervised bootstrapping*: the system creates its own supervision signal. The policy learns to maximize expected value—an optimization over a stochastic policy space—while the value network learns a latent reward function approximating human preference, effectively compressing high‑dimensional preference data into a tractable scalar.

**Non‑obvious insight**  
The loop’s stability hinges on *calibrated exploration*: if the policy becomes too deterministic early, the value network never sees diverse responses and overfits to a narrow region of the space. DeepMind mitigates this by injecting controlled noise (e.g., temperature sampling) each round, guaranteeing that the value network continues to learn from a rich distribution—an often overlooked but critical design choice for long‑term convergence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
