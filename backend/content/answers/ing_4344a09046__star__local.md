---
qid: ing_4344a09046__star__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 292
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:43:25-05:00'
sources: []
---

**Situation:**  
I was leading a data‑annotation project for a medical imaging AI model that required labeling tumor boundaries in MRI scans. Our initial annotation round had two radiologists working independently on 300 images.

**Task:**  
My goal was to assess the consistency between annotators and ensure we met the industry standard of at least moderate agreement (kappa ≥ 0.6) before training the segmentation network.

**Action:**  
I calculated Cohen’s kappa for each image set, then visualized the distribution of scores. When I found a mean kappa of 0.52, I organized a joint review session where the radiologists compared discrepancies and discussed ambiguous cases. We refined the labeling protocol—defining clearer boundary rules and adding a confidence scale. After retraining them on a small validation subset, we re‑measured agreement, which rose to 0.68.

**Result:**  
The improved kappa translated into higher model accuracy: Dice coefficient increased from 0.72 to 0.81 on the test set. I learned that quantitative metrics guide process improvements, and collaborative calibration can turn a “poor” agreement (kappa < 0.6) into robust data for AI training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
