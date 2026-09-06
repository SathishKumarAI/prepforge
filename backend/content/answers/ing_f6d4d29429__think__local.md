---
qid: ing_f6d4d29429__think__local
question: 'Explain: Accept block is only cashing exceptions of'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 509
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:16:59-05:00'
sources: []
---

**1. Clarify the context and assumptions**  
   - *What “Accept block” refers to*: In Bitcoin‑Core it’s the function that validates a newly received block before adding it to the chain.  
   - *“Only cashing exceptions of”*: Likely means the method only propagates (re‑throws) certain error types while swallowing others for internal handling.

**2. Mental model / framework**  
   - Think of `AcceptBlock` as a *gatekeeper* that does two things:  
     1. **Validate** every rule (proof‑of‑work, merkle root, timestamps, etc.).  
     2. **Decide what error to surface** to the caller versus what to treat as a temporary/ recoverable issue.

**3. Step‑by‑step reasoning**  
   - The function first runs `CheckBlock` → returns a `bool` or an error code.  
   - If validation fails, it throws a *specific* exception (e.g., `std::runtime_error("bad-blk-bits")`).  
   - The outermost caller (`ProcessMessages`, network handler) catches only the *public* exceptions that indicate a block is invalid and should be discarded or penalized.  
   - Internal errors like memory allocation failures are caught deeper and translated into a generic “unknown error” so they don’t leak implementation details.

**4. Common traps to avoid**  
   - Assuming every exception bubbles up: remember that `AcceptBlock` deliberately swallows internal ones.  
   - Mixing C++ exceptions with return‑code errors: in Bitcoin‑Core, most checks use return codes; only truly fatal conditions throw.

**5. Sanity‑check & communicate**  
   - Verify by reading the source: look for `try { … } catch (const std::exception& e) { … }` blocks around validation logic.  
   - Explain that “cashing” here means *re‑throwing* only the exceptions that callers are expected to handle, keeping internal ones private to maintain clean API boundaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
