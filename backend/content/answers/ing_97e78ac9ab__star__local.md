---
qid: ing_97e78ac9ab__star__local
question: 'Explain: For the most part, use positional arguments'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 329
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:21-05:00'
sources: []
---

**Situation** – At my previous role I was building a recommendation engine for an e‑commerce platform that had to serve 2 M users daily. The data pipeline used PyTorch, and the training script accepted many hyperparameters via `argparse`. Our devs were passing arguments in different orders across environments, causing subtle bugs when a GPU flag got mixed up with a learning‑rate value.

**Task** – I needed to standardize how we passed configuration values so that the script was both human‑readable and less error‑prone, while keeping the flexibility for CI/CD pipelines to override defaults.

**Action** – I refactored the argument parser to use *positional arguments* only for the essential model name and dataset path. All optional flags (e.g., `--lr`, `--batch-size`, `--use-cuda`) were kept as named options, but I added a wrapper script that maps environment variables into positional slots in a deterministic order. This ensured that even if an automated job swapped two values, the parser would still interpret them correctly. I also documented the convention and added unit tests that check the argument mapping.

**Result** – The pipeline’s failure rate dropped from 12 % to <1 %, reducing production downtime by 35 %. The team adopted the positional‑argument pattern for all new ML scripts, and I learned how a small change in command‑line design can have outsized effects on reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
