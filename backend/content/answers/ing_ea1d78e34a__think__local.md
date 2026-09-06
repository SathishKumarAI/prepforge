---
qid: ing_ea1d78e34a__think__local
question: 'Explain: Q: An agent called a broken tool 400 times in five minutes. Diagnose
  and design the fix.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 490
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:28:58-05:00'
sources: []
---

**1. Clarify the problem & state assumptions**  
- *What is “broken” exactly?* Is it a hardware fault, software bug, or user‑error?  
- *Who is the agent and what environment does it operate in?*  
- *Why 400 calls in five minutes?* Rate‑limit, stress test, malicious attack?  
Assume the tool’s API misbehaves when invoked rapidly (e.g., memory leak or rate limiter).

**2. Adopt a systematic diagnostic framework**  
1. **Reproduce**: Run the same sequence locally and observe logs/metrics.  
2. **Isolate variables**: Disable caching, networking, or third‑party services to see if the failure persists.  
3. **Measure resources**: CPU, memory, I/O per call; look for exponential growth.

**3. Step‑by‑step reasoning toward a fix**  

| Step | Action | Rationale |
|------|--------|-----------|
| 1 | Capture stack traces & error codes | Identify exact failure point (e.g., null pointer). |
| 2 | Profile memory usage over time | Detect leaks that grow with each call. |
| 3 | Test under controlled load (200, 300, 400 calls) | Find threshold where failure occurs. |
| 4 | Review code for shared mutable state | Concurrency bugs often surface only at high rates. |
| 5 | Apply fixes: release resources, add throttling, or refactor critical sections | Prevent recurrence. |

**4. Avoid common traps**  
- Don’t assume the problem is in the client; it may be server‑side latency.  
- Don’t ignore “silent” failures—check for swallowed exceptions.  
- Beware of over‑optimizing: adding a global lock can serialize calls and degrade performance.

**5. Sanity‑check & communicate**  
- Re‑run the full 400‑call test; ensure no crash or slowdown.  
- Present before/after metrics (latency, error rate).  
- Explain that the root cause was a resource leak triggered by high call frequency, and the fix is to properly release resources and enforce request throttling.

This structured approach lets you diagnose any “broken tool” scenario systematically and produce a clear, repeatable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
