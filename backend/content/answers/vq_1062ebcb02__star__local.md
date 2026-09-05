---
qid: vq_1062ebcb02__star__local
question: Can we attach the same LOV to different fields in Design time ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 323
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:15-05:00'
sources: []
---

**Situation** – In a recent data‑entry application built on Oracle APEX, the client needed the “Country” and “State” fields to share the same list of values for consistency across modules. The original LOV was defined in the shared component library but was not automatically propagated to new pages.

**Task** – I had to enable that single LOV to be reused by both fields without duplicating code, while ensuring that any future updates to the LOV would reflect everywhere and that validation rules remained intact.

**Action** – I created a global LOV named `G_COUNTRY_STATE_LIST` in the shared components. Then, on each page’s field properties, I set the “List of Values” source type to *Shared Component* and selected `G_COUNTRY_STATE_LIST`. To maintain data integrity, I added a server‑side validation that cross‑checked the selected value against the LOV table before insert/update. Finally, I documented the LOV in the project wiki and scheduled a quarterly review to keep the list current.

**Result** – The same LOV now powers five different fields across three modules, cutting maintenance effort by 70 %. Whenever we added a new country or state, all dependent forms updated instantly. I learned that centralizing LOVs not only reduces duplication but also enforces uniform business rules and speeds up future enhancements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
