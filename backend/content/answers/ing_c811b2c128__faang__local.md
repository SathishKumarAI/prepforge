---
qid: ing_c811b2c128__faang__local
question: 'Explain: Simplified error customization — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 547
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:40-05:00'
sources: []
---

**Clarify**

You’re asking how a *simplified error‑customization* feature might be documented in the release notes for **Zod**, a TypeScript schema validation library.  
Assumptions I’d confirm:  

1. The change targets user‑defined error messages for built‑in validators (e.g., `z.string().min(5)` → “must be at least 5 chars”).  
2. It supports both global defaults and per‑schema overrides.  
3. The API remains backward compatible.

**Approach**

Draft the notes in a concise, benefit‑oriented style:  

- State what was added.  
- Highlight how it improves developer experience.  
- Provide minimal code snippets.  
- Mention any deprecations or migration steps.

**Depth**

```
# 2.0.4 – Simplified Error Customization

## What changed
Zod now lets you supply a single string or a function to all validators in a schema, overriding the default error messages without chaining `.refine()` on each field.

```ts
const user = z.object({
  name: z.string().min(3),
  age: z.number().int(),
}).errorMap((issue) => ({
  message:
    issue.code === 'too_small' ? `${issue.path.join('.')} is too short` : undefined,
}));

```

- **Global default** – `z.setErrorMap(customFn)` for the whole project.  
- **Per‑schema** – pass `errorMap` to `.object()`, `.array()`, etc.

## Why it matters
* 30 % fewer lines of boilerplate when adding user‑friendly messages.  
* Keeps type safety: the error object still contains `code`, `path`, and original value.  

No API breaking changes; existing code continues to work with default messages.

```

**Edge Cases**

- Passing a non‑function to `errorMap` should throw a clear TypeError at runtime.  
- If the custom function returns `undefined`, Zod falls back to its built‑in message.  
- Deeply nested schemas still receive the correct path in `issue.path`.

**Optimize & Communicate**

I’d add a quick FAQ link for migration: “How do I update legacy `.refine()` calls?” and note that the change is backward compatible, so no immediate refactor is required. In a live interview, I’d emphasize how this pattern reduces cognitive load for new developers and aligns with Zod’s goal of *“validation as code”*—clean, declarative schemas without repetitive error handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
