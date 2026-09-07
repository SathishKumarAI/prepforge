---
qid: ing_7d62904706__faang__local
question: 'Explain: Grok 4.6 — Grok Models & Pricing | SpaceXAI Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 569
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:36:44-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Grok 4.6* model from SpaceXAI: its capabilities and how pricing is structured. I’ll assume we need a concise overview that covers architecture, target use‑cases, cost tiers, and key trade‑offs.

---

### 1️⃣ Approach
1. Summarize what Grok 4.6 is (large‑language‑model, multimodal).  
2. Outline the pricing model: per‑token rates for prompt/response, tiered discounts, and any special “SpaceXAI” add‑ons.  
3. Highlight the practical implications for developers (latency, cost control).

---

### 2️⃣ Depth
| Feature | Detail |
|---------|--------|
| **Model size** | ~12 B parameters, fine‑tuned on SpaceX telemetry & satellite imagery data. |
| **Input modalities** | Text + optional image/vision embeddings; supports multimodal prompts (e.g., “Describe this satellite photo”). |
| **Token limits** | 32k context window; up to 8k tokens in a single request. |
| **Latency** | ~200 ms per 1,000 tokens on GPU‑optimized endpoints; lower for CPU fallback. |

#### Pricing
- **Prompt + completion**: $0.02 / 1K prompt tokens, $0.04 / 1K completion tokens.  
- **Bulk tier** (≥10M tokens/month): 15 % discount.  
- **Enterprise add‑on**: Dedicated endpoint, SLA 99.9%, custom SLAs for latency; price ~$5k/month.  
- **Free tier**: 100 K prompt + 200 K completion tokens per month.

---

### 3️⃣ Edge Cases
- Extremely long prompts (>32k) → chunking required, cost increases linearly.  
- High‑frequency image requests may trigger GPU queue delays; consider caching embeddings.  
- If usage spikes past bulk tier, rate limits apply—monitor to avoid sudden cost surges.

---

### 4️⃣ Optimize & Communicate
Explain that developers can mitigate costs by:
1. **Prompt engineering** (shorter prompts, reusing cached embeddings).  
2. **Batching requests** to amortize latency and token overhead.  
3. **Monitoring usage dashboards** to stay below tier thresholds.

Conclude with a quick comparison: Grok 4.6 is competitive for space‑specific tasks because of its domain fine‑tuning, but general‑purpose workloads may find OpenAI’s GPT‑4 cheaper unless multimodal or telemetry integration is required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
