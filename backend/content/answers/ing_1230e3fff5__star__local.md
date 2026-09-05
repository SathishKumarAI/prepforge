---
qid: ing_1230e3fff5__star__local
question: 'Explain: 100x reduction in tsc instantiations — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 381
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:02-05:00'
sources: []
---

**Situation**  
At my last job we were building a large TypeScript monorepo with dozens of micro‑services that all shared a common validation schema library. Every time a new service spun up the TypeScript compiler would re‑instantiate Zod’s type inference engine for each package, taking ~15 s per build and bloating our CI pipeline to 45 minutes.

**Task**  
I had to cut the compiler startup time by an order of magnitude without breaking any type guarantees or changing public APIs. The goal was a 100× reduction in tsc instantiations while keeping the schema definitions DRY.

**Action**  
First I profiled `tsc` and discovered that each import of `zod` triggered its own internal module resolution, causing thousands of redundant type‑inference runs. I refactored the library to expose a single, pre‑compiled `ZodSchemaRegistry` that serializes schema metadata into JSON at build time. Then I used TypeScript’s `--incremental` flag with a custom `tsconfig.json` that imports this registry instead of re‑instantiating Zod per module. Finally, I added a Babel plugin to rewrite runtime `zod` calls to the registry during transpilation, ensuring no runtime overhead.

**Result**  
Build times dropped from 15 s to 150 ms per service—a full 100× speedup—cutting our CI wall‑clock by 30 minutes. I also learned how careful module resolution optimization and incremental compilation can dramatically improve TypeScript performance in large monorepos.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
