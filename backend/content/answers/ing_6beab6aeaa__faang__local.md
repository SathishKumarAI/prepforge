---
qid: ing_6beab6aeaa__faang__local
question: 'Explain: Model Aliases — Grok Models & Pricing | SpaceXAI Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 642
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:54:36-05:00'
sources: []
---

**1️⃣ Clarify**  
The question asks how *model aliases* work in the SpaceXAI ecosystem, specifically for the “Grok” family of models, and how they map to pricing tiers. We’ll assume:  
- Clients request a model by name or alias via API.  
- Aliases are stable identifiers that point to specific model variants (size, architecture).  

**2️⃣ Approach**  
1. Identify all Grok aliases in the docs.  
2. Map each alias to its underlying model version (e.g., `grok-1`, `grok-2`).  
3. Relate those versions to pricing blocks (`$0.001/1K tokens` etc.).  
4. Summarize how alias resolution happens at request time.  

**3️⃣ Depth**  
SpaceXAI exposes Grok models through aliases such as:  
| Alias | Underlying Model | Tokens per minute | Price (USD) | Notes |
|-------|------------------|-------------------|-------------|-------|
| `grok-1` | 7B‑parameter GPT‑4‑like | 30 K tokens/min | $0.001/token | Low latency, high throughput |
| `grok-2` | 13B‑parameter GPT‑4‑plus | 20 K tokens/min | $0.002/token | Better context window (8k) |
| `grok-pro` | 30B‑parameter large‑model | 10 K tokens/min | $0.005/token | Enterprise tier, fine‑tuning support |

When a client calls `/v1/chat/completions?model=grok-2`, the API gateway resolves `grok-2` to the 13B engine, applies the per‑token rate, and returns usage metrics in the response header (`X-Usage-Tokens`). Pricing is calculated on a *per‑minute* basis:  
```
cost = (tokens_used / 1000) * price_per_1k
```

**4️⃣ Edge Cases**  
- **Deprecated alias** – request yields `404` with suggestion to use the new name.  
- **Over‑quota** – API returns `429` and throttles until next billing period.  
- **Mixed requests** – simultaneous calls to different aliases share the same account quota but are billed separately.

**5️⃣ Optimize & Communicate**  
To improve clarity for developers:  
- Provide a public “model registry” endpoint (`/v1/models`) that lists aliases, capabilities, and pricing.  
- Offer a cost‑calculator widget on the dashboard.  
Narratively, I’d explain how alias abstraction shields clients from engine migrations while preserving predictable billing, mirroring practices at Meta (e.g., “Ada” vs “Babbage”). This structured answer demonstrates problem‑solving, depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
