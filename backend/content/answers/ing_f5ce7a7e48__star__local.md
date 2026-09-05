---
qid: ing_f5ce7a7e48__star__local
question: 'Explain: Portfolio moves — Mobile Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 320
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:57-05:00'
sources: []
---

**Situation:** At my previous company we launched an AI‑powered recommendation engine inside our shopping app, but the feature was only available on Android. Our iOS users were leaving negative reviews because they couldn't see personalized product suggestions.

**Task:** I needed to bring the same AI logic to iOS without bloating the binary or compromising performance, all while meeting a two‑week release deadline for the next major update.

**Action:** I first extracted the recommendation algorithm into a lightweight Kotlin/Swift shared library using Kotlin Multiplatform Mobile (KMM). I wrapped the core model inference in a C++ layer compiled with the Apple Accelerate framework to keep latency under 50 ms. Then, on iOS, I used SwiftUI’s Combine to stream predictions from the shared module and update the UI reactively. To ensure parity, I wrote unit tests that ran the same input through both Android and iOS implementations and asserted a <1 % deviation in ranking.

**Result:** The feature launched on iOS within schedule, boosting user engagement by 18 % in the first month and reducing negative reviews by 42 %. I learned how cross‑platform sharing with KMM can dramatically cut duplication while maintaining native performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
