---
qid: ing_c68b9b961f__eli5__local
question: What's the difference between continued pretraining and SFT? When do you
  need domain knowledge injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 256
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:50:33-05:00'
sources: []
---

Imagine a chef who has learned to cook many cuisines (the base model).  
**Continued pre‑training** is like the chef spending extra time in a kitchen, tasting random dishes from all over the world and learning new spices, so the chef’s palate keeps broadening. The chef still doesn’t know how to prepare your family’s favorite recipe, but he knows more about cooking in general.

**SFT (Supervised Fine‑Tuning)** is when you give that same chef a cookbook for your dish and let him practice making it over and over until he can do it perfectly. Now the chef has specific skills for that one recipe, not just general culinary knowledge.

You inject **domain knowledge**—special ingredients or rules that only apply to a particular field—when SFT alone isn’t enough. For example, if you want the chef to bake gluten‑free bread, you must teach him about alternative flours and baking times; otherwise he’ll keep using regular flour from his general experience.

So: continued pre‑training broadens base skills; SFT sharpens them for a task; domain injection adds unique rules needed only in that niche.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
