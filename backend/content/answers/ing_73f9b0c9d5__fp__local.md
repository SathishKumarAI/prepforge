---
qid: ing_73f9b0c9d5__fp__local
question: 'Explain: Evidence and criticism — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 515
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:11:34-05:00'
sources: []
---

**Spaced Repetition (SR)** is a memory‑retrieval schedule that optimizes the timing of review trials to maximize retention.  
At its core SR addresses **interference theory**: repeated exposure without decay causes forgetting; by spacing trials just before the point of lapse, we reinforce neural traces while keeping interference low. The mathematical backbone is the *forgetting curve* (Ebbinghaus), which SR parametrizes as a series of exponential decays \(R(t)=e^{-t/\tau}\). Algorithms like **SM‑2** or **Anki’s algorithm** estimate each item’s *difficulty* \(\tau\) from user performance and schedule the next interval \(I_{n+1}=I_n \times e^{(k-1)}\), where \(k\) is a difficulty factor. This greedy policy approximates the optimal Bayesian decision rule for maximizing expected future recall under resource constraints.

**Evidence**: Controlled lab studies (e.g., Cepeda et al., 2006) show SR yields 2–3× better retention than massed practice, even after long delays. Large‑scale field data from Anki users (millions of cards) confirm the *spacing effect* across domains. Meta‑analyses of educational trials report significant gains in both short‑term and transfer tests.

**Criticism**:  
1. **Ecological validity** – most studies use artificial word lists; real‐world materials involve elaboration, context, and motivation, which SR does not explicitly model.  
2. **Individual differences** – the simple exponential decay assumption ignores heterogeneity in learning rates and prior knowledge.  
3. **Algorithmic rigidity** – fixed difficulty parameters may over‑or under‑estimate intervals for complex items, leading to “over‑spacing” or “under‑spacing”.  

*A non‑obvious insight*: SR’s success hinges on *adaptive sampling*—it is not merely about timing but about shaping the distribution of practice events so that each trial samples the most informative point on the forgetting curve. This links SR to active learning in machine learning, where the learner queries labels that maximally reduce uncertainty. Recognizing this connection suggests hybrid models (e.g., Bayesian active spaced repetition) could further enhance both human and algorithmic memory systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
