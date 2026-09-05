---
qid: ing_b08c6e8c51__star__local
question: How do you evaluate multimodal systems - understanding and generation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 423
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:58-05:00'
sources: []
---

**Situation:**  
In my last role at a startup, we were building a product that let users upload a photo of an interior space and receive a short narrative description plus suggested furniture items. The marketing team was skeptical because the AI’s text sometimes sounded generic and the image‑to‑text accuracy lagged behind competitors.

**Task:**  
I needed to design a robust evaluation framework that would quantify both multimodal understanding (image classification, scene parsing) and generation quality (fluency, relevance), so we could iterate quickly and prove ROI to stakeholders.

**Action:**  
1. I set up an end‑to‑end pipeline using **PyTorch Lightning** for reproducibility.  
2. For *understanding*, I collected a curated test set of 5,000 images annotated with 20 scene categories; I computed per‑class precision/recall and used the **F<sub>β</sub> (β=0.7)** metric to weight recall more heavily for missing key objects.  
3. For *generation*, I employed a custom BLEU‑style score against human captions, plus a perplexity check from GPT‑2 fine‑tuned on our domain. I also ran **human‑in‑the‑loop** A/B tests with 200 participants rating relevance and readability on a 5‑point Likert scale.  
4. Finally, I automated dashboards in **Grafana**, feeding real‑time metrics into Slack alerts for any drop >2σ.

**Result:**  
After two sprints of tuning, image classification accuracy rose from 78% to 92%, while BLEU‑score improved by 15 points and human ratings increased by 1.8 on the Likert scale. The product launch achieved a 35% higher user engagement than the previous version, and I learned that balancing quantitative metrics with rapid human validation is key in multimodal AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
