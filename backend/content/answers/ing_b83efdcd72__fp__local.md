---
qid: ing_b83efdcd72__fp__local
question: 'Explain: So all we''ll say is traffic, weather — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 389
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:56-05:00'
sources: []
---

**Why “traffic” and “weather” are the *only* things we mention in a Google‑Maps‑style system‑design interview**

The fundamental problem is to answer **“What’s the fastest route from A to B at this moment?”**  
That question can be reduced to:  

1. **Graph construction** – a road network as vertices (intersections) and weighted edges (segments).  
2. **Edge weight estimation** – how long it will take to traverse an edge now.

The *only* variables that change the edge weights in real time are:

| Variable | Why it matters for travel time | What else could you add? |
|----------|--------------------------------|---------------------------|
| Traffic density / speed limits | Directly scales traversal cost (time = distance/speed). | Adding road quality or construction would be *noise* unless you have a model that maps them to effective speed. |
| Weather (rain, snow, fog) | Alters speeds on affected segments (e.g., 30 % slower in heavy rain). | Temperature alone is irrelevant; only weather states that impact vehicle dynamics are useful. |

All other data—population density, tourist spots, parking availability—are *contextual* and do not influence the instantaneous traversal cost unless they alter traffic or weather.  
Hence interviewers focus on **traffic** and **weather**: they are the minimal sufficient statistics for dynamic edge weights.  

**Non‑obvious insight:** In a distributed system you need only maintain *delta updates* (e.g., “segment X is 20 % slower now”) rather than recompute full traversal times, because the static graph structure dominates complexity; real‑time variables are sparse, localized perturbations that can be applied as multiplicative factors to pre‑computed shortest paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
