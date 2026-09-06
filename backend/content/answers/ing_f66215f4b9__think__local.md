---
qid: ing_f66215f4b9__think__local
question: 'Explain: Medusa & Multi-Token Heads — Speculative Decoding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 486
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:15:42-05:00'
sources: []
---

**1️⃣ Clarify the ask and set assumptions**  
- Identify what “Medusa” and “Multi‑Token Heads” refer to (they’re recent papers on speculative decoding for language models).  
- Assume the reader knows basic transformer inference but not these specific tricks.  
- Decide the depth: high‑level overview + key equations/diagrams, no code.

**2️⃣ Adopt a mental model**  
- Think of decoding as “pick a token → feed it back”.  
- Speculative decoding = *parallel* prediction of many tokens at once, then *filter* with the true model.  
- Medusa = a multi‑head variant that splits the probability mass across several “heads” before aggregation.

**3️⃣ Step‑by‑step reasoning**  
1. Explain vanilla greedy/beam search.  
2. Show the bottleneck: one token per step → serial execution.  
3. Introduce speculative decoding: a fast *draft* model predicts K tokens; the real model verifies them.  
4. Detail Medusa’s architecture: multiple lightweight heads produce draft logits; an aggregator (soft‑max over heads) forms the final draft distribution.  
5. Walk through inference loop:  
   - Draft → candidate list  
   - Real model re‑scoring → keep or discard  
   - Update context, repeat.  
6. Highlight speedup math: \( \frac{1}{K}\times\) reduction in token‑wise passes.

**4️⃣ Avoid common pitfalls**  
- Don’t mix up “draft” vs “real” models; emphasize they’re separate nets.  
- Don’t overstate accuracy gains—speculative decoding trades a tiny precision hit for speed.  
- Beware of the “head collapse” trap: if all heads predict the same token, you lose diversity.

**5️⃣ Sanity‑check & verbalize**  
- Verify that each step respects the causal order (draft tokens must be conditioned on prior context).  
- Rephrase key points in plain language: “Medusa lets several small heads guess ahead, then we let the big model clean up.”  
- End with a quick example or pseudo‑code snippet to ground the concept.

Follow this scaffold and you’ll convey Medusa & Multi‑Token Heads clearly without getting lost in jargon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
