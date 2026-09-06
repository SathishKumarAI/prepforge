---
qid: ing_5a8a80ca9d__fp__local
question: 'Explain: Supported by — JSON Schema'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 394
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:16:40-05:00'
sources: []
---

**Supported By – the “`$schema`” declaration**

In a JSON document you cannot know, *a priori*, which version of JSON‑Schema should be used to validate it.  
The fundamental problem is that schema files are themselves JSON; they must carry a self‑describing tag so that any validator can pick the correct grammar without external configuration.

That tag is the **`$schema`** keyword – a URI pointing to the schema that *supports* (i.e., defines) the current document.  
Formally, `$schema` is a *meta‑keyword*: it does not affect validation of the instance’s data; instead it instructs the validator which JSON‑Schema dialect (draft‑07, draft‑2020‑12, etc.) to apply.

Why must it exist?  
1. **Decoupling** – The same JSON file can be validated under multiple schema dialects without editing the file.  
2. **Versioning** – Schema evolution (e.g., moving from `type: "string"` to `const`) is tracked by a new URI, allowing tools to migrate automatically.  
3. **Interoperability** – Consumers of JSON (web APIs, configuration files) can embed this hint; validators on any platform can resolve the URI and fetch the correct spec.

A subtle insight often missed: `$schema` is *not* a constraint on data but a contract between *instance* and *validator*. It turns the validation process into a **bidirectional handshake**—the instance says, “I speak dialect X,” and the validator says, “I’ll listen to you.” This design keeps JSON‑Schema self‑contained yet extensible, mirroring how HTTP negotiates content types with `Accept`/`Content-Type`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
