---
qid: ing_1f0ffedb13__fp__local
question: 'Explain: Multimodal models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 395
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:12:06-05:00'
sources: []
---

### Why the price structure for multimodal models looks the way it does

The **fundamental problem** is that a multimodal model consumes *two* streams of data—text and images—at once, each with its own computational footprint.  
1. **Tokenization & embedding cost**: Text tokens are cheap because they reuse the same vocabulary and cache; image patches are expensive because each patch requires a separate linear projection and positional encoding.  
2. **Attention scaling**: In transformer attention the cost is *quadratic* in the total number of tokens (text + image). If an image contributes 1,000 “tokens” while text adds only 100, the attention matrix grows dramatically, driving GPU memory usage and latency.

OpenAI’s pricing reflects these physics:

| Resource | Cost driver | Why it matters |
|----------|-------------|----------------|
| **Text tokens** | Linear scaling in compute & storage | Text is cheap to embed; re‑used across models. |
| **Image patches** | Quadratic scaling + larger embeddings | Each patch incurs a full attention pass, consuming memory and energy. |

The API therefore charges *per token* for text but *per image* (or per patch) at a higher rate. This mirrors the deeper principle that computational complexity in transformers is dominated by pairwise interactions; adding modalities multiplies those interactions.

**Non‑obvious insight:**  
Pricing **not only compensates for raw compute** but also enforces *model‑aware usage*. A user who sends a single 512‑pixel image and 50 tokens pays roughly the same as sending ten images and 500 tokens, because the quadratic term dominates. Thus the price structure nudges developers to batch modalities efficiently, aligning economic incentives with optimal resource utilization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
