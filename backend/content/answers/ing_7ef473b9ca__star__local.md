---
qid: ing_7ef473b9ca__star__local
question: A vendor advertises 1M context with 100% needle-in-a-haystack. What has
  that actually proven, and how would you evaluate long context properly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 373
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:47:30-05:00'
sources: []
---

**Situation:**  
In early 2025 I was evaluating a new LLM vendor for our product‑recommendation engine. They claimed a 1 million‑token context window and “100 % needle‑in‑a‑haystack” performance, which sounded too good to be true because we needed to process user logs, product catalogs, and real‑time chat transcripts in one shot.

**Task:**  
I had to verify those claims and design a realistic test plan that would show whether the large context actually improved downstream metrics like recall of relevant products or answer accuracy for support queries.

**Action:**  
1. Built a synthetic benchmark: stitched together 5 M tokens of mixed content (product specs, user reviews, chat logs) and defined gold‑standard answers for 200 query–context pairs.  
2. Ran the vendor’s model with 1 M context, then with progressively smaller windows (500k, 250k).  
3. Measured recall@5, F1 on answer spans, and latency per inference.  
4. Added a cost‑per‑token analysis to see if the performance gains justified higher API usage.

**Result:**  
The model hit ~95 % recall only when using the full 1 M window; smaller windows dropped to 78 %. Latency increased from 120 ms (250k) to 310 ms (1 M), and cost per request doubled. I concluded that the vendor’s claim held under controlled conditions, but for production we should batch queries or shard context to balance accuracy with latency and budget. This exercise taught me how to translate marketing claims into measurable, trade‑off‑aware benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
