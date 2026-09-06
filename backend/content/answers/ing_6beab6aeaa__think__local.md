---
qid: ing_6beab6aeaa__think__local
question: 'Explain: Model Aliases — Grok Models & Pricing | SpaceXAI Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 382
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:08:13-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
- Identify what “model aliases” means in this context (short names that map to specific model configurations).  
- Assume the reader is familiar with SpaceXAI’s API but may not know how aliases are structured or priced.

**2. Adopt a mental framework**  
- Think of the alias system as a lookup table: *alias → base model + optional parameters*.  
- Pair this with a pricing model: *price = (base cost) × (token count) × (tier multiplier)*.

**3. Step‑by‑step reasoning**  
1. List common Grok aliases (`grok-1`, `grok-2`, etc.) and their base models.  
2. Explain how each alias can be overridden with a custom prompt or temperature via the API call.  
3. Detail the pricing tiers (e.g., free, paid) and how token usage is billed for each tier.  
4. Show a simple example calculation: 1 000 tokens × $0.02 per 1K tokens = $0.02.

**4. Common traps to avoid**  
- Mixing up *model name* vs *alias*: the alias may hide version changes.  
- Forgetting that pricing can change with updates; always refer to the latest docs.  
- Assuming all aliases share identical costs—some may be premium or experimental.

**5. Sanity‑check & verbalize**  
- Cross‑reference the official SpaceXAI documentation for any discrepancies.  
- Summarize: “Grok model aliases are shorthand references that map to underlying model configs; pricing is linear in token count, scaled by tier.”  

This structured approach ensures you capture both the mapping logic and cost implications clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
