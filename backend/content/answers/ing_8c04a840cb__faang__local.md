---
qid: ing_8c04a840cb__faang__local
question: 'Explain: Why does in-context learning work at all? The model''s weights
  don''t change.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 375
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:37-05:00'
sources: []
---

**Clarify**  
You’re asking why a frozen transformer can “learn” from a few examples (in‑context) without updating its parameters. Assume we use a modern LLM (e.g., GPT‑4) trained on massive corpora with self‑attention and positional encodings.

**Approach**  
1. Explain the role of attention and context windows.  
2. Show how prompt tokens are treated as part of the input sequence.  
3. Highlight the implicit inference mechanism that aligns future predictions with earlier tokens.

**Depth**  
The model’s weights encode a *distribution* over token sequences learned during pre‑training. When we prepend an example pair `<input, output>` to the prompt, the self‑attention layers read this as ordinary context: every head attends to all preceding tokens. The network has already seen similar patterns; it simply interpolates between known contexts. The “learning” is a *conditional probability shift*: \(P(y|x,\text{prompt})\) changes because the prompt provides additional conditioning evidence, not because weights change. This is analogous to Bayesian updating with a fixed prior.

**Edge Cases**  
- Extremely long prompts exceed context length → truncation breaks inference.  
- Prompts that contradict pre‑training distribution may lead to hallucinations.  
- Few examples may be insufficient to override strong priors (e.g., rare tasks).

**Optimize & Communicate**  
Explain that this is efficient: no gradient descent, just forward passes. Mention trade‑offs—speed vs. accuracy—and suggest fine‑tuning or retrieval‑augmented methods when prompt capacity limits performance. Conclude by noting that in‑context learning leverages the model’s learned probability mass rather than altering its weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
