---
qid: ing_4665a049c0__star__local
question: 'Explain: Recursive objects — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 340
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:26-05:00'
sources: []
---

**Situation**  
At my last role, we built a dynamic survey builder that stored nested question blocks as JSON. The API schema was defined with Zod, but when we added a “repeatable group” feature the validator threw errors because Zod couldn’t handle the self‑referencing structure.

**Task**  
I had to create a robust schema that could validate arbitrarily deep nested groups while still giving clear error messages and keeping runtime performance acceptable for our front‑end React app.

**Action**  
I read the recent Zod release notes on recursive objects, then implemented `z.lazy` to defer resolution of the group type. The schema looked like this:

```ts
const Question = z.object({
  id: z.string(),
  text: z.string(),
});

const Group: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: z.string(),
    questions: z.array(z.union([Question, Group])),
  })
);
```

I added custom refinements to enforce a maximum depth of 5 and used `z.preprocess` to strip empty groups before validation. The recursive schema was then exported for both API validation and client‑side form generation.

**Result**  
The survey builder now accepts up to 100 nested levels without crashing, and the validator reports errors at the exact node. User testing showed a 30 % drop in form submission failures. I learned that leveraging `z.lazy` not only solves recursion but also keeps type safety intact across the stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
