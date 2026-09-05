---
qid: vq_5feebbf2c9__star__local
question: Can we use a RESTRICTED packaged procedure in WHEN_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 324
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:00-05:00'
sources: []
---

**Situation:**  
At my previous company we were revamping the sales order form. The `WHEN_TEXT_ITEM` trigger on the `ORDER_DESC` field was firing every time a user typed a product code, and we needed to validate that code against our inventory system.

**Task:**  
I had to ensure that the validation logic could call an internal package procedure (`VALIDATE_PRODUCT`) without exposing the package’s internals or creating a recursion loop in the trigger. The procedure was marked `RESTRICTED` to prevent direct calls from untrusted contexts, but I still needed it for real‑time feedback.

**Action:**  
I created a lightweight wrapper function inside a public package that internally called the restricted procedure via a `PRAGMA AUTONOMOUS_TRANSACTION`. This wrapper had no security attributes and was invoked by the trigger. Inside the wrapper I added a guard to detect re‑entrancy, logging any recursive calls to prevent stack overflows. The trigger then simply called `PUBLIC_WRAPPER.VALIDATE_PRODUCT(:NEW.ORDER_DESC)` and displayed an error message if the product code was invalid.

**Result:**  
The form now validates codes instantly without slowing down the UI; we reduced user errors by 32% in the first month after deployment. I learned how to safely expose restricted logic through a controlled wrapper while maintaining security boundaries and avoiding recursion pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
