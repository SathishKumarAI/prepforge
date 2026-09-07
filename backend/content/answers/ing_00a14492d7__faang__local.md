---
qid: ing_00a14492d7__faang__local
question: 'Explain: Cost estimate (rough token math) — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 514
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:45:50-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to *estimate the cost of a content‑moderation pipeline in terms of tokens*. Assume:  
- Input is user‑generated text (posts, comments).  
- We use an LLM (e.g., GPT‑4) for semantic flagging.  
- The pipeline runs once per post and costs are based on token usage at the API rate.

**2️⃣ Approach**  
1. Estimate average input length.  
2. Add prompt overhead.  
3. Compute total tokens per call.  
4. Multiply by daily volume.  
5. Convert to dollars using the LLM pricing tier.

**3️⃣ Depth**  
- **Input**: 300 words ≈ 600 tokens (average word ~2 tokens).  
- **Prompt**: “Please flag content that violates policy X.” ≈ 30 tokens.  
- **System message + completion**: another ~20 tokens.  
- **Total per call** ≈ 650 tokens.

*Pricing*: GPT‑4 (8K context) costs $0.03/1k tokens for prompt, $0.06/1k tokens for completion. With 650 toks → ~$0.0195 per moderation.

If we moderate **10 M posts/day**:  
- Daily cost = 10 M × $0.0195 ≈ **$195 K**.  
- Monthly ≈ **$5.9 M**.

**4️⃣ Edge Cases**  
- Extremely long posts → context overflow, requiring chunking (increases tokens).  
- High‑frequency short messages (e.g., chats) may reduce per‑post cost but increase call volume.  
- Using cheaper models (GPT‑3.5) cuts token cost by ~60 % but may degrade accuracy.

**5️⃣ Optimize & Communicate**  
- Cache or batch similar prompts to reuse prompt tokens.  
- Use a lightweight rule‑based prefilter to reject obvious safe content before LLM call, saving 30–50 % of calls.  
- Present the calculation step‑by‑step to interviewers: show assumptions → token math → cost figure, then discuss trade‑offs (accuracy vs. budget).  

This structured walk‑through demonstrates clear problem framing, quantitative reasoning, and practical optimization insights—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
