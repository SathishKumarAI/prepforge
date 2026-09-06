---
qid: ing_ebe788feed__think__local
question: 'Q65: Your agent can execute arbitrary Python code. How do you make this
  safe?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 443
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:35:54-05:00'
sources: []
---

**Metacognitive Blueprint for “Safely Executing Arbitrary Python”**

1. **Clarify Scope & Constraints**  
   - *What* is considered “arbitrary”? (Any syntax, imports, system calls?)  
   - *Where* will the code run? (Isolated VM, container, sandboxed interpreter?)  
   - *Who* can supply it? (Trusted user vs. open‑source community)  
   State assumptions: no persistent state, only read‑only data, limited CPU/memory.

2. **Adopt a Layered Safety Model**  
   - *Isolation*: run in a lightweight container or a restricted interpreter like `RestrictedPython`.  
   - *Resource Limits*: cgroups/ulimit for CPU time, memory, file descriptors.  
   - *API Surface*: whitelist safe modules (`math`, `statistics`) and block dangerous ones (`os`, `subprocess`).

3. **Step‑by‑Step Reasoning**  
   a. Parse the code into an AST to detect disallowed imports or function calls early.  
   b. Transform or sandbox the AST, replacing unsafe nodes with no‑ops or safe stubs.  
   c. Execute in the isolated environment, capture stdout/stderr, and enforce timeouts.  
   d. Post‑process outputs: filter for secrets, size limits.

4. **Avoid Common Pitfalls**  
   - Don’t rely solely on `try/except`; malicious code can bypass exceptions.  
   - Avoid “trusting” the user’s intent—always assume worst case.  
   - Remember that sandbox escapes (e.g., via C extensions) are possible; keep runtime minimal.

5. **Sanity‑Check & Communicate**  
   - Test with known dangerous snippets (`os.system('rm -rf /')`, infinite loops).  
   - Log every execution attempt, including code hash and sandbox metrics.  
   - Explain to stakeholders that safety is layered, not absolute—continuous monitoring is essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
