---
qid: ing_de9007e2db__eli5__local
question: 'Explain: Indirect Prompt Injection (IPI) Defense in Depth'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 237
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:27:10-05:00'
sources: []
---

**Indirect Prompt Injection (IPI) Defense in Depth**

Imagine a kitchen where you’re baking a cake. The recipe is the *prompt* that tells the oven how to cook. If someone sneaks a note into the recipe box—an *indirect prompt injection*—they can change the instructions without you noticing, making the cake taste off or even dangerous.

To protect your cake, you use **defense in depth**:  
1. **Double‑check the recipe book** (validate input).  
2. **Seal the notebook** so no one can slip notes in (restrict modifications).  
3. **Use a backup cookbook** that follows strict rules (fallback policies).  
4. **Train your oven to ignore odd instructions** (model safeguards).

In AI, IPI is when an attacker subtly alters prompts that influence another model’s output. By layering checks—verifying prompt integrity, limiting changes, and having fallback responses—you keep the system safe, just as a careful baker keeps the cake delicious.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
