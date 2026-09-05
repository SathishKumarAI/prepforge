---
qid: ing_03b915039e__eli5__local
question: 'Explain: Implement causal multi-head attention in PyTorch, then convert
  it to grouped-query attention.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 239
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:41:09-05:00'
sources: []
---

Think of a group of students (the *queries*) asking questions to several experts (*keys/values*).  
**Causal multi‑head attention** is like letting each student hear only the answers from experts that came before them in the line—no peeking ahead. In PyTorch you write it with `torch.nn.MultiheadAttention`, set `bias=False` and give a *causal mask* (`torch.triu(torch.ones(L, L), diagonal=1).bool()`) so each position can only attend to earlier positions.

**Grouped‑query attention (GQA)** is the same classroom but now students are split into a few “groups”. Every group shares one set of experts; all students in that group ask the *same* subset of experts. In code, you keep the multi‑head layer but replace the usual query projection with a smaller matrix that produces only `g` distinct queries per head (where `g < heads`). Then you duplicate each group’s query across its members before applying attention. This reduces computation while keeping the causal constraint intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
