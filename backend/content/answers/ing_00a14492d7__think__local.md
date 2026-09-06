---
qid: ing_00a14492d7__think__local
question: 'Explain: Cost estimate (rough token math) — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 529
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:47:24-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *Scope*: Estimate the cost of a content‑moderation pipeline that processes user‑generated text using an LLM (e.g., GPT‑4).  
   - *Assumptions*:  
     - 10 M moderation requests per month.  
     - Each request is ~200 tokens (input + output).  
     - GPT‑4 pricing: $0.03/1K prompt, $0.06/1K completion.  
     - No extra cost for infrastructure or data storage.

**2. Adopt a token‑budget mental model**  
   - Treat each moderation request as two separate API calls: **prompt** (user text + system instructions) and **completion** (moderation label).  
   - Compute tokens per call, then multiply by the number of requests to get total monthly prompt/completion tokens.

**3. Step‑by‑step reasoning**  
   1. Tokens per request ≈ 200 → split: 100 prompt + 100 completion.  
   2. Monthly prompt tokens = 10 M × 100 = **1 B** tokens.  
   3. Monthly completion tokens = 10 M × 100 = **1 B** tokens.  
   4. Prompt cost = (1 B / 1 000) × $0.03 = **$30,000**.  
   5. Completion cost = (1 B / 1 000) × $0.06 = **$60,000**.  
   6. Total monthly cost ≈ **$90k**; annual ≈ **$1.08M**.

**4. Common pitfalls to avoid**  
   - Forgetting the *prompt* vs. *completion* price difference.  
   - Ignoring that system prompts add tokens (often ~20‑30).  
   - Overlooking token rounding: APIs round up per request, not per batch.  
   - Assuming uniform 200‑token requests; real traffic may be skewed.

**5. Sanity check & verbalize**  
   - Verify the total token count against a sample run (e.g., 100 requests).  
   - Cross‑check that $90k/month aligns with industry benchmarks for high‑volume moderation.  
   - Explain: “Given our assumptions, each moderation incurs ~200 tokens; scaling to millions yields roughly $90k per month.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
