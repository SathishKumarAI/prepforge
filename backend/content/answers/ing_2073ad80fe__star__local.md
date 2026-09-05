---
qid: ing_2073ad80fe__star__local
question: You suspect someone is distilling your model through your public API. How
  would you detect it and what can you actually do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 418
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:25-05:00'
sources: []
---

**Situation**  
While running a public NLP API for an e‑commerce recommendation engine, I noticed that a few clients were making an unusually high number of short requests—just enough to get the model’s output but not enough for typical user traffic. The volume was 3–5× higher than my baseline usage and many requests had identical or near‑identical prompts.

**Task**  
I needed to determine whether those patterns indicated someone was trying to distill my model (i.e., build a smaller copy) and, if so, stop the theft without disrupting legitimate users.

**Action**  
1. **Traffic profiling:** I added a lightweight middleware that logged prompt hashes, token counts, and response similarity scores using cosine‑similarity on embeddings from a recent layer of the transformer.  
2. **Anomaly detection:** A simple moving‑average model flagged IPs with >20 requests/min where the average embedding distance between consecutive responses was <0.05—characteristic of distillation queries.  
3. **Watermarking:** I injected subtle, deterministic noise into the logits (a “watermark”) that could be verified by a downstream script; any exact copy would lose this signature.  
4. **Rate‑limiting & blocking:** For flagged IPs I applied progressive throttling, then permanent bans after repeated violations, while logging all incidents for audit.

**Result**  
Within 48 hours I identified and blocked four distillation attempts, cutting illicit traffic by 95%. The watermark remained intact in legitimate outputs, so no user experience was harmed. I learned that lightweight embedding‑based anomaly detection combined with watermarking provides a practical deterrent against model theft without sacrificing service quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
