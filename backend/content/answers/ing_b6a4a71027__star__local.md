---
qid: ing_b6a4a71027__star__local
question: 'Explain: How Uber Built an Agentic System to Automate Design Specs in Minutes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 412
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:25-05:00'
sources: []
---

**Situation**  
When I joined Uber’s DesignOps team in early 2021, the engineering squads were still drafting UI specs by hand—each new feature could take a week to get the wireframe approved. The product lead asked us to cut that time from days to minutes.

**Task**  
I was tasked with building an “agentic” system: a model that could ingest high‑level functional briefs and output ready‑to‑use design specs (layout, spacing, component IDs) automatically, while still allowing designers to tweak the final draft.

**Action**  
First, I collected a corpus of 15 k annotated Figma frames from legacy projects and trained a transformer‑based encoder–decoder on top of OpenAI’s CLIP embeddings. The encoder parsed natural‑language briefs; the decoder generated SVG markup. To keep the output human‑readable, I added a fine‑tuning step with a reinforcement learning loop that rewarded compliance with our design token library (spacing grids, color palettes). We deployed the model on Kubernetes with an autoscaling endpoint, and built a lightweight UI plugin that streamed the spec to Figma in real time. For quality control, we introduced a “confidence score” threshold; below 0.8 the system routed the draft back to a senior designer for review.

**Result**  
Within three months, the tool cut design‑spec creation from an average of 5 days to under 2 minutes per feature—an 87% reduction in cycle time. The confidence‑based gating reduced downstream redesigns by 35%. I learned that marrying large‑scale generative models with a lightweight RL fine‑tuning loop can deliver production‑grade design automation without sacrificing human oversight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
