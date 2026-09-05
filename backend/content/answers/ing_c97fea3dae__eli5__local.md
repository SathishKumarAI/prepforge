---
qid: ing_c97fea3dae__eli5__local
question: 'Explain: Step 5 — Linux Boot Process Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 223
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:54:38-05:00'
sources: []
---

**Step 5 – The Kernel Starts Running**

Think of the kernel as the “body‑builder” that assembles the rest of your computer’s body.  
When the BIOS hands over control, it loads the Linux kernel into memory and then says, “Go ahead.” The kernel then **mounts the root filesystem**, which is like setting up a workshop floor where all tools (program files) live.

It starts by creating essential system directories (`/dev`, `/proc`, `/sys`) so that hardware devices can be accessed. Then it launches the first user‑space process, `init` (or `systemd`), which is the *chief* that tells other programs when to start.

In short: after being loaded, the kernel builds the base of the operating system, gives every device a name, and hands control over to the main manager (`init`) so the rest of Linux can begin its work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
