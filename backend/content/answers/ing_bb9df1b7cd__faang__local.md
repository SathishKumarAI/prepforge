---
qid: ing_bb9df1b7cd__faang__local
question: 'Explain: Lyria 3 — Gemini Developer API pricing \u00a0|\u00a0 Gemini API
  \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 580
total_tokens: 839
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:59:24-05:00'
sources: []
---

**Clarify**  
You want a concise overview of how Google’s **Gemini API (Lyria 3)** is priced, including what the tiers mean and where it sits in the broader Gemini ecosystem. I’ll assume you’re familiar with REST/JSON calls but not the billing details.

---

### Approach
1. Outline the pricing hierarchy (free tier vs paid).  
2. Break down per‑token costs for input/output.  
3. Highlight volume‑based discounts, concurrency limits, and additional fees (e.g., fine‑tuning or custom models).  
4. Mention how to monitor usage via Cloud Console / Billing API.

---

### Depth
| Tier | Monthly free quota | Input cost* | Output cost* | Notes |
|------|--------------------|-------------|--------------|-------|
| **Free** | 5 M tokens (≈$0) | $0 | $0 | Limited to standard Gemini‑3; no fine‑tuning. |
| **Standard** | 20 M tokens | $0.003/1K | $0.004/1K | Includes priority queueing, up to 10 concurrent requests. |
| **Premium** | Unlimited (pay‑as‑you‑go) | $0.0025/1K | $0.0035/1K | Adds fine‑tuning, higher concurrency, SLAs. |

\*Prices per 1 000 tokens; input/output are billed separately.  
Google also offers **Custom Gemini**: you pay a flat rate plus a small per‑token fee ($0.0015/1K for both directions) after an initial data‑prep cost.

---

### Edge Cases
- *Burst traffic*: free tier may throttle, leading to 429 errors.  
- *Large documents*: token count can exceed quota quickly; use chunking or summarization first.  
- *Fine‑tuning*: incurs one‑time training fee (~$200) plus higher per‑token rates.

---

### Optimize & Communicate
- **Monitor**: set up Cloud Billing alerts at 80% of free quota to avoid surprise charges.  
- **Reduce cost**: compress prompts, cache embeddings, and batch requests.  
- **Explain to stakeholders**: “We’ll start in the free tier; once we hit 10 M tokens/month, we’ll shift to Standard—costs will be roughly $30/month for input/output.”

This structured view lets you balance capability against spend while keeping the API usage transparent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
