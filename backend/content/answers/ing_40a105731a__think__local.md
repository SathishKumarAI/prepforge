---
qid: ing_40a105731a__think__local
question: 'Explain: Imagine API — Grok Models & Pricing | SpaceXAI Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 442
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:57:19-05:00'
sources: []
---

**1. Clarify the task and set assumptions**  
   - Confirm that you’re asked *to explain* a hypothetical “Grok Models & Pricing” API for SpaceXAI, not to design or code it.  
   - Assume the reader knows basic API concepts but not the specific product.  

**2. Adopt a mental model**  
   - Treat the explanation like a user‑guide walkthrough: start with purpose → endpoints → authentication → pricing logic.  
   - Use the “What‑Why‑How” framework for each section (why it exists, what it does, how to use/implement).  

**3. Reason step‑by‑step**  
   1. **Purpose** – articulate why SpaceXAI offers Grok models (e.g., rapid prototyping of space‑related ML tasks).  
   2. **Endpoints** – list key REST routes (`/models`, `/predict`, `/pricing`) and their payloads.  
   3. **Authentication** – explain API keys or OAuth flow, rate limits.  
   4. **Pricing model** – describe tiered usage (free credits, pay‑as‑you‑go), cost per inference, any bulk discounts.  
   5. **Examples** – give a short cURL snippet that shows a request and the expected JSON response.  

**4. Avoid common traps**  
   - Don’t conflate “model” with “endpoint”; keep them distinct.  
   - Skip jargon; if you must use it, define it immediately.  
   - Don’t over‑promise features (e.g., real‑time streaming) unless they’re actually in the spec.  

**5. Sanity‑check & verbalize**  
   - Read the explanation backward: can a newcomer understand each part?  
   - Summarize each section in one sentence to ensure clarity.  
   - Finally, imagine explaining it to a non‑technical stakeholder; if you can do that, you’ve hit the mark.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
