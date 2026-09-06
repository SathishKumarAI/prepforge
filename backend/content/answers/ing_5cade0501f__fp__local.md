---
qid: ing_5cade0501f__fp__local
question: 'Explain: A user says "send Maya the photos from Saturday''s hike." Design
  the on-device path from that utterance to a structured app action with resolved
  parameters.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 471
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:21:18-05:00'
sources: []
---

**From speech to “Send Maya” – an optimization‑driven mapping**

The user’s utterance is a *directed request*: “send Maya the photos from Saturday’s hike.”  
At first glance it looks like simple keyword spotting, but a principled solution treats it as a **structured prediction problem**: find a tuple  
\(a = \langle \text{action},\; \text{recipient},\; \text{resource}\rangle\) that maximises an *information‑theoretic utility*.

1. **Tokenisation & semantic roles** – the utterance is parsed into tokens; a lightweight transformer extracts dependencies (subject, verb, object).  
2. **Action hypothesis generation** – a finite set of app actions (e.g., `SendMessage`, `SharePhotos`) is enumerated; each candidate receives a prior based on the verb “send”.  
3. **Parameter disambiguation via Bayesian inference** –  
   * recipient: inferred from the proper noun “Maya”; posterior \(P(r|u)\) uses name‑entity embeddings and contact list priors.  
   * resource: the phrase “photos from Saturday’s hike” is matched against local media metadata (timestamp, GPS tag). The likelihood \(P(\text{photos}|\text{context})\) rewards collections whose timestamps fall within a ±1 h window of the last recorded “Saturday” event in the user’s calendar.  
4. **Utility maximisation** – the final action is chosen by \(\arg\max_a U(a)=\lambda\,H(a)-\mu\,C(a)\), where \(H\) is entropy reduction (confidence) and \(C\) is computational cost.  

**Non‑obvious insight:** The *contextual window* around “Saturday” need not be hard‑coded; by modelling the user’s temporal routine as a Gaussian process, the system learns that “Saturday” often refers to the most recent weekend, thereby reducing false positives when the user mentions multiple Saturdays in a month. This probabilistic smoothing is rarely exploited in hand‑crafted pipelines yet dramatically improves recall on-device.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
