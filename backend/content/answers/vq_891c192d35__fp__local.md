---
qid: vq_891c192d35__fp__local
question: When is a .FMB file extension is created in Forms 4.5 ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 406
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:44:48-05:00'
sources: []
---

In Oracle Forms 4.5 the **`.fmb`** file is the *design‑time* artefact that stores a form’s declarative structure—its blocks, items, triggers, and navigation logic.  
When you create or edit a form in Form Builder, the tool writes an XML‑style representation of every element you add to the canvas. This serialization satisfies two fundamental constraints:

1. **Human‑readable source** – The file can be version‑controlled, diffed, and inspected without launching Forms, enabling collaborative development and auditability.  
2. **Deterministic compilation** – At build time, Form Builder reads the `.fmb` back into memory, translates it into a binary runtime image (`.fmx`), and embeds that in the application package.

Thus a `.fmb` is created *whenever* you save a new or modified form definition; it never appears for compiled binaries alone.  

**Non‑obvious insight:**  
The `.fmb` acts like a *schema* for the runtime image: every trigger’s PL/SQL body, every item’s validation rule, and even layout details are stored as data rather than code. This separation means you can perform “design‑time refactoring” (renaming items, moving blocks) without touching the compiled binary—only a new `.fmx` is produced. Consequently, Teams can review changes in source control before deployment, reducing runtime regressions that often plague monolithic compiled binaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
