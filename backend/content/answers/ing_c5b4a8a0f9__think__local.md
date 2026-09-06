---
qid: ing_c5b4a8a0f9__think__local
question: 'Q66: When would you use Claude''s extended or adaptive thinking vs. standard
  mode, and how do you control costs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 476
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:01:55-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- *Clarify*: “Claude’s extended/adaptive thinking” refers to a higher‑cost, longer‑response mode that can reason over more context or iterate on answers; “standard mode” is faster and cheaper.  
- *Assumptions*: The user wants practical guidance on when to switch modes and how to keep spend under budget (e.g., API usage limits, token caps).

**2️⃣ Adopt a decision‑tree framework**  
- Identify key criteria: **Complexity of the query**, **Need for depth/accuracy**, **Time sensitivity**, **Cost tolerance**.  
- Map each criterion to “use extended/adaptive” vs. “stay standard”.

**3️⃣ Reason step‑by‑step**  
1. *Start with user intent*: If they ask a simple fact or short instruction → standard.  
2. *Assess complexity*: Multi‑step calculations, nuanced legal/medical advice, creative brainstorming → consider extended.  
3. *Check context length*: Queries > ~2000 tokens or requiring cross‑document synthesis → adaptive helps.  
4. *Evaluate urgency*: Real‑time dashboards or instant replies → standard; batch reports can afford longer runs.  
5. *Budget check*: Estimate token cost (e.g., 10k tokens ≈ $1); if projected spend > threshold, opt for standard or add a “cost‑limit” prompt.

**4️⃣ Avoid common traps**  
- Don’t assume extended mode always yields better answers; sometimes it’s overkill.  
- Forgetting to set token limits can blow the bill.  
- Relying on adaptive mode for every open‑ended question leads to runaway costs.

**5️⃣ Sanity‑check & communicate clearly**  
- Verify that the chosen mode aligns with all criteria; if any conflict, default to standard and explain why.  
- When explaining to a non‑technical stakeholder, use analogies: “Standard is like a quick email; extended is a full report.”  
- Provide a simple cost‑forecast table (tokens → dollars) so they can see the trade‑off.

By following this structured approach, you’ll consistently pick the right mode and keep costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
