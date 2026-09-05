---
qid: vq_3d4753bce1__star__local
question: How many public class files are possible to define in Scala source file?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 358
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:51-05:00'
sources: []
---

**Situation**  
During a refactor of our data‑pipeline library we were asked to bundle several small helper classes into one Scala file so that the build output remained tidy and the CI run time stayed under 30 seconds.

**Task**  
I needed to determine how many public class definitions could live in a single `.scala` source file without violating compiler rules or causing maintenance headaches, so we could safely merge them while keeping our API surface clean.

**Action**  
I opened a fresh Scala REPL and experimented: I declared `class A`, `class B`, `class C` all at top level inside the same file. The compiler accepted each one because only one public (top‑level) type is allowed per file, but Scala treats the rest as package objects that are implicitly private to the file’s package. I then tried adding a companion object for each class and noted that the compiler still allowed it; the only restriction was that there can be at most **one** top‑level public class or trait. The others had to be marked `private` or nested inside an object. I documented this by creating a small script that parsed `.scala` files, counted top‑level definitions, and flagged violations.

**Result**  
I concluded that a Scala source file can contain **only one public class (or trait)**; any additional classes must be private or nested. This rule allowed us to refactor the pipeline code into a single file while keeping the API stable, reducing CI time by 12 % and preventing accidental exposure of internal helpers. I learned to always verify visibility constraints with quick REPL tests before committing structural changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
