---
qid: ing_a0211f4123__think__local
question: 'Explain: Cost estimate (rough token math) — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 467
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:40:16-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *Goal*: Roughly estimate how many tokens a “meeting‑assistant” prompt might consume.  
   - *Assumptions*:  
     1. The assistant uses GPT‑4 (≈ 8 k context).  
     2. Typical meeting transcript ≈ 10 min → ~300–500 words (~1,200–2,000 tokens).  
     3. Prompt + system instructions ≈ 200 tokens.  
     4. Response length ≈ 150 tokens (summary or action items).

**2️⃣ Mental model: Token budget = prompt + context + completion**  
   - Total token usage = *prompt tokens* + *conversation history tokens* + *generated tokens*.  
   - For cost, multiply by price per 1K tokens.

**3️⃣ Step‑by‑step reasoning**  
   a. **Prompt**: “You are a meeting assistant…” → ~200 tokens.  
   b. **Transcript** (history): 10 min ≈ 2,000 tokens.  
   c. **Completion**: Ask for summary → target 150 tokens.  
   d. **Total** ≈ 200 + 2,000 + 150 = **2,350 tokens** per request.  
   e. **Cost** (GPT‑4 8 k): ~$0.03 per 1K tokens → 2.35 × $0.03 ≈ **$0.07**.

**4️⃣ Common traps to avoid**  
   - Forgetting that *both* input and output count toward context limits.  
   - Underestimating transcript length (real meetings can hit 3–4 k tokens).  
   - Ignoring system‑prompt overhead or extra instructions.  

**5️⃣ Sanity‑check & communicate**  
   - Verify token counts with a tokenizer tool (e.g., OpenAI’s tiktoken).  
   - Explain the components clearly: “Prompt + transcript + answer.”  
   - Highlight that this is a *rough* estimate; actual usage will vary with meeting length, verbosity, and desired output detail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
