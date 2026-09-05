---
qid: ing_aa8d15f06f__star__local
question: 'Explain: 2x reduction in core bundle size — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 358
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:47-05:00'
sources: []
---

**Situation:**  
At my previous startup we were shipping a React‑Native app with a hefty validation library, Zod, bundled directly into the core runtime. Each release added ~400 KB of minified code, and our CI logs showed a growing bundle that hurt cold‑start times on iOS.

**Task:**  
I was tasked to cut the core bundle size by at least 50% without sacrificing type safety or breaking existing schema definitions.

**Action:**  
First, I profiled the bundle with Webpack’s tree‑shaking report and discovered that Zod’s utilities were being imported wholesale. I refactored our imports to use `z.object`, `z.string`, etc., directly from named exports, eliminating the default import that pulled in the entire library. Next, I replaced runtime checks for optional fields with static TypeScript assertions where possible, moving those checks out of the bundle into a separate “validation” chunk that could be lazy‑loaded only when needed. Finally, I leveraged `esbuild`’s native tree‑shaking and switched to the newer Zod 3.x release, which had a slimmer API surface.

**Result:**  
The core bundle shrank from ~400 KB to just 190 KB—a 2× reduction—leading to a 25 % faster cold start on iOS. I learned that careful import hygiene and chunking can unlock significant performance gains even with popular libraries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
