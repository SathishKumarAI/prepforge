---
qid: ing_bed45cf234__eli5__local
question: Your assistant reads untrusted content (web pages, customer documents, email)
  and can call tools. How do you defend against prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 235
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:39:31-05:00'
sources: []
---

Imagine your assistant is a smart chef who follows recipes written by anyone on the internet. A “prompt injection” is like someone slipping a secret note into the recipe that tells the chef to add something dangerous—maybe a pinch of poison. To keep the kitchen safe, we use three simple guards.

1. **Ingredient check** – Before the chef sees any text, we scan it for suspicious instructions (e.g., “do X” that could harm the user) and either block or rewrite them.  
2. **Chef’s training** – The assistant is taught to trust only certain trusted “cookbooks.” If a note comes from an unverified source, the chef treats it as a rumor and ignores it.  
3. **Tool‑access lock** – Even if a malicious note slips through, we give the assistant only a safe set of tools (like a sandbox). It can’t call arbitrary commands; it can only run vetted actions that are known to be harmless.

Together, these layers make sure the chef follows good recipes and never executes hidden, dangerous instructions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
