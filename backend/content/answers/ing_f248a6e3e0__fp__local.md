---
qid: ing_f248a6e3e0__fp__local
question: 'Explain: How do you think about cost for an LLM feature? Estimate one for
  me.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 595
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:34:13-05:00'
sources: []
---

### Why “cost” matters for an LLM feature

An LLM feature is a **black‑box function** that maps an input prompt to an output sequence.  
From the *engineering* side its cost decomposes into three orthogonal dimensions:

| Dimension | What it captures | Why it must be accounted for |
|-----------|------------------|------------------------------|
| **Compute** | FLOPs per token (model depth × width) | GPUs/TPUs are billed per‑second; compute is the dominant variable. |
| **Storage** | Model weights + intermediate activations | Disk and RAM price out, especially when scaling to billions of parameters. |
| **Latency / QoS** | End‑to‑end response time | SLA guarantees translate into extra reserved capacity or faster hardware. |

These three terms are not independent: higher latency often forces you to provision more compute (e.g., batching less efficiently) and may require larger, cheaper storage tiers for pre‑cached embeddings.

### Estimating a concrete feature

Assume you want an “Explain this text in 3 sentences” endpoint:

1. **Prompt size**: 200 tokens  
2. **Output size**: 30 tokens (≈0.15 BPE)  
3. **Model**: 13‑billion‑parameter GPT‑like model

| Step | FLOPs | Cost |
|------|-------|------|
| Forward pass (prompt+output) | 13B × 2 ≈ 26 TFLOPs | $0.0004 per token (≈$0.08 per request) |
| Storage (weights) | 13 B × 16 bit ≈ 26 GB | $0.01/month/GB → $0.26/month |
| Latency buffer | 100 ms extra for safety | $0.005 per request |

**Total per‑request cost ≈ $0.085** (compute dominates).  
A monthly estimate for 1 M requests: **$85,000** + storage ($260) ≈ **$85.3k**.

### Non‑obvious insight

The *output token count* is often the hidden variable that breaks cost linearity. Because each generated token requires a full forward pass (and sometimes an additional backward pass for fine‑tuning), you can reduce overall spend by designing prompts that **self‑terminate** early or use **length‑penalty decoding**. Many teams ignore this and pay for “average” output length; a 10 % reduction in generated tokens translates directly into proportional compute savings—often the biggest lever in production deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
