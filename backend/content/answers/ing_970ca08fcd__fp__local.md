---
qid: ing_970ca08fcd__fp__local
question: 'Explain: Interview Notes - Zomato Design — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 377
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:26:45-05:00'
sources: []
---

**Why a food‑delivery UI is more than “pick a restaurant”**

The core problem the interviewers probe is *how to map an enormous, noisy data set (restaurants, menus, reviews, geolocations) onto a small screen while keeping the user’s intent clear and their path short*.  
To solve this they rely on **information‑theoretic compression**: every pixel must convey a distinct decision node. This means:

1. **Feature selection is a form of entropy reduction** – only the attributes that most reduce uncertainty about the next action (price, distance, cuisine) survive in the UI hierarchy.  
2. **Progressive disclosure follows Bayesian updating** – the system shows the most likely “next state” first and then lets users backtrack; each tap updates the posterior over restaurant sets.  
3. **Gestalt grouping is guided by clustering in latent space** – restaurants are embedded via a learned vector model, then visualized as clusters that respect both geographic proximity *and* culinary similarity, so a single swipe can bring a whole cuisine family into view.

### One non‑obvious insight
Most designers treat distance as the sole spatial cue. In Zomato’s design, **“affordance distance”** is used instead: the UI places nearby restaurants higher but also clusters distant yet highly rated options in a secondary panel that can be accessed with one gesture. This keeps the map uncluttered while still honouring user intent to explore “good food wherever it may lie”.  

The interview likely asked you to justify this trade‑off mathematically (expected click‑through time vs. search accuracy) and then sketch how you’d prototype a new clustering algorithm that respects both geography and cuisine similarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
