---
qid: ing_cbeab4375e__fp__local
question: 'Explain: Building Custom Agent Skills — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 530
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:13:53-05:00'
sources: []
---

**Why tool agents are necessary**

A language model is a *function* that maps input prompts to output tokens.  
When the desired behaviour requires *stateful interaction*, *external data*, or
*computation beyond its training set*, this simple mapping breaks down: the
model cannot update beliefs, persist context, or access domain‑specific APIs.
Thus we need an *interpreter* that takes the model’s symbolic intent,
executes a concrete action, and feeds the result back as a new observation.

**Derivation from optimisation**

Let \(S\) be the world state, \(A\) actions (tool calls), and \(R(S,A)\) the
reward for achieving a goal.  
The agent’s objective is \(\max_{\pi}\mathbb{E}[R]\).  
If the model can only produce a text description of \(a\in A\),
the true optimisation problem becomes:

1. **Interpretation**: Map text to an action token \(a\) (e.g., JSON schema).
2. **Execution**: Call external routine \(f_a(S)\) producing new state \(S'\).
3. **Observation**: Encode \(S'\) as text for the next model step.

The loop is a *closed‑loop* Markov decision process where the policy
is split into a learned component (model) and a deterministic, low‑cost
execution layer. This decomposition guarantees convergence to optimal
behaviour if the execution is correct, because the only source of error
is the interpreter’s mapping—an information‑theoretic bottleneck we can
quantify.

**Non‑obvious insight**

Most designers treat tool calls as *black boxes*.  
In reality, the *shape* of the observation (e.g., JSON vs. free text)
acts like a *feature extractor* that dramatically reduces sample complexity.
By enforcing a strict schema on tool outputs, we convert noisy natural
language into a compact representation that the model can learn to parse
with far fewer examples—essentially turning an unstructured prediction
problem into a structured inference task.

---

*Building a custom agent skill thus boils down to: define a clear intent‑to‑action mapping, ensure deterministic execution, and encode observations in a low‑entropy format. This principled split aligns the model’s strengths (text generation) with the world’s need for precise, repeatable operations.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
