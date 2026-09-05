---
qid: ing_2c5ea24a9a__fp__local
question: 'Explain: Tools, Resources, and Prompts — Model Context Protocol Explained
  in 3 Levels of Difficulty'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 449
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:00-05:00'
sources: []
---

**Model Context Protocol (MCP)**  
The core issue MCP addresses is *finite attention*: a language model can only attend to ~4 k tokens at once. When a user wants the model to “use” external tools, store facts, or follow a complex instruction, we must encode those needs into the prompt without exceeding that window. MCP formalises this as three layers:

| Level | Goal | How it works | Why it must be structured this way |
|-------|------|--------------|------------------------------------|
| **1 – Basic Prompt** | Direct answer to a question. | Plain text, minimal metadata. | Keeps token count low; the model can focus on inference. |
| **2 – Resource‑Augmented Prompt** | Inject external data (e.g., a short table or code snippet). | Prepend a *resource block* (`<RES> … </RES>`) followed by the question. The model learns to parse the block as an auxiliary context. | Separating resources prevents accidental overwriting of user intent and lets the model treat them as static facts, improving recall. |
| **3 – Tool‑Enabled Prompt** | Ask the model to execute a function (e.g., fetch weather). | Structured JSON (`{"tool":"weather","params":{"city":"NYC"}}`) plus a brief natural‑language instruction. The system interprets the JSON, calls the tool, and feeds the output back into the prompt loop. | Decouples decision making from execution; the model only decides *what* to do, not *how*, keeping token usage minimal and ensuring reproducibility. |

**Non‑obvious insight:**  
The **JSON schema** in Level 3 is *not* a stylistic choice but an information‑theoretic compression: it forces the model to encode intent in a fixed vocabulary (tool names, parameter keys). This reduces ambiguity, allowing downstream systems to parse outputs deterministically—essential for safety and auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
