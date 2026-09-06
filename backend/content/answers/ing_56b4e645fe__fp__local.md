---
qid: ing_56b4e645fe__fp__local
question: 'Explain: Agents — Harvey | AI software for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 406
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:09:11-05:00'
sources: []
---

**Why an “Agent” is essential for a legal‑AI platform**

Legal work is a *sequential decision process*: a lawyer first identifies the facts, then gathers statutes, precedents, and draft clauses, evaluates risk, and finally drafts or revises documents. Each step depends on the previous one’s output and may need to loop back when new information surfaces. A pure LLM can generate text, but it lacks *state* and *control flow*.  

An agent in Harvey is a lightweight orchestrator that:

1. **Maintains state** – keeps track of facts, documents, and intermediate outputs.
2. **Plans actions** – selects from a library of sub‑skills (searching, summarizing, drafting) based on the current goal.
3. **Executes with feedback** – calls each skill, receives results, evaluates them against constraints, and decides whether to iterate.

This architecture mirrors *Markov decision processes*: at every state \(s\), the agent chooses an action \(a\) that transitions to a new state \(s'\). The reward is higher‑level success (e.g., a draft meeting all legal requirements). By training or hand‑tuning a policy over these actions, the system converges to efficient legal workflows.

**Deep insight often missed**

The agent’s *value function* can be interpreted as an *information‑theoretic prior*: it estimates how much remaining uncertainty about the case will decrease if a particular skill is invoked. Thus, the agent not only follows a scripted workflow but actively *optimizes for information gain*, ensuring that each step contributes maximally to closing the legal problem. This principled use of entropy minimization gives Harvey its edge over ad‑hoc LLM pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
