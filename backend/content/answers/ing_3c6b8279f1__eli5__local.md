---
qid: ing_3c6b8279f1__eli5__local
question: 'Explain: Q125: A self-propagating npm worm planted editor and agent auto-execution
  hooks in poisoned packages, so simply opening the repository ran the payload with
  no install step. Design supply-chain defense for a team running coding agents.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 287
total_tokens: 482
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:11:43-05:00'
sources: []
---

Imagine your code is a kitchen that you and your teammates use every day. A “self‑propagating npm worm” is like a sneaky mold that spreads through the pantry without anyone noticing—when you just open a recipe (a repository) it releases spores that start cooking on their own, even though you never turned on the stove (no install step). The worm hides in poisoned packages and places hidden “hooks” that automatically run when any editor or tool starts.

**Supply‑chain defense for coding agents**

1. **Isolate the pantry** – run every package inside a sandboxed container so even if a hook fires, it can’t touch your main system.  
2. **Inspect before cooking** – scan packages with a static‑analysis tool that looks for hidden execution code (like “hooks”) and reject anything suspicious.  
3. **Use a trusted recipe list** – maintain a whitelist of approved package versions; if a new version appears, verify its hash against the list before allowing it to run.  
4. **Audit every step** – keep logs of which hooks executed and why, so you can trace back any unwanted activity.  

With these layers—sandboxing, scanning, whitelisting, and logging—you’ll keep your coding kitchen safe from invisible mold that tries to cook itself into existence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
