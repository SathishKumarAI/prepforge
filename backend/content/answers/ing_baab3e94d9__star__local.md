---
qid: ing_baab3e94d9__star__local
question: 'Explain: Questions that actually matter — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 381
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:18-05:00'
sources: []
---

**Situation:** While leading the launch of our new fitness‑tracking app, we noticed that user engagement dropped by 35 % after the first week. The product team suspected that the on‑device activity prediction model was too heavy for older smartphones and caused slow UI responses.

**Task:** I had to redesign the mobile ML pipeline so that predictions stayed accurate (≤ 5 % drop in F1 score) while keeping memory usage under 30 MB and inference latency below 200 ms on a range of devices, all before the next quarterly release.

**Action:** First, I mapped out the interview‑style questions we’d face: “How do you balance accuracy vs. resource constraints?” and “What trade‑offs would you make for battery life?” Using TensorFlow Lite, I pruned the model to 1/4 size via structured sparsity, then quantized weights to 8‑bit integers. I benchmarked latency on Pixel 5, iPhone 12, and a mid‑range Snapdragon phone, iterating until all met the target. I also added an adaptive caching layer that served predictions from a lightweight local model during peak usage.

**Result:** The new pipeline cut inference time to 120 ms and memory to 22 MB, boosting daily active users by 18 % in two weeks while keeping accuracy within 3 %. I learned that framing design questions around real constraints—device diversity, battery life, user experience—helps engineers prioritize trade‑offs that matter most.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
