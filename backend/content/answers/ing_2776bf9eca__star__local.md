---
qid: ing_2776bf9eca__star__local
question: 'Explain: Uh, yeah, rich links. Robot-specific data. So'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 344
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:33-05:00'
sources: []
---

**Situation:**  
At my last role, we were building a navigation system for an indoor delivery robot that had to learn object affordances from scratch. The onboard camera captured thousands of images per day, but the initial dataset was sparse and didn’t capture contextual cues like how objects were linked in space.

**Task:**  
I needed to enrich the training data with “rich links” – explicit relationships between visual features and semantic tags – so the robot could predict not just what an object was, but how it connected to others (e.g., a table next to a chair). The goal was to boost affordance prediction accuracy from 68 % to at least 85 % within two weeks.

**Action:**  
I introduced a graph‑based feature extractor that parsed each image into nodes (objects) and edges (spatial/semantic links). Using OpenCV for detection and spaCy for tag extraction, I built a lightweight adjacency matrix per frame. Then I trained a Graph Neural Network (GNN) in PyTorch, fine‑tuning with contrastive loss to emphasize correct links. To keep latency low, I pruned the graph by thresholding edge weights, reducing inference time from 120 ms to 45 ms.

**Result:**  
After deployment, affordance accuracy jumped to 88 %, and the robot’s task completion rate improved by 22 %. I learned that coupling visual perception with structured relational data can dramatically accelerate learning in embodied systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
