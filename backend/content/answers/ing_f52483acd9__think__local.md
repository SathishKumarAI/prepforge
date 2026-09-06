---
qid: ing_f52483acd9__think__local
question: How do you design good tool/function definitions for an LLM? What makes
  tool calling fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 405
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:10:55-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
   - *What is “good” for this LLM use‑case?* (e.g., accuracy, speed, safety)  
   - *Which tools are available?* List their APIs, auth, limits.  
   - State assumptions: single‑token responses, stateless calls, network reliability.

**2️⃣ Adopt a design framework**  
   - **Interface contract**: clear input schema (JSON or natural language), output format, error codes.  
   - **Semantics**: define preconditions, postconditions, side effects.  
   - **Observability**: logging, tracing IDs, latency metrics.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the LLM’s intent → map to required tool operation.  
   2. Validate input against schema; if invalid, return a descriptive error.  
   3. Call the tool; capture raw response and HTTP status.  
   4. Normalize output into the agreed format; if parsing fails, flag it.  
   5. Return the normalized result or an explicit failure message.

**4️⃣ Avoid common pitfalls**  
   - *Loose schemas*: leads to runtime parsing errors.  
   - *No retry logic*: transient network hiccups become hard failures.  
   - *Unclear error handling*: callers cannot distinguish between “tool down” vs “bad input”.  
   - *Over‑complex tool chains*: each hop multiplies failure probability.

**5️⃣ Sanity‑check & communicate**  
   - Run unit tests with mock tools covering success, timeout, malformed data.  
   - Review logs for unexpected branches.  
   - Explain the contract to downstream developers: “If you send a JSON payload matching X, you’ll receive Y; otherwise you’ll get an error code Z.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
