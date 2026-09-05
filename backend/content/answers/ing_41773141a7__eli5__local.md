---
qid: ing_41773141a7__eli5__local
question: 'Explain: Implement multi-head self-attention from scratch - no `nn.MultiheadAttention`,
  and make it causal.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 304
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:19:59-05:00'
sources: []
---

Think of a sentence as a row of students in a classroom.  
Each student (token) wants to listen only to the ones on their left—this is **causal** attention; nobody can peek at future classmates.  

1. **Heads** are like different pairs of microphones. For each head, every student first speaks through three tiny “talking heads”: *query* (what they want to know), *key* (who might answer), and *value* (the answer itself).  
2. Each student’s query is compared with all keys on the left using a dot‑product, giving a score that tells how much attention should be paid.  
3. The scores are turned into weights by a softmax (so they add to 1) and multiplied by the values, producing one weighted summary per head.  
4. All heads’ summaries are stitched back together (concatenated) and passed through a final linear layer to mix them into a single output vector for each student.

Doing this without PyTorch’s built‑in `nn.MultiheadAttention` just means writing those matrix multiplications, the causal mask that zeros out future positions, and the concatenation/linear step yourself. The result is the same self‑attention you see in transformers, but with an explicit “no looking ahead” rule.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
