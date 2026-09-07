---
qid: ing_199db5aa8d__faang__local
question: 'Explain: Tier 2: Run on traces that passed Tier 1 (cheap LLM, ~$0.50/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 527
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:44:39-05:00'
sources: []
---

**Clarify**

You’re asking how a “Tier 2” inference pipeline would be built for an AI system that first filters requests in **Tier 1** using a cheap LLM (≈$0.50 per 1 k tokens). In Tier 2 we want higher‑quality responses, but only for the subset that survived Tier 1. Clarify assumptions:  
- The cheap model is deterministic and fast.  
- Tier 2 uses a larger, more expensive LLM (e.g., GPT‑4‑like).  
- Cost per token in Tier 2 ≈ $5–10/k.  

**Approach**

1. **Collect Tier 1 passes** into a queue (or event stream).  
2. **Batch them**: group by similar prompts or user context to amortize API overhead.  
3. **Send batch to Tier 2 LLM** with higher‑quality parameters (larger context window, temperature 0).  
4. **Cache results** and route back to users.  
5. **Fallback path**: if Tier 2 fails or latency exceeds threshold, return the Tier 1 answer.

**Depth**

- *Throughput*: Assume 10k requests/day; Tier 1 passes ≈ 20% → 2k Tier 2 calls.  
- *Cost*: Tier 1 ≈ $0.50 × 10k = $5k; Tier 2 ≈ $5/k × 2k = $10k → total $15k/day.  
- *Latency*: Batch size of 32 reduces per‑request overhead to ~200 ms.  
- *Trade‑offs*: Larger batches lower cost but increase latency; smaller batches improve responsiveness at higher cost.

**Edge Cases**

- **Burst traffic**: Queue backpressure, use auto‑scaling compute.  
- **Model failures**: Retry with exponential backoff or switch to a cheaper fallback.  
- **Prompt drift**: Monitor that Tier 1 filters don’t reject legitimate high‑value queries.

**Optimize & Communicate**

Explain that this two‑tier design keeps the expensive model in play only for worthier requests, achieving cost‑efficiency while delivering premium quality where it matters. Highlight how batching and caching reduce per‑token cost, and how monitoring will surface any drift or bottlenecks early. This shows a clear trade‑off analysis, scalability plan, and operational resilience—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
