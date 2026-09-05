---
qid: ing_96b3cadc28__star__local
question: 'Explain: The night-before cheat sheet — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 318
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:27-05:00'
sources: []
---

**Situation:**  
During my senior capstone, we were building a real‑time object detection model to run on a Raspberry Pi Zero. The deadline was the next day and our accuracy had stalled at 72% while inference time hovered around 300 ms per frame.

**Task:**  
I needed to squeeze both speed and precision within the hardware limits before the demo, without rewriting the entire pipeline or waiting for new data.

**Action:**  
I created a “night‑before cheat sheet” that mapped every critical hyperparameter and code snippet to its impact on latency and accuracy. I used TensorRT’s INT8 calibration, swapped the backbone from ResNet‑50 to MobileNet‑V2, and pruned the last fully connected layer by 40%. The cheat sheet also listed quick commands for profiling (cProfile + Nsight Systems), a list of “quick‑fix” thresholds, and placeholders for the most common bugs. I ran three rapid iterations—each guided by the cheat sheet—measuring FLOPs, memory footprint, and top‑1 accuracy on a 200‑image validation set.

**Result:**  
We achieved 85% accuracy with inference under 120 ms per frame, beating the client’s target by 30%. The cheat sheet became an internal playbook that cut debugging time by 70% for subsequent projects. I learned that a concise, parameter‑impact map turns last‑minute chaos into focused optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
