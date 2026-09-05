---
qid: ing_3c4e3d08b2__fp__local
question: 'Explain: Clarifying questions & assumptions — Ai Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 416
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:12:37-05:00'
sources: []
---

**Why a code‑assistant must ask clarifying questions**

When a programmer types *“Write a function that sorts a list,”* the assistant faces an **under‑determined problem**: sorting can be stable/unstable, in‑place/out‑of‑place, O(n log n)/O(n²), language‑specific API usage, etc.  
From an information‑theoretic standpoint each unasked detail reduces entropy about the desired output; the assistant must *maximize expected utility* by reducing this uncertainty before committing resources to generate code.

**The optimisation view**

Let \(X\) be the true intent and \(Q\) the set of possible clarifying questions. The assistant selects \(q \in Q\) that maximises  
\[
E_{x}\!\left[U(\text{code}(x)) \mid q\right] - C(q),
\]
where \(U\) is a utility function (e.g., correctness, readability) and \(C(q)\) the cost of asking.  
Because each question halves the space of plausible intents, the optimal strategy often follows a **decision‑tree** that greedily chooses questions with highest expected information gain.

**Deep insight**

Many assistants treat clarifying queries as linear “if‑else” prompts, ignoring that *the act of questioning itself is a form of code*—a policy that shapes future outputs. The non‑obvious lesson: an assistant’s *questioning strategy should be learned jointly with its coding model*, so the system can adapt to different users’ tolerance for ambiguity and trade‑off between upfront cost and downstream correctness.

In short, clarifying questions are not peripheral niceties; they are a principled, optimization‑driven bridge between ambiguous natural language and deterministic code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
