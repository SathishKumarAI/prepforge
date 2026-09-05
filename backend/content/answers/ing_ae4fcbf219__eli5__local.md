---
qid: ing_ae4fcbf219__eli5__local
question: 'Q: How do you defend against prompt injection?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 228
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:13:48-05:00'
sources: []
---

Imagine your computer is a chef in a kitchen that follows recipes written by humans. A “prompt” is the recipe it receives, and an attacker tries to slip in extra instructions—like saying “skip the sauce” or “add poison”—without you noticing. To defend against this, we use three simple tricks:

1. **Recipe check‑list** – Before cooking, the chef scans the whole recipe for hidden commands (we call this *prompt filtering*).  
2. **Ingredient lock‑box** – The chef only uses ingredients that are already in the pantry and never accepts new ones from an untrusted source (*input sanitization*).  
3. **Chef’s training** – The chef learns to recognize suspicious phrasing (“make it taste like…”) and politely asks for clarification or refuses to follow it (*prompt grounding*).

By combining these steps, we keep the kitchen safe: the AI only follows trustworthy instructions and ignores any hidden “injection” that could lead to wrong or harmful outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
