---
qid: ing_4b4c4277b4__star__local
question: Your agent model outputs an edited version of a 500-line file. Applying
  it verbatim is slow and error-prone. How do you make "apply" fast and reliable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 314
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:51-05:00'
sources: []
---

**Situation:**  
In a nightly build pipeline for a large-scale web service, our AI model produced an edited version of a 500‑line configuration file. The previous approach was to drop the output into the source repo and run `apply` via a shell script, which took ~30 s and frequently caused merge conflicts because multiple agents were editing overlapping sections.

**Task:**  
I needed to create a fast, deterministic way to apply the AI’s changes that avoided manual merges and reduced runtime by at least 70%.

**Action:**  
I built a lightweight Rust CLI that streamed the model output directly into an in‑memory diff buffer. The tool parsed the JSON patch format emitted by the model, applied it using `diff-match-patch`, and wrote the result to disk atomically with `std::fs::write`. To handle concurrency, I added a file‑based lock (`/tmp/apply.lock`) and a retry loop that back‑off exponentially if another process was applying changes. For reliability, the tool logged every operation in JSON and emitted a checksum; the CI job verified this checksum before committing.

**Result:**  
The new apply routine cut runtime from 30 s to 8 s (a 73% reduction). Merge conflicts dropped to zero, and our nightly builds stabilized. I learned that treating AI output as a patch stream and using atomic writes can turn an error‑prone process into a robust, high‑performance pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
