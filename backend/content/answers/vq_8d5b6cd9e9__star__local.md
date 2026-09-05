---
qid: vq_8d5b6cd9e9__star__local
question: Which package construct must be declared and defined within the package
  body?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 293
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:02-05:00'
sources: []
---

**Situation:**  
During a critical upgrade of our billing engine, we had to refactor the `BillingUtils` package that was heavily used across multiple services. The team needed a new helper routine for calculating tax based on region, but it required access to internal constants and a private cache.

**Task:**  
I had to add this tax‑calculation logic without exposing implementation details in the package spec, keeping the public interface clean while ensuring the routine could be reused internally by other procedures in the body.

**Action:**  
I declared a private function `calculate_tax` inside the package body of `BillingUtils`. I also defined a package variable `region_rate_cache` and initialized it with a `pragma`‑controlled `init` block to load rates at startup. The function used this cache and the internal constant `DEFAULT_TAX_RATE`, both invisible in the spec, so callers could only invoke the public `apply_tax` wrapper.

**Result:**  
The new routine cut tax computation time by 18 % across the billing pipeline, and the private‑body implementation kept the spec lean. I learned how to balance encapsulation with performance by placing stateful logic inside the package body while exposing a clean API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
