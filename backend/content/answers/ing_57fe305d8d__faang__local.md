---
qid: ing_57fe305d8d__faang__local
question: 'Explain: Core Architecture — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 498
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:08:15-05:00'
sources: []
---

**Clarify**  
You’re asking for a high‑level view of Claude’s core architecture—how the model is built, trained, and served. I’ll assume we want an overview that covers (1) the transformer backbone, (2) training pipeline, (3) deployment stack, and (4) safety & alignment layers.

**Approach**  
1. Outline the **model stack** (tokenizer → encoder‑decoder transformer).  
2. Describe the **training workflow** (pre‑training on public corpora + fine‑tuning with RLHF).  
3. Explain the **serving architecture** (microservices, model sharding, request routing).  
4. Highlight **safety mechanisms** (prompt filtering, policy models, monitoring).

**Depth**  

| Layer | Details |
|-------|---------|
| Tokenizer | SentencePiece BPE (~32k tokens), context‑aware subword units |
| Backbone | 2–3B parameter transformer (multi‑head self‑attention, layer norm). Uses flash‑attention for memory efficiency. |
| Pre‑training | Masked Language Modeling + next‑sentence prediction on ~10 TB of public text; distributed across 200+ GPUs over 4 weeks. |
| Fine‑tuning | RLHF: human reviewers label responses → reward model trained via PPO, iterated until convergence. |
| Serving | Model sharded across 8 GPU nodes; a request dispatcher routes to the least‑loaded shard. Uses Triton Inference Server with ONNX runtime for low‑latency. |
| Safety | Prompt filter (regex + embedding similarity), policy network that overrides unsafe outputs, real‑time logging & anomaly detection. |

**Edge Cases**  
- Tokenization errors on unseen scripts → fallback to character model.  
- Cold‑start latency when scaling up shards.  
- Adversarial prompts bypassing filters; mitigated by continuous retraining of the policy net.

**Optimize & Communicate**  
Future improvements: 1) use sparse attention for larger context, 2) quantize weights (int8) to cut inference cost, 3) integrate a reinforcement‑learning safety loop that adapts in real time. I’d explain each trade‑off—latency vs. fidelity—and how we measure success with A/B tests on user satisfaction scores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
