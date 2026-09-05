---
qid: vq_d1de3f7e90__star__local
question: In a CLIENT/SERVER environment , which of the following would not be done
  at the client ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 346
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:06-05:00'
sources: []
---

**Situation**  
In my last role as a backend engineer for an e‑commerce platform, we were refactoring our payment service to move from monolithic PHP to a microservice architecture using Go and gRPC. The front‑end team was responsible for the user interface in React, while the new service handled all transaction logic.

**Task**  
During the migration I had to ensure that every client request was validated, authenticated, and routed correctly, but also that no sensitive business logic or data manipulation happened on the browser side. I needed to audit the codebase and document what should never occur at the client.

**Action**  
I reviewed each React component, focusing on API calls, state management, and local storage usage. I identified three patterns that were safe: input validation, JWT handling, and UI rendering. The one that must stay server‑side was the actual calculation of transaction fees and tax brackets, which required secure access to a proprietary algorithm and live exchange rates stored in an internal database. I added a lint rule that flagged any file importing the fee‑calculation module, and we set up a CI check to block merges if such imports were found.

**Result**  
After implementing these safeguards, the client codebase never touched the fee calculation logic again. Our payment success rate improved by 4% due to reduced client‑side errors, and the new policy cut down on accidental data leaks by 100%. I learned that enforcing clear boundaries between client and server not only protects sensitive operations but also makes the code easier to maintain and audit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
