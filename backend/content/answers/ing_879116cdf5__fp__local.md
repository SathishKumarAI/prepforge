---
qid: ing_879116cdf5__fp__local
question: 'Q: Why is a Semantic Cache sometimes *more* expensive than a raw LLM call
  at low volume?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 440
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:52:44-05:00'
sources: []
---

**Why a semantic cache can out‑pay a raw LLM when traffic is light**

At its core, a semantic cache trades *latency* for *computation*.  
When a query arrives, the system

1. **Embeds** the prompt (a forward pass through an encoder).  
2. **Indexes** the embedding in a vector store (often with ANN search).  
3. **Retrieves** the nearest neighbours and optionally **re‑scores** them.

Each step incurs CPU/GPU time, I/O, and memory bandwidth that are *independent* of how many queries you actually process. In contrast, a raw LLM call only pays for the tokens it generates; if you ask once per day, the cost is essentially zero in most pricing models.

Mathematically, let  
- \(C_{\text{emb}}\) be the embedding cost per query,  
- \(C_{\text{search}}\) the ANN search cost,  
- \(C_{\text{re‑score}}\) the re‑scoring cost,  
- \(P\) the probability a cache hit occurs.

The expected cache cost is \((C_{\text{emb}}+C_{\text{search}}+C_{\text{re‑score}})\times P + C_{\text{fallback}}\).  
When traffic is sparse, \(P\) rarely exceeds 1, and the fixed overhead dominates; the fallback (raw LLM) cost is negligible. Thus, unless you hit a high enough throughput to amortize the constant terms, the cache’s *per‑query* price will be higher.

**Non‑obvious insight:** The bottleneck isn’t the embedding model itself but the **vector‑index maintenance** (updates, consistency checks, serialization). Even a single query can trigger disk flushes or network hops that dwarf the raw LLM token cost. Therefore, at low volumes, the semantic cache’s infrastructure overhead outweighs its benefit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
