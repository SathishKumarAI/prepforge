---
qid: ing_0104bb6d45__faang__local
question: 'Explain: Go deeper on speculative decoding: acceptance-rate math, modern
  drafters like Medusa/EAGLE, and when it backfires.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 556
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:46:45-05:00'
sources: []
---

**Clarify**  
Speculative decoding (SD) is a fast‑sampling technique that predicts token probabilities ahead of time, accepts early if the top‑k tokens meet an *acceptance rate* threshold, and otherwise samples from the full distribution. I’ll assume we’re using it on modern large language models (LLMs) like Medusa or EAGLE for text generation.

**Approach**  
1. Compute acceptance probability \(P_{\text{acc}}\) as the cumulative probability of the top‑\(k\) tokens.  
2. If \(P_{\text{acc}} \ge \tau\) (threshold), emit the highest‑probability token and skip computing the rest of the softmax.  
3. Else, fall back to standard sampling from the full distribution.  

**Depth**  
- **Acceptance‑rate math:** For each step, let \(S_k = \sum_{i=1}^{k} p_i\). If \(S_k \ge \tau\), we accept token \(t_1\); otherwise we compute all logits and sample from the full softmax.  
- **Modern drafters:** Medusa uses a *draft* model that predicts multiple tokens ahead, then a *refine* model corrects them; EAGLE integrates SD by evaluating draft likelihoods on a lightweight head. Both rely on cached transformer activations to avoid recomputation.  
- **When it backfires:**  
  - Low \(\tau\) yields many rejections → negligible speedup and potential hallucinations if the draft is too confident.  
  - High \(\tau\) risks over‑accepting low‑probability tokens, producing incoherent text or mode collapse.  
  - Models with highly multimodal outputs (e.g., code generation) may reject useful drafts because their top‑k is shallow.

**Edge Cases**  
- Very short sequences where the draft model never reaches \(\tau\).  
- Tokens with tied probabilities causing unstable \(S_k\).  
- Situations requiring strict determinism (e.g., legal docs); SD’s randomness must be controlled.

**Optimize & Communicate**  
I’d experiment with a dynamic \(\tau(k)\) that tightens as context grows, and cache logits for the top‑\(k\) to reduce recomputation. I’d present these findings by showing latency vs. perplexity curves, explaining trade‑offs between speed and quality, and recommending fallback policies for edge cases. This structure demonstrates clear reasoning, technical depth, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
