---
qid: ing_59e99a8ea7__fp__local
question: 'Explain: The Five Core Techniques — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 446
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:15:24-05:00'
sources: []
---

**Five Core Techniques – Context Engineering for LLMs**

1. **Prompt Framing** – The *problem* is that a language model has no internal notion of “topic” beyond the tokens it receives. By explicitly structuring the prompt (e.g., “You are an expert in X; answer concisely”), we align the model’s latent policy with the desired task, essentially performing a constrained optimization over the output distribution.  
2. **Chain‑of‑Thought Prompting** – Humans solve complex problems by breaking them into substeps. We encode this reasoning path in the prompt so the model learns to marginalize over intermediate states, turning a global objective into a sequence of locally optimal decisions (a form of dynamic programming).  
3. **Few‑Shot Conditioning** – Providing exemplar Q&A pairs supplies a *prior* over answer style and content. The model adjusts its internal weights via attention to these examples, thereby reducing entropy in the target distribution—an instance of Bayesian updating without retraining.  
4. **Negative Prompting (Constraints)** – Explicitly stating what *not* to do forces the model’s probability mass away from undesired modes, effectively performing constrained inference through a penalty term added during decoding.  
5. **Iterative Refinement** – After an initial answer, we feed it back into the prompt for revision. This mirrors proximal gradient steps: each pass reduces loss while staying close to the previous output, yielding higher‑fidelity results without extra training.

---

### Non‑obvious insight
Context engineering isn’t merely “feeding better prompts”; it’s *reconfiguring* the model’s inference graph on the fly. By treating the prompt as a dynamic control signal that reshapes attention weights and probability mass, we leverage the same optimization machinery the model uses during pretraining—just in reverse. This explains why tiny prompt tweaks can have outsized effects: they rewire the internal computation without touching the parameters themselves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
