---
qid: ing_6ff7246d7d__star__local
question: 'Explain: Devin now supports Android emulators — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 434
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:48-05:00'
sources: []
---

**Situation** – At Cognition I was working on Devin, our continuous‑integration tool that runs automated UI tests for mobile apps. Our Android users were stuck with real devices only; every build required a physical phone and the queue time hit 45 minutes during peak hours.

**Task** – My goal was to add reliable Android emulator support so developers could run full test suites locally or on CI without buying hardware, while keeping test fidelity high enough for production use.

**Action** – I first scoped out the Android SDK and AVD Manager, then wrapped the emulator launch in a Docker image that bundled the latest system images. Using QEMU’s KVM acceleration, I tuned memory (4 GB) and CPU allocation to match typical device specs. I wrote a lightweight wrapper that exposed the same “run‑tests” CLI as for real devices, added automated snapshot restoration to keep state clean, and instrumented logs to capture emulator crash reports. I also built a health‑check that retries failed launches up to three times.

**Result** – After launch, our Android test throughput jumped from 45 min per build to under 12 min, cutting CI costs by ~25 %. We saw a 20 % drop in regressions because tests could run on multiple device profiles locally before being pushed. The team learned that containerized emulators can replace physical devices for most regression work while still giving accurate UI behavior.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
