---
qid: ing_e9dfb07283__think__local
question: 'Explain: Transcription models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 417
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:28:05-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The user wants an explanation of *how* pricing works for OpenAI’s transcription (Whisper) models via the API.  
- Assume they’re familiar with OpenAI in general but not the specifics of Whisper pricing.  
- Decide whether to cover per‑minute cost, usage tiers, and any differences between free/paid plans.

**2️⃣ Adopt a “pricing‑by‑unit” mental model**  
- Treat the cost as a function: Cost = (Processing time × Rate) + (Optional extras).  
- Map out key variables: audio length, chosen Whisper model (e.g., “whisper‑base”, “whisper‑large”), and any post‑processing options.

**3️⃣ Walk through the reasoning step by step**  
a. Identify the rate per minute for each model variant.  
b. Explain how to compute total cost: multiply minutes by rate.  
c. Mention any bulk‑discount or subscription tiers if applicable.  
d. Note that pricing may differ for real‑time vs batch usage, and that there are separate limits (e.g., 25 GB/month free tier).

**4️⃣ Beware of common pitfalls**  
- Don’t conflate Whisper’s cost with ChatGPT’s token‑based pricing.  
- Avoid assuming a flat fee; Whisper is billed per second/minute.  
- Remember that the API may charge for “whisper‑large” more than “whisper‑base”.

**5️⃣ Sanity‑check & verbalize**  
- Re‑calculate a sample: 10 min on “whisper‑large” → $0.006 / min × 10 = $0.06.  
- Verify against the latest OpenAI docs or pricing page.  
- Summarize concisely, ensuring each step (rate, unit, total) is clear and correct before delivering the final explanation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
