---
qid: ing_e1178173e8__eli5__local
question: 'Explain: Sandboxed vs. Unsandboxed Execution — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 260
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:32:05-05:00'
sources: []
---

Imagine a kitchen where recipes are cooked in two ways.  
In a **sandboxed** kitchen the chef works inside a small, isolated oven that can’t touch the rest of the house. Any splatter or fire stays inside, so the living room stays safe and clean. This is like sandboxed execution: code runs in a protected “box” (the sandbox) that limits its access to the computer’s files, network, and other programs, preventing accidental damage or theft.

In an **unsandboxed** kitchen, the chef cooks on a big open stove right next to the living room. If something goes wrong—say, a sauce splashes onto the floor—it can spread quickly, affecting everything. Unsandboxed execution lets code run with full access to the system, offering more power but also greater risk.

Both patterns exist because sometimes you need the freedom of an unsandboxed environment (for performance or complex tasks), while other times safety demands sandboxing. The choice is like deciding whether to bake in a sealed oven or on an open flame: each serves its purpose with trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
