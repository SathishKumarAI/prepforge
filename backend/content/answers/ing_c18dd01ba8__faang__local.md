---
qid: ing_c18dd01ba8__faang__local
question: 'Explain: Constrained Decoding (CFG & Regex) — Structured Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 443
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:11:04-05:00'
sources: []
---

**Constrained Decoding (CFG & Regex) – Structured Generation**

| Step | What I’d do |
|------|-------------|
| **Clarify** | “You want a way to make an LLM output text that obeys a grammar or pattern, right?  Do we need full‑context parsing, only surface constraints, or support for backtracking?” |
| **Approach** | 1. *Define the constraint*: either a context‑free grammar (CFG) or a regular expression (Regex). 2. *Integrate with decoding*: wrap the LM’s probability distribution so that illegal tokens are masked out during beam search / nucleus sampling. 3. *Handle backtracking*: for CFGs use an Earley/GLR parser to keep a stack of partial derivations; for Regex, pre‑compute a DFA and transition on token IDs. |
| **Depth** | - **CFG decoding**: maintain a set of active parse states (nonterminals + position). For each candidate token, update all states; prune those that lead to dead ends. Complexity ≈ O(B·S) per step where B is beam width and S number of active states.  <br> - **Regex decoding**: DFA gives O(1) transition per token; masking out illegal tokens is trivial. <br> - Both methods preserve the LM’s fluency while guaranteeing syntactic validity. |
| **Edge Cases** | Empty grammars, left‑recursion causing infinite loops, ambiguous CFGs leading to many states, regexes with backreferences (not DFA‑compatible). Test on simple arithmetic expressions, JSON snippets, and edge patterns like nested brackets. |
| **Optimize & Communicate** | Cache parse state updates across beams; use lazy evaluation for rare tokens. I’d explain that we’re essentially turning the LM into a *probabilistic parser*—it still learns from data but never violates the specified structure. This balances expressiveness with safety, exactly what FAANG teams need when generating code, configs, or dialogue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
