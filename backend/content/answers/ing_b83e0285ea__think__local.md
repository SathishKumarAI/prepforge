---
qid: ing_b83e0285ea__think__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 416
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:06:22-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   * Identify that the user wants a conceptual explanation of the RFC (not the full spec).  
   * Assume they know basic OAuth 2.0 but not this extension.

**2. Pick a mental model**  
   * Treat the RFC as an “OAuth 2.0 enhancement” that adds a new header/value to tie tokens to specific resources.  
   * Map it onto the request‑flow diagram: client → authorization server → resource server → protected resource, and highlight where the new indicator fits.

**3. Reason step‑by‑step**  
   1. Start with the problem: tokens can be reused across APIs; a single token might inadvertently access unintended services.  
   2. Explain that RFC 8707 introduces a *resource indicator* (a URI) to specify the target resource in each request.  
   3. Show how the indicator is added as an HTTP header (`Sec‑Token‑Target-URI`) or query parameter, and how the token’s scope must match it.  
   4. Note that the authorization server validates the indicator when issuing the token, and the resource server verifies it on receipt.

**4. Avoid common traps**  
   * Don’t conflate “scope” with “resource indicator”; they are complementary.  
   * Don’t imply the RFC replaces existing OAuth flows—just augments them.  
   * Remember that the spec is still draft; implementation maturity varies.

**5. Sanity‑check & communicate**  
   * Re‑phrase in plain language: “It’s a safety net that says, ‘This token only works for this exact API endpoint.’”  
   * Verify the explanation covers purpose, mechanism, and placement in the flow.  
   * End with a quick example of the header value to anchor the abstract idea.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
