---
qid: ing_23c3e49ffb__fp__local
question: 'Explain: Build a Tool-Calling Agent — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 438
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:21:25-05:00'
sources: []
---

**Why a tool‑calling agent is essential**

When a language model (LM) receives a user query, the *optimal* response often requires *external computation*—API calls, database lookups, or domain‑specific libraries.  
From an optimization viewpoint, we must minimise **expected loss**:
\[
L = \mathbb{E}_{q}\!\big[\ell(\text{LM}(q), y^\*)\big]
\]
where \(y^\*\) is the true answer and \(\ell\) penalises missing or wrong steps.  
Allowing the LM to *call* a tool turns the problem into a **sequential decision**: at each step it chooses either “produce text” or “invoke tool \(t\)”. The value of calling \(t\) is the expected reduction in loss due to the information \(t\) supplies. Thus, the agent’s policy must learn when and which tool maximises this marginal gain.

**Haystack’s design**

1. **Tool registry** – a declarative list of callable APIs (e.g., `search`, `calculator`).  
2. **Prompt template** – encodes the *action‑response* pattern so that the LM learns to output `"tool: <name>, args: {...}"`.  
3. **Executor loop** – interprets the LM’s JSON, calls the tool, and feeds back the result as part of the conversation history.

The key insight is that by treating tool usage as a *structured token* rather than free text, we reduce spurious hallucinations and make supervision easier: each call becomes an observable transition in a Markov decision process.  

**Non‑obvious tip**

Because the LM’s output is parsed deterministically, you can inject **partial execution feedback** (e.g., “tool returned error”) directly into the prompt. This turns failures into *self‑correcting* signals and dramatically speeds up fine‑tuning convergence—most tutorials overlook this trick.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
