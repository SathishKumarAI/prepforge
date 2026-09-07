---
qid: ing_e9dfb07283__faang__local
question: 'Explain: Transcription models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 638
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:43:44-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise yet complete explanation of how pricing works for OpenAI’s transcription (Whisper) models via the API. I’ll assume we’re talking about the current public tier, no enterprise‑custom plans, and that the user is interested in cost per minute and volume discounts.

---

### Approach
1. **Identify the key parameters**: model variant (`whisper-1`), input length (seconds/minutes), language/accuracy mode, optional features (timestamp generation).
2. **Map these to pricing units**: OpenAI bills per 15‑second chunk of audio, rounded up.
3. **Compute cost**: multiply unit price by number of chunks; explain how bulk usage can lower the effective rate.
4. **Mention ancillary costs**: data transfer, storage if using S3/Blob for uploads, and optional fine‑tuning (not applicable to Whisper).
5. **Show a quick example** to illustrate.

---

### Depth
| Parameter | Detail |
|-----------|--------|
| **Model** | `whisper-1` – the only public transcription model as of 2024. |
| **Unit** | $0.006 per 15 s chunk (≈$0.24 per minute). |
| **Rounding** | Audio is rounded up to the nearest 15 s; a 7‑second clip costs the same as a 15‑second one. |
| **Bulk discount** | OpenAI offers a 10% discount for >1,000,000 chunks in a month (≈$0.0054/15 s). |
| **Optional flags** | `task=translate` or `language=en` do not change price; only the base model matters. |
| **Data transfer** | Inbound bandwidth is free; outbound to client is standard network cost, not billed by OpenAI. |

*Example*:  
A 2‑minute (120 s) audio file → 8 chunks × $0.006 = **$0.048**.

---

### Edge Cases
- **Very short clips**: a single 1‑second clip still costs $0.006.
- **Long files**: a 3‑hour recording (~720 min) uses 2880 chunks → ~$17.28 (before discount).
- **Streaming vs batch**: streaming uploads are treated as continuous chunks; cost calculation remains the same.
- **Multi‑language or “translate” flag**: no price change, but may affect latency.

---

### Optimize & Communicate
I’d highlight that for high‑volume use, negotiating a custom rate or moving to an enterprise tier can reduce costs further. I would also advise batching small clips into one request when possible to avoid rounding overhead. Finally, I’d suggest monitoring usage via the OpenAI dashboard and setting alerts at 80% of budget thresholds.

This structured walk‑through demonstrates clear communication, logical reasoning, and a solid grasp of pricing mechanics—key signals for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
