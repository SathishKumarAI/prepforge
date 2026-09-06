---
qid: ing_be63ac8193__fp__local
question: 'Explain: Types of CoT prompts — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 511
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:48:27-05:00'
sources: []
---

**Why Chain‑of‑Thought (CoT) Prompts Exist**

At its core a language model is a *probabilistic compressor*: it predicts the next token given all prior tokens. When asked a complex reasoning question, the model must “plan” intermediate steps that bridge input to answer. CoT prompts explicitly force this planning by inserting a sequence of reasoning tokens before the final output.  

**Fundamental Types**

| Type | Structure | Why It Helps |
|------|-----------|--------------|
| **Self‑Consistency (SC)** | Multiple independent CoTs are generated; the most frequent answer is chosen. | Reduces variance in stochastic decoding—mirrors ensemble learning without extra data. |
| **Few‑Shot CoT** | One or more exemplars with full reasoning + answer are shown. | Provides a *template* that aligns the model’s internal policy to the desired stepwise logic. |
| **Self‑Refinement (SR)** | The model first gives an answer, then re‑examines it and rewrites if needed. | Turns the model into its own verifier—akin to gradient descent with a self‑loss. |
| **Explicit Instructional CoT** | A prompt like “First think about… then decide…” | Shifts the internal objective from *next-token* to *goal-oriented planning*. |

**Deep Connection**

CoT prompts transform the problem from pure token prediction into an *optimization over paths*: each intermediate token is a decision point in a high‑dimensional latent space. The model learns a policy that maximizes expected reward (correct answer) while minimizing path length—precisely what reinforcement learning formalises, but without explicit gradients.

**Non‑Obvious Insight**

Most people treat CoT as merely “more words”. In reality, the *ordering* of reasoning steps changes the **distribution of attention weights**. Early tokens bias the model toward a subspace that makes later tokens easier to generate. Thus, a poorly chosen first step can trap the model in a local optimum even if later steps are correct—much like an ill‑chosen initial condition in numerical optimization.

---

*So CoT prompts aren’t magic; they re‑architect the language model’s internal optimisation landscape, guiding it toward consistent, verifiable reasoning paths.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
