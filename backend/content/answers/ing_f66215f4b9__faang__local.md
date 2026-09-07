---
qid: ing_f66215f4b9__faang__local
question: 'Explain: Medusa & Multi-Token Heads — Speculative Decoding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 583
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:12:58-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Medusa* and *Multi‑Token Heads* in the context of **speculative decoding**—a technique that accelerates language model inference by predicting several tokens ahead before a final, deterministic choice is made. Key assumptions: we’re dealing with transformer‑based LMs, GPU/TPU pipelines, and a need to reduce latency without sacrificing quality.

**Approach**  
1. Define speculative decoding in one sentence.  
2. Describe Medusa’s role as a lightweight “pilot” model that generates token sequences quickly.  
3. Explain Multi‑Token Heads as the mechanism by which the pilot proposes multiple tokens per position, allowing parallel verification by the full‑size model.  
4. Connect both to latency reduction and accuracy preservation.

**Depth**  

| Component | Function | Interaction |
|-----------|----------|-------------|
| **Medusa (pilot)** | A distilled or smaller transformer that runs on a low‑power core; outputs *k* candidate tokens per step. | Generates a “draft” of the next few tokens in parallel with the full model. |
| **Multi‑Token Heads** | Augmented decoder heads that output probability distributions for multiple tokens simultaneously (e.g., 2–4 tokens). | Provides richer candidate sets, improving the chance that one matches the full model’s top‑1 choice. |
| **Speculative Decoding Loop** | Pilot produces *k* tokens → Full model verifies each until a match is found; remaining tokens are accepted from pilot. | Reduces number of expensive full‑model forward passes by up to 50–70 % on average. |

- **Complexity:** Pilot inference cost ≈ O(1/k) of full model; verification cost stays linear in *k*.  
- **Trade‑offs:** Larger *k* yields higher latency savings but increases the risk of accepting a suboptimal token if pilot and full models diverge.

**Edge Cases**  
- Divergence when pilot’s top‑k contains no match → fallback to greedy decoding.  
- Extremely long sequences where memory limits the number of parallel tokens.  
- Tokenization mismatches (e.g., BPE vs. word‑piece) causing misaligned proposals.

**Optimize & Communicate**  
We can fine‑tune the pilot on a subset of data to align its distribution with the full model, reducing mismatch probability. Additionally, adaptive *k* selection based on confidence scores further balances speed and accuracy. In an interview, I’d narrate this flow: “First we generate a draft with Medusa, then we parallelly verify each proposed token using Multi‑Token Heads—this lets us skip many expensive full‑model passes while still guaranteeing correctness when the pilot aligns.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
