---
qid: ing_c82144df2e__fp__local
question: 'Explain: Pass 1: Expired Context Elimination — Long Context Isn\u2019t
  Free \u2014 I Built a Safe Prompt-Pruning Layer That Makes LLM Systems Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 500
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:46-05:00'
sources: []
---

### Why “expired” context matters

When an LLM consumes a prompt it builds an *attention graph* over every token.  
The computational cost is **O(n²)** in the number of tokens `n`, and the memory
budget limits `n` to a few thousand tokens on most hardware.  
If we naively concatenate user history, system messages, and past dialogue, the
prompt quickly exceeds this budget: *long context isn’t free*.

#### From a fundamental problem to a pruning rule

We want to keep enough context to preserve the model’s predictive accuracy,
but discard what is no longer relevant.  
Formally, let each token `tᵢ` have an **expiration time** `τ(tᵢ)`—the last step
at which it can influence the output (e.g., a user query or system instruction).
The *information‑gain* of keeping `tᵢ` decays with its age, roughly as  
\(I(tᵢ) \propto e^{-\lambda (\text{now}-τ(tᵢ))}\).

Thus we solve a knapsack‑like problem:

\[
\max_{\mathcal{S}\subseteq \mathcal{T}}\sum_{t\in\mathcal{S}} I(t)\quad
\text{s.t.}\; |\mathcal{S}|\leq N_{\max}
\]

The optimal solution is to keep the tokens with the largest *decayed relevance*
scores, i.e., those whose expiration times are nearest the present.

#### Non‑obvious insight

Most pruning methods treat all past tokens uniformly.  
By explicitly modeling *expiration*, we discover that **early tokens in a
conversation can be dropped entirely if a new instruction supersedes them**.
This yields dramatic speedups without sacrificing coherence, because the LLM
never pays attention to stale information it would have ignored anyway.

In short: *expired context elimination* turns the costly “all‑or‑nothing”
attention into an information‑theoretic budget that respects temporal relevance,
allowing large‑scale LLMs to run safely within fixed memory limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
