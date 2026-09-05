---
qid: vq_3a26331ad6__star__local
question: What is the difference between == in Java and Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 330
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:23-05:00'
sources: []
---

**Situation:**  
At my previous role I was migrating a micro‑service written in Java to Scala to take advantage of Akka Streams. The service exposed a REST endpoint that returned user profiles, and the front end was expecting JSON with exact field values.

**Task:**  
I had to ensure that the equality logic used for filtering duplicate profiles behaved identically after the rewrite, because any discrepancy would cause stale data to be sent to clients.

**Action:**  
In Java the service compared profile IDs using `==`, which only checked reference identity. When I ported the code to Scala I mistakenly carried over the same pattern, but in Scala `==` invokes `.equals` (value equality) by default. To surface this, I wrote a unit test that created two distinct `String` objects with the same content and compared them with both operators. The Java test failed (reference mismatch), while the Scala test passed (value match). I then refactored the Java code to use `.equals()` for all value comparisons and added an explicit comment explaining the difference, so future maintainers wouldn’t repeat the mistake.

**Result:**  
The migration completed without any data duplication bugs. The API latency dropped 12% because we eliminated unnecessary duplicate checks, and the team adopted a style guide that explicitly distinguishes `==` in Java (reference) from Scala (value). This experience reinforced my habit of validating language‑specific semantics when refactoring between ecosystems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
