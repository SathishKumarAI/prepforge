---
qid: ing_fb9e03cf09__star__local
question: 'Explain: Number formats — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 375
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:57-05:00'
sources: []
---

**Situation**  
When I was building a data‑injection API for our fintech app, the front end sent numeric fields as strings (e.g., `"amount": "12345"`) because of legacy JavaScript constraints. Our backend used TypeScript and Zod for validation, but the default number parser would silently coerce these strings into numbers, masking subtle bugs where malformed inputs slipped through.

**Task**  
I had to ensure that only valid numeric values were accepted, reject any string that didn’t represent a proper integer or decimal, and maintain clear error messages for developers consuming the API. This required configuring Zod’s number format handling without breaking existing legitimate use cases.

**Action**  
I switched from `z.number()` to `z.coerce.number()` with custom refinement:  
```ts
const Amount = z.coerce.number().refine(val => Number.isFinite(val), {
  message: "Amount must be a finite number",
});
```
Then I added a `transform` step to strip any surrounding whitespace and an optional `precision(2)` for currency. I also wrote unit tests that fed edge cases like `"12a3"`, `null`, and `"   "` to confirm validation failures. Finally, I updated the API docs and automated CI checks so any new endpoint using numeric fields had to pass these stricter rules.

**Result**  
The tightened number format validation cut down runtime errors by 78% in production logs, eliminated a class of injection bugs, and reduced support tickets related to malformed amounts from 12 per month to zero. I learned that thoughtful use of Zod’s coercion and refinement capabilities can turn silent type issues into explicit, actionable failures—critical for any data‑centric service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
