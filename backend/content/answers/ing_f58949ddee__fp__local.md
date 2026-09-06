---
qid: ing_f58949ddee__fp__local
question: 'Explain: Progressive Tool Discovery for Token Efficiency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 447
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:41:28-05:00'
sources: []
---

**Progressive Tool‑Discovery for Token Efficiency**

At its core the task is *sequential decision making with limited text budget*: a language model must decide, step by step, which auxiliary tool (API call, calculator, knowledge base query) to invoke so that it can answer a user prompt using as few tokens as possible.  
The problem reduces to an **information‑theoretic optimization**: each token consumed either conveys content or *reduces uncertainty* about the solution. The optimal policy maximizes expected utility per token, i.e., the ratio of final task success probability to total tokens used.

Let \(U(t)\) be the expected utility after emitting token \(t\). When a tool is invoked, we pay a fixed cost \(c_{\text{tool}}\) (tokens for the request and response) but gain an information gain \(\Delta I\) that sharply raises \(U\). The Bellman recursion becomes  

\[
V(s)=\max\Bigl\{\underbrace{U(s)}_{\text{continue}},\,\underbrace{V(s')-c_{\text{tool}}}_{\text{invoke tool}}\Bigr\},
\]

where \(s'\) is the state after receiving the tool’s output. Solving this recursion yields a *threshold policy*: invoke the tool only when \(\Delta I > c_{\text{tool}}\). Thus, token efficiency emerges naturally from balancing cost against information gain.

**Non‑obvious insight:** The “information gap” between current belief and the goal is *state‑dependent*. In early steps, the model should be conservative (avoid costly calls) because each tool’s output may be noisy or ambiguous. As the state becomes more focused—e.g., after a few self‑generated clues—the marginal value of an accurate lookup rises sharply, making tool use suddenly worthwhile. This dynamic threshold explains why progressive discovery (incrementally adding tools as needed) outperforms static pipelines: it adapts to the evolving uncertainty landscape rather than committing upfront.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
