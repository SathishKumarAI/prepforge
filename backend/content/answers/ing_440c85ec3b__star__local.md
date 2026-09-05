---
qid: ing_440c85ec3b__star__local
question: 'Explain: Devin Review: AI to Stop Slop — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 370
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:08-05:00'
sources: []
---

**Situation:**  
At my previous company we were responsible for inspecting thousands of plastic parts produced on a high‑speed line. The quality metric—“slop” or dimensional deviation—was hovering at 4 % tolerance breach, costing us $1.2 M in rework each quarter.

**Task:**  
I was tasked with designing an AI‑driven inspection system that could reduce slop below 0.5 % and cut rework costs by at least 30 % within six months.

**Action:**  
First I gathered a dataset of 50,000 labeled images from the existing manual inspections, then used transfer learning on a ResNet‑50 backbone to detect subtle shape anomalies. I added an attention module that focused on edge curvature, which improved detection recall from 78 % to 92 %. Next, I integrated the model into our PLC pipeline via ONNX Runtime, keeping inference latency under 10 ms per part so it wouldn’t slow the line. To handle drift, I set up a continuous‑learning loop: every batch of rejected parts was automatically re‑labelled by the senior inspector and fed back to fine‑tune the model weekly.

**Result:**  
After deployment, slop dropped to 0.3 %—a 92 % reduction—and rework costs fell from $1.2 M to $180 K per quarter, a 85 % savings. I learned that marrying high‑accuracy models with real‑time constraints requires tight collaboration between data scientists and operations engineers, and that continuous learning is essential for maintaining performance in a dynamic production environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
